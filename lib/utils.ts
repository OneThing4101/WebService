export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(value: number | null) {
  if (value === null) {
    return "Үнийн санал авах";
  }

  return `${new Intl.NumberFormat("mn-MN").format(value)}₮`;
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("mn-MN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(value));
}

export function createSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9а-яөүё\s-]/gi, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
