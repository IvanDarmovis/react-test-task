import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "ua",
  interpolation: {
    escapeValue: false
  },
  resources: {
    ua: {
      translation: {
        login: {
          login: "Вхід",
          id: "Введіть ID користувача:",
          date: "Введіть час, коли Ви закінчите користуватись цим сервісом:"
        }
      }
    },
    ru: {
      translation: {
        login: {
          login: "Вход",
          id: "Введите ID пользователя:",
          date: "Введите время, когда Вы закончите пользоваться этиим сэрвисом:"
        }
      }
    },
    en: {
      translation: {
        login: {
          login: "Login",
          id: "Enter user ID:",
          date: "Enter the time when you finish using this service:"
        }
      }
    }
  }
});

export default i18n;
