export const valTypes = [
  "h1",
  "h2",
  "h3",
  "p",
  // "checkbox",
] as const;

export interface Value {
  valueType: (typeof valTypes)[number];
  checked?: boolean;
  value: string;
}
