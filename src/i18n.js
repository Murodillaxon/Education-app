import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const languageKey = "selectedLanguage"; // Ключ для хранения выбранного языка

// Чтение выбранного языка из локального хранилища
const savedLanguage = localStorage.getItem(languageKey);

// Языковые ресурсы
// src/i18n.js
const resources = {
  en: {
    translation: {
      groups: "Groups",
      teachers: "Teachers",
      students: "Students",
      "Number of students": "Number of students",
      Settings: "Settings",
      "Here you can place your settings or additional information.":
        "Here you can place your settings or additional information.",
      Create: "Create",
      "Create Group": "Create Group",
      "Group Name": "Group Name",
      "Group Teacher": "Group Teacher",
      PricePerDay: "Price Per Month",
      "Number Room": "Number Room",
      "Lesson Time": "Lesson Time",
      Technology: "Technology",
      Capacity: "Capacity",
      Teacher: "Teacher",
      "Number of Students": "Number of Students",
      Success: "Success",
      "Group created successfully": "Group created successfully",
      Error: "Error",
      "Failed to create group": "Failed to create group",
      Groups: "Groups",
      "Please enter the group name": "Please enter the group name",
      "Please enter the price per day": "Please enter the price per month",
      "Please enter the number room": "Please enter the number room",
      "Please select the lesson time": "Please select the lesson time",
      "Select Technology": "Select Technology",
      "Select days of the week": "Select days of the week",
      "Odd Numbers": "Odd Numbers  ",
      "Even Numbers": "Even Numbers",
      "What days of the week": "What days of the week will the class be on ?",
      "Days of the Week": "Days of the Week",
      "Please select the teacher": "Please select the teacher",
      "Please select the number of students":
        "Please select the number of students",
      "Please enter the percent": "Please enter the percent",
      "Please enter the profession": "Please enter the profession",
      "Phone:": "Phone:",
      "Register": "Register",
      "Register Teacher": "Register Teacher",
      "First Name": "First Name",
      "Please enter the first name": "Please enter the first name",
      "Last Name": "Last Name",
      "Please enter the last name": "Please enter the last name",
      Patronymic: "Patronymic",
      "Please enter the patronymic": "Please enter the patronymic",
      "ID Number": "ID Number",
      "Please enter the ID number": "Please enter the ID number",
      "Phone Number": "Phone Number",
      "Please enter the phone number": "Please enter the phone number",
      "Birth Date": "Birth Date",
      "Please enter the birth date": "Please enter the birth date",
      Address: "Address",
      "Please enter the address": "Please enter the address",
      Sex: "Sex",
      "Please select the sex": "Please select the sex",
      Male: "Male",
      Female: "Female",
      Percent: "Percent",
      "Please enter the percent": "Please enter the percent",
      "Please enter the profession": "Please enter the profession",
      "Profession:": "Profession:",
      "Phone:": "Phone:",
      "Register": "Register",
      "Teacher registered successfully":
        "Teacher registered successfully",
      Error: "Error",
      "Failed to register teacher": "Failed to register teacher",
      "Profession:": "Profession:",
      "Phone:": "Phone:",
      "Register": "Register",
      "Register Teacher": "Register Teacher",
      "First Name": "First Name",
      "Please enter the first name": "Please enter the first name",
      "Last Name": "Last Name",
      "Please enter the last name": "Please enter the last name",
      Patronymic: "Patronymic",
      "Please enter the patronymic": "Please enter the patronymic",
      "ID Number": "ID Number",
      "Please enter the ID number": "Please enter the ID number",
      "Phone Number": "Phone Number",
      "Please enter the phone number": "Please enter the phone number",
      "Birth Date": "Birth Date",
      "Please enter the birth date": "Please enter the birth date",

      subjects: 
      {
        "Fanlar / Предметы / Subjects": [
          { uz: "Matematika", ru: "Математика", en: "Mathematics" },
          { uz: "Fizika", ru: "Физика", en: "Physics" },
          { uz: "Kimyo", ru: "Химия", en: "Chemistry" },
          { uz: "Biologiya", ru: "Биология", en: "Biology" },
          { uz: "Geografiya", ru: "География", en: "Geography" },
          { uz: "Tarix", ru: "История", en: "History" },
          { uz: "Adabiyot", ru: "Литература", en: "Literature" },
          { uz: "Ona tili", ru: "Родной язык", en: "Native Language" },
        ],
        "IT va Texnologiyalar / IT и Технологии / IT and Technologies": [
          { uz: "React.js", ru: "React.js", en: "React.js" },
          { uz: "JavaScript", ru: "JavaScript", en: "JavaScript" },
          { uz: "HTML/CSS", ru: "HTML/CSS", en: "HTML/CSS" },
          { uz: "Python", ru: "Python", en: "Python" },
          { uz: "Java", ru: "Java", en: "Java" },
          { uz: "C++", ru: "C++", en: "C++" },
          { uz: "Data Science", ru: "Наука о данных", en: "Data Science" },
          {
            uz: "Machine Learning",
            ru: "Машинное обучение",
            en: "Machine Learning",
          },
          {
            uz: "Web Development",
            ru: "Веб-разработка",
            en: "Web Development",
          },
          {
            uz: "Database Management",
            ru: "Управление базами данных",
            en: "Database Management",
          },
        ],
        "Jahon Tillar / Языки мира / World Languages": [
          { uz: "Ingliz tili", ru: "Английский язык", en: "English" },
          { uz: "Rus tili", ru: "Русский язык", en: "Russian" },
          { uz: "Nemis tili", ru: "Немецкий язык", en: "German" },
          { uz: "Arab tili", ru: "Арабский язык", en: "Arabic" },
          { uz: "Fransuz tili", ru: "Французский язык", en: "French" },
          { uz: "Ispan tili", ru: "Испанский язык", en: "Spanish" },
          { uz: "Italya tili", ru: "Итальянский язык", en: "Italian" },
          { uz: "Yapon tili", ru: "Японский язык", en: "Japanese" },
          { uz: "Xitoy tili", ru: "Китайский язык", en: "Chinese" },
          { uz: "Koreys tili", ru: "Корейский язык", en: "Korean" },
        ],
      },
    },
  },
  ru: {
    translation: {
      groups: "Группы",
      teachers: "Учителя",
      students: "Ученики",
      "Number of students": "Количество учеников",
      Settings: "Настройки",
      "Here you can place your settings or additional information.":
        "Здесь вы можете разместить свои настройки или дополнительную информацию.",
      Create: "Создать",
      "Create Group": "Создать группу",
      "Group Name": "Название группы",
      "Group Teacher": "Учитель группы",
      PricePerDay: "Цена за месяц",
      "Number Room": "Номер комнаты",
      "Lesson Time": "Время урока",
      Technology: "Технология",
      Capacity: "Вместимость",
      Teacher: "Учитель",
      "Number of Students": "Количество учеников",
      Success: "Успех",
      "Group created successfully": "Группа успешно создана",
      Error: "Ошибка",
      "Failed to create group": "Не удалось создать группу",
      Groups: "Группы",
      "Please enter the group name": "Пожалуйста, введите название группы",
      "Please enter the price per day": "Пожалуйста, введите цену за месяц",
      "Please enter the number room": "Пожалуйста, введите номер комнаты",
      "Please select the lesson time": "Пожалуйста, выберите время урока",
      "Select Technology": "Выберите технологию",
      "Select days of the week": "Выберите дни недели",
      "Odd Numbers": "Нечетные числа ",
      "Even Numbers": "Четные числа",
      "What days of the week": "Какие дни недели будет уроки ?",
      "Days of the Week": "Дни недели",
      subjects: 
        {
          "Fanlar / Предметы / Subjects": [
            { uz: "Matematika", ru: "Математика", en: "Mathematics" },
            { uz: "Fizika", ru: "Физика", en: "Physics" },
            { uz: "Kimyo", ru: "Химия", en: "Chemistry" },
            { uz: "Biologiya", ru: "Биология", en: "Biology" },
            { uz: "Geografiya", ru: "География", en: "Geography" },
            { uz: "Tarix", ru: "История", en: "History" },
            { uz: "Adabiyot", ru: "Литература", en: "Literature" },
            { uz: "Ona tili", ru: "Родной язык", en: "Native Language" },
          ],
          "IT va Texnologiyalar / IT и Технологии / IT and Technologies": [
            { uz: "React.js", ru: "React.js", en: "React.js" },
            { uz: "JavaScript", ru: "JavaScript", en: "JavaScript" },
            { uz: "HTML/CSS", ru: "HTML/CSS", en: "HTML/CSS" },
            { uz: "Python", ru: "Python", en: "Python" },
            { uz: "Java", ru: "Java", en: "Java" },
            { uz: "C++", ru: "C++", en: "C++" },
            { uz: "Data Science", ru: "Наука о данных", en: "Data Science" },
            {
              uz: "Machine Learning",
              ru: "Машинное обучение",
              en: "Machine Learning",
            },
            {
              uz: "Web Development",
              ru: "Веб-разработка",
              en: "Web Development",
            },
            {
              uz: "Database Management",
              ru: "Управление базами данных",
              en: "Database Management",
            },
          ],
          "Jahon Tillar / Языки мира / World Languages": [
            { uz: "Ingliz tili", ru: "Английский язык", en: "English" },
            { uz: "Rus tili", ru: "Русский язык", en: "Russian" },
            { uz: "Nemis tili", ru: "Немецкий язык", en: "German" },
            { uz: "Arab tili", ru: "Арабский язык", en: "Arabic" },
            { uz: "Fransuz tili", ru: "Французский язык", en: "French" },
            { uz: "Ispan tili", ru: "Испанский язык", en: "Spanish" },
            { uz: "Italya tili", ru: "Итальянский язык", en: "Italian" },
            { uz: "Yapon tili", ru: "Японский язык", en: "Japanese" },
            { uz: "Xitoy tili", ru: "Китайский язык", en: "Chinese" },
            { uz: "Koreys tili", ru: "Корейский язык", en: "Korean" },
          ],
        },
      
      "Loading...": "Загрузка...",
      "Failed to fetch teachers": "Не удалось получить преподавателей",
      Teachers: "Преподаватели",
      "Register Teacher": "Зарегистрировать преподавателя",
      "First Name": "Имя",
      "Please enter the first name": "Пожалуйста, введите имя",
      "Last Name": "Фамилия",
      "Please enter the last name": "Пожалуйста, введите фамилию",
      Patronymic: "Отчество",
      "Please enter the patronymic": "Пожалуйста, введите отчество",
      "ID Number": "Номер удостоверения",
      "Please enter the ID number": "Пожалуйста, введите номер удостоверения",
      "Phone Number": "Номер телефона",
      "Please enter the phone number": "Пожалуйста, введите номер телефона",
      "Birth Date": "Дата рождения",
      "Please enter the birth date": "Пожалуйста, введите дату рождения",
      Address: "Адрес",
      "Please enter the address": "Пожалуйста, введите адрес",
      Sex: "Пол",
      "Please select the sex": "Пожалуйста, выберите пол",
      Male: "Мужской",
      Female: "Женский",
      Percent: "Процент",
      "Please enter the percent": "Пожалуйста, введите процент",
      Profession: "Профессия",
      "Please enter the profession": "Пожалуйста, выберите профессию",
      Success: "Успех",
      "Teacher registered successfully":
        "Преподаватель успешно зарегистрирован",
      Error: "Ошибка",
      "Failed to register teacher": "Не удалось зарегистрировать преподавателя",
      "Profession:": "Профессия:",
      "Phone:": "Телефон:",
      "Register": "Зарегистрировать",
    },
  },
};

i18n
  .use(initReactI18next) // передаем i18next в react-i18next
  .init({
    resources,
    lng: savedLanguage || "ru", // Используем сохраненный язык, если он есть, в противном случае используем русский
    interpolation: {
      escapeValue: false, // react уже экранирует значения
    },
  });

export default i18n;
