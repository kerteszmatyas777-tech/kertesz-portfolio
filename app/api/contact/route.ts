type ContactPayload = {
  name?: unknown;
  email?: unknown;
  service?: unknown;
  budget?: unknown;
  referral?: unknown;
  deadline?: unknown;
  message?: unknown;
  website?: unknown;
};

const MAX_FIELD_LENGTH = 2_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

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

function isRateLimited(request: Request) {
  const clientIp = request.headers
    .get("x-forwarded-for")
    ?.split(",")[0]
    ?.trim() || "unknown";
  const now = Date.now();
  const recentRequests = (requestLog.get(clientIp) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(clientIp, recentRequests);
    return true;
  }

  recentRequests.push(now);
  requestLog.set(clientIp, recentRequests);
  return false;
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");

  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ error: "Invalid request origin." }, { status: 403 });
  }

  if (isRateLimited(request)) {
    return Response.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
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
  const referral = getValue(payload.referral);
  const deadline = getValue(payload.deadline);
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
    [name, email, service, budget, referral, deadline, message].some(
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
    `How they found you: ${referral || "Not provided"}`,
    `Estimated deadline: ${deadline || "Not provided"}`,
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
    <p><strong>How they found you:</strong> ${escapeHtml(referral || "Not provided")}</p>
    <p><strong>Estimated deadline:</strong> ${escapeHtml(deadline || "Not provided")}</p>
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
