export function sanitizeText(text: string): string {
  if (!text) return "";
  if (typeof window === "undefined") {
    return text
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }
  const txt = document.createElement("textarea");
  txt.innerHTML = text;
  return txt.value;
}
