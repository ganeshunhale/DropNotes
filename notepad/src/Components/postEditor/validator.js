export function validPost(title, body) {
  if (title.length === 0 || body?.length === 0) return false;
  return true;
}
