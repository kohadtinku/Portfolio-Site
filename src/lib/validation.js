export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const LIMITS = { name: 80, subject: 120, message: 2000 };

// Shared by the client form and the API route. Returns { field: message }.
export function validateContact(d = {}) {
  const e = {};
  const name = String(d.name ?? "").trim(), email = String(d.email ?? "").trim();
  const subject = String(d.subject ?? "").trim(), message = String(d.message ?? "").trim();
  if (name.length < 2) e.name = "Enter your name (2 characters or more).";
  else if (name.length > LIMITS.name) e.name = `Keep your name under ${LIMITS.name} characters.`;
  if (!EMAIL_RE.test(email)) e.email = "Enter a valid email address.";
  if (subject.length < 3) e.subject = "Enter a subject (3 characters or more).";
  else if (subject.length > LIMITS.subject) e.subject = `Keep the subject under ${LIMITS.subject} characters.`;
  if (message.length < 10) e.message = "Write a message of at least 10 characters.";
  else if (message.length > LIMITS.message) e.message = `Keep the message under ${LIMITS.message} characters.`;
  return e;
}
