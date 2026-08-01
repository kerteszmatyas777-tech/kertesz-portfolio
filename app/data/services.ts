export const serviceSlugs = [
  "brand-identity",
  "print-design",
  "digital-content",
  "web-design",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export function isServiceSlug(value: string): value is ServiceSlug {
  return serviceSlugs.includes(value as ServiceSlug);
}
