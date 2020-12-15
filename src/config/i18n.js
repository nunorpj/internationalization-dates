import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "../locales/index";
import { format as f } from "date-fns";

i18n.use(initReactI18next).init({
  resources,
  debug: false,
  lng: "en-US",
  fallbackLng: "en-US",
  languages: Object.keys(resources),
  whitelist: Object.keys(resources),
  defaultNS: "resources",
  ns: ["resources"],
  interpolation: {
    format: (value, format, lng) => {
      if (value instanceof Date) return f(value, format);

      return value;
    },
  },
});

export default i18n;
