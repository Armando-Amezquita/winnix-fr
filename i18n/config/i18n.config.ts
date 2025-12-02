import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importar traducciones
import esAuth from "../locales/es/auth.json";
import esCommon from "../locales/es/common.json";
import esStatus from "../locales/es/status.json";
import esTournaments from "../locales/es/tournaments.json";

import enAuth from "../locales/en/auth.json";
import enCommon from "../locales/en/common.json";
import enStatus from "../locales/en/status.json";
import enTournaments from "../locales/en/tournaments.json";

// Detectar idioma del dispositivo
const deviceLanguage = Localization.getLocales()[0]?.languageCode || "es";
const supportedLanguages = ["es", "en"];
const defaultLanguage = supportedLanguages.includes(deviceLanguage) ? deviceLanguage : "es";

i18n.use(initReactI18next).init({
  compatibilityJSON: "v4", // Para React Native
  lng: defaultLanguage,
  fallbackLng: "es",
  supportedLngs: supportedLanguages,

  // Namespaces
  ns: ["common", "auth", "tournaments", "status"],
  defaultNS: "common",

  // Recursos de traducción
  resources: {
    es: {
      common: esCommon,
      auth: esAuth,
      tournaments: esTournaments,
      status: esStatus,
    },
    en: {
      common: enCommon,
      auth: enAuth,
      tournaments: enTournaments,
      status: enStatus,
    },
  },

  // Opciones de interpolación
  interpolation: {
    escapeValue: false,
  },

  // Debug (desactivar en producción)
  debug: __DEV__,
});

export default i18n;
