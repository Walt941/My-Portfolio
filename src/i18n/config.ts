import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import en from "./local/en/en";
import es from "./local/es/es";

const resources = {
  en: { translation: en },
  es: { translation: es },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('preferred_language') || 'es',
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;