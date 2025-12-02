import { useTranslation as useI18nTranslation } from "react-i18next";

/**
 * Hook personalizado para traducciones
 * Extiende el hook de react-i18next con utilidades adicionales
 */
export const useTranslation = (namespace?: string) => {
  const { t, i18n } = useI18nTranslation(namespace);

  /**
   * Cambia el idioma de la aplicación
   * @param language - Código del idioma (ej: "es", "en")
   */
  const changeLanguage = async (language: string) => {
    await i18n.changeLanguage(language);
  };

  /**
   * Obtiene el idioma actual
   */
  const currentLanguage = i18n.language;

  /**
   * Verifica si el idioma actual es español
   */
  const isSpanish = currentLanguage === "es";

  /**
   * Verifica si el idioma actual es inglés
   */
  const isEnglish = currentLanguage === "en";

  return {
    t,
    changeLanguage,
    currentLanguage,
    isSpanish,
    isEnglish,
    i18n,
  };
};
