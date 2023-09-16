import i18n from 'i18next';
import en from './en.json';
import vi from './vi.json';
import {initReactI18next} from 'react-i18next';
export const languages = {
  en: {translation: en},
  vi: {translation: vi},
};
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'vi',
  fallbackLng: 'en',
  resources: languages,
});

export default i18n;
