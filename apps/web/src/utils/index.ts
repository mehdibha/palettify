import { APP_URL } from "@/config";

export function absoluteUrl(path: string) {
  return `${APP_URL}${path}`;
}

export function exclude(object, keys) {
  return Object.fromEntries(
    Object.entries(object).filter(([key]) => !keys.includes(key))
  );
}
