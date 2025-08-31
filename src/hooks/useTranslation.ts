import { useLanguage } from '@/contexts/LanguageContext';
import { translations, type TranslationKeys } from '@/i18n/translations';

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: TranslationKeys): string => {
    return translations[language][key] || key;
  };

  return { t };
};