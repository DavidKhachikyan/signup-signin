import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLanguage = localStorage.getItem("language") || "en";

const resources = {
  en: {
    translation: {
      signUp: "Sign Up",
      signIn: "Sign In",
      quickAndEasy: "It's quick and easy.",
      welcome: "Welcome Back!",
      name: "Name",
      nameRequired: "Name is required",
      lastName: "Last Name",
      lastNameRequired: "Last Name is required",
      invalidEmail: "Invalid email",
      emailRequired: "Email is required",
      email: "Email",
      phone: "Phone Number",
      phoneRequired: "Phone is required",
      region: "Region",
      cityVillage: "City, Village",
      school: "School",
      subject: "Subject",
      grade: "Grade",
      passwordMustBe: "Password must be at least 6 characters",
      passwordRequired: "Password is required",
      passwordMustMatch: "Passwords must match",
      confirmPasswordRequired: "Confirm Password is required",
      password: "Password",
      confirmPassword: "Confirm Password",
      registerDonor: "Register as a Donor",
      submit: "Ok",
      success:
        "You have successfully logged in. The main pages of the site will be available soon.",
      reject: "Login failed. Email or password is incorrect.",
      teachers: "Teachers",
      donors: "Donors",
      aboutAs: "About Us",
      contact: "Contact",
      blog: "Blog",
      page: "Page",
    },
  },
  hy: {
    translation: {
      signUp: "Գրանցվել",
      signIn: "Մուտք գործել",
      quickAndEasy: "Դա արագ և հեշտ է:",
      welcome: "Բարի վերադարձ!",
      name: "Անուն",
      nameRequired: "Անունը պարտադիր է",
      lastName: "Ազգանուն",
      lastNameRequired: "Ազգանունը պարտադիր է",
      invalidEmail: "Անվավեր էլ հասցե",
      emailRequired: "Էլ հասցեն պարտադիր է",
      email: "Էլ․ հասցե",
      phone: "Հեռախոսահամար",
      phoneRequired: "Հեռախոսահամարը պարտադիր է",
      region: "Մարզ",
      cityVillage: "Քաղաք, Գյուղ",
      school: "Դպրոց",
      subject: "Առարկա",
      grade: "Դասարան",
      password: "Գաղտնաբառ",
      passwordMustBe: "Գաղտնաբառը պետք է լինի առնվազն 6 նիշ",
      passwordRequired: "Գաղտնաբառը պարտադիր է",
      passwordMustMatch: "Գաղտնաբառերը պետք է համընկնեն",
      confirmPasswordRequired: "Հաստատեք գաղտնաբառը պարտադիր է",
      confirmPassword: "Հաստատեք գաղտնաբառը",
      registerDonor: "Գրանցվել որպես Դոնոր",
      submit: "Հաստատել",
      success:
        "Դուք հաջողությամբ մուտք գործեցիք կայք։ Կայքի հիմնական էջերը շուտով հասանելի կլինեն։",
      reject: "Մուտքը ձախողվեց։ Էլ.փոստը կամ գաղտնաբառը սխալ են։",
      teachers: "Ուսուցիչներ",
      donors: "Դոնորներ",
      aboutAs: "Մեր մասին",
      contact: "Կապ մեզ հետ",
      blog: "Բլոգ",
      page: "Էջ",
    },
  },
  ru: {
    translation: {
      signUp: "Зарегистрироваться",
      signIn: "Войти",
      quickAndEasy: "Это быстро и просто.",
      welcome: "С возвращением!",
      name: "Имя",
      nameRequired: "Имя обязательно",
      lastName: "Фамилия",
      lastNameRequired: "Фамилия обязательна",
      invalidEmail: "Неверный адрес электронной почты",
      emailRequired: "Требуется адрес электронной почты",
      email: "Электронная почта: адрес",
      phone: "Номер телефона",
      phoneRequired: "Телефон обязателен",
      region: "Регион",
      cityVillage: "Город, Деревня",
      school: "Школа",
      subject: "Предмет",
      grade: "Класс",
      password: "Пароль",
      passwordMustBe: "Пароль должен содержать минимум 6 символов",
      passwordRequired: "Пароль обязателен",
      passwordMustMatch: "Пароли должны совпадать",
      confirmPasswordRequired: "Подтверждение пароля обязательно",
      confirmPassword: "Подтвердить Пароль",
      registerDonor: "Зарегистрироваться как Донор",
      submit: "Ок",
      success:
        "Вы успешно вошли в систему. Основные страницы сайта будут доступны в ближайшее время.",
      reject: "Вход не выполнен. Электронная почта или пароль неверны.",
      teachers: "Учителя",
      donors: "Доноры",
      aboutAs: "О нас",
      contact: "Связаться с нами",
      blog: "Блог",
      page: "Страница",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
