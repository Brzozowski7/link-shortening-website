import { lang } from "./App.const";
export function loadMessages(locale) {
  switch (locale) {
    case lang.fr:
      return import("../translations/fr.json");
    case lang.en:
      return import("../translations/en.json");
    case lang.de:
      return import("../translations/de.json");
    default:
      return import("../translations/en.json");
  }
}
