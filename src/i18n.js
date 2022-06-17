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
        },
        userMenu: {
          home: "Головна",
          signIn: "Вхід",
          friends: "Друзі",
          photos: "Фото",
          posts: "Статті",
          author: "Автор",
          logOut: "Вихід",
          ua: "Українська",
          en: "Англійська",
          ru: "Російська"
        },
        userInfo: {
          contactInfo: "Контактна інформація",
          name: "Ім'я",
          phone: "Телефон",
          email: "Поштова адреса",
          username: "Псевдонім",
          personalWebsite: "Особистий сайт",
          address: "Адреса",
          city: "Місто",
          street: "Вулиця",
          suite: "Квартира",
          zipcode: "Поштовий індекс",
          company: "Місце роботи",
          companyName: "Компанія",
          slogan: "Гасло",
          whatWeDo: "Наша мета",
          read: "Детальніше"
        },
        posts: {
          aboutAuthor: "Детальніше про автора",
          readPost: "Прочитати статтю",
          loadMore: "Більше статей"
        },
        postForm: {
          title: "Назва статті",
          body: "Зміст статті",
          button: "Опублікувати"
        },
        postDetails: {
          correct: "Редагувати",
          delete: "Видалити",
          comments: "Коментарі",
          close: "Закрити"
        },
        friends: {
          phone: "Номер телефону",
          email: "Поштова адреса",
          more: "Детальніше"
        }
      }
    },
    en: {
      translation: {
        login: {
          login: "Login",
          id: "Enter user ID:",
          date: "Enter the time when you finish using this service:"
        },
        userMenu: {
          home: "Home",
          signIn: "SignIn",
          friends: "Friends",
          photos: "Photos",
          posts: "Posts",
          author: "Author",
          logOut: "Log Out",
          ua: "Ukrainian",
          en: "English",
          ru: "Russian"
        },
        userInfo: {
          contactInfo: "Contact info",
          name: "Name",
          phone: "Phone",
          email: "Email",
          username: "Nickname",
          personalWebsite: "Personal website",
          address: "Address",
          city: "City",
          street: "Street",
          suite: "Suite",
          zipcode: "Zipcode",
          company: "Company",
          companyName: "Name",
          slogan: "Slogan",
          whatWeDo: "What we do",
          read: "Read more"
        },
        posts: {
          aboutAuthor: "About author",
          readPost: "Read this post",
          loadMore: "Load more"
        },
        postForm: {
          title: "Post title",
          body: "Post text",
          button: "Publish"
        },
        postDetails: {
          correct: "Change",
          delete: "Delete",
          comments: "Comments",
          close: "Close"
        },
        friends: {
          phone: "Phone",
          email: "Email",
          more: "More info"
        }
      }
    },
    ru: {
      translation: {
        login: {
          login: "Вход",
          id: "Введите ID пользователя:",
          date: "Введите время, когда Вы закончите пользоваться этиим сэрвисом:"
        },
        userMenu: {
          home: "Главная",
          signIn: "Вход",
          friends: "Друзья",
          photos: "Фото",
          posts: "Статьи",
          author: "Автор",
          logOut: "Выход",
          ua: "Украинский",
          en: "Английский",
          ru: "Русский"
        },
        userInfo: {
          contactInfo: "Контактная информация",
          name: "Имя",
          phone: "Телефон",
          email: "Почтовый адрес",
          username: "Псевдоним",
          personalWebsite: "Личный сайт",
          address: "Адрес",
          city: "Город",
          street: "Улица",
          suite: "Квартира",
          zipcode: "Почтовый индекс",
          company: "Место роботы",
          companyName: "Название компании",
          slogan: "Лозунг",
          whatWeDo: "Наша цель",
          read: "Детальнее"
        },
        posts: {
          aboutAuthor: "Про автора",
          readPost: "Читать статью",
          loadMore: "Загрузить еще"
        },
        postForm: {
          title: "Название статьи",
          body: "Содердание статьи",
          button: "Обуликовать"
        },
        postDetails: {
          correct: "Изменить",
          delete: "Удадить",
          comments: "Комментарии",
          close: "Закрыть"
        },
        friends: {
          phone: "Номер телефона",
          email: "Почтовый адрес",
          more: "Детальнее"
        }
      }
    }
  }
});

export default i18n;
