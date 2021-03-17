import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translation from "./translation/ja.json";

export const resources = {
  ja: {
    translation,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: "ja",
  resources,
});
