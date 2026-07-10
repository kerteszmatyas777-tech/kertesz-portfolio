type ContactPayload = {
  name?: unknown;
  email?: unknown;
  service?: unknown;
  budget?: unknown;
  message?: unknown;
  website?: unknown;
};

const MAX_FIELD_LENGTH = 2_000;

function getValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };

    return entities[character];
  });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");

  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ error: "Invalid request origin." }, { status: 403 });
  }

  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid form data." }, { status: 400 });
  }

  const name = getValue(payload.name);
  const email = getValue(payload.email);
  const service = getValue(payload.service);
  const budget = getValue(payload.budget);
  const message = getValue(payload.message);
  const website = getValue(payload.website);

  if (website) {
    return Response.json({ success: true });
  }

  if (
    !name ||
    !email ||
    !service ||
    !budget ||
    !message ||
    !/^\S+@\S+\.\S+$/.test(email) ||
    [name, email, service, budget, message].some(
      (value) => value.length > MAX_FIELD_LENGTH
    )
  ) {
    return Response.json({ error: "Invalid form data." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    return Response.json({ error: "Email service is unavailable." }, { status: 503 });
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Service: ${service}`,
    `Budget: ${budget}`,
    "",
    "Project details:",
    message,
  ].join("\n");
  const html = `
    <h1>New project enquiry</h1>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Service:</strong> ${escapeHtml(service)}</p>
    <p><strong>Budget:</strong> ${escapeHtml(budget)}</p>
    <p><strong>Project details:</strong><br />${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: ["kerteszmatyas777@gmail.com"],
        reply_to: email,
        subject: `New project enquiry — ${service}`,
        text,
        html,
      }),
    });

    if (!response.ok) {
      console.error("Resend contact form error:", await response.text());
      return Response.json({ error: "Unable to send email." }, { status: 502 });
    }
  } catch (error) {
    console.error("Contact form delivery error:", error);
    return Response.json({ error: "Unable to send email." }, { status: 502 });
  }

  return Response.json({ success: true });
}
