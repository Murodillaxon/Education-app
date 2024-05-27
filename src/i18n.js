import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const languageKey = 'selectedLanguage'; // Ключ для хранения выбранного языка

// Чтение выбранного языка из локального хранилища
const savedLanguage = localStorage.getItem(languageKey);

// Языковые ресурсы
const resources = {
  en: {
    translation: {
      "groups": "Groups",
      "teachers": "Teachers",
      "students": "Students",
      "Number of students": "Number of students"
    }
  },
  ru: {
    translation: {
      "groups": "Группы",
      "teachers": "Учители",
      "students": "Студенты",
      "Number of students": "Количество студентов"
    }
  }
};

i18n
  .use(initReactI18next) // передаем i18next в react-i18next
  .init({
    resources,
    lng: savedLanguage || 'ru', // Используем сохраненный язык, если он есть, в противном случае используем русский
    interpolation: {
      escapeValue: false // react уже экранирует значения
    }
  });

export default i18n;
