import { en, type Dictionary } from "@/content/en";
import { tl } from "@/content/tl";

export type Lang = "en" | "tl";

export const dictionaries: Record<Lang, Dictionary> = { en, tl };

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}

/** Path of the home page for each language. */
export const langPath: Record<Lang, string> = { en: "/", tl: "/tl" };
