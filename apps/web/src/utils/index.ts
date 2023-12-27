import { APP_URL } from "@/config";

export function absoluteUrl(path: string) {
  return `${APP_URL}${path}`;
}
