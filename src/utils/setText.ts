export function setText(id: string, value: string) {
  const el = document.querySelector(`#${id}`);
  if (el) el.textContent = value;
}