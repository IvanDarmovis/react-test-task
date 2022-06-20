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
          whatWeDo: "Наша мета"
        },
        posts: {
          aboutAuthor: "Про автора",
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
        },
        author: {
          name: "Іван Дармовіс",
          position: "Junior Front-End розробник",
          summaryTitle: "Коротка інформація",
          summary:
            "Я junior Front-End розробник. Орієнтуютсья на такі напрямки, як React, JS, HTML та CSS. На даний момент почав вивчати TS та Node.js. Вважаю розробку необхідною для полегшення типових задач задля зосередження на більш серйозних завданнях.",
          projects: {
            section: "Проекти",
            first: {
              title: "Сайт компанії з продажу морозива.",
              text: "Адаптивна верстка. Використання Parcel, SCSS, JS, HTML"
            },
            second: {
              title:
                "Сайт для пошуку фільмів з можливістю зробити свою власну бібліотеку.",
              text: "Адаптивна верстка. Використання SCSS, HTML, JS, Parcel."
            }
          },
          experience: {
            section: "Досвід роботи",
            title: {
              resp: "Обов'язки:",
              achivs: "Досягнення:"
            },
            first: {
              title: "Служба підтримки користувачів | 2021 - до цього часу",
              responsibilities: {
                first:
                  "спілкування з клієнтами в чаті, допомога у вирішенні проблем, що виникли та відповідь на поставлені питання.",
                second: "Ведення переписок з клієнтами по пошті.",
                third: "Нагляд за дотриманням правил сайту."
              },
              achievement: {
                first: "Вивчив та зміг виконувати всі робочі процеси.",
                second: "Досяг рівня заступника старшого зміни."
              }
            },
            second: {
              title:
                "Розробник технічних креслень Kromberg & Shubert Ukraine | 2016 - 2018",
              responsibilities: {
                first:
                  "Створення нових та підтримка вже існуючої бібліотеки технічних креслень.",
                second: "Впровадження змін в кресленні та на виробництві.",
                third:
                  "Змінна креслень для запобігання нових та виправлення вже існуючих проблем і помилок.",
                four: "Підтримка виробництва."
              },
              achievement: {
                first:
                  "Мінімізував кількість помилок на проводках двох проектів та успішний запуск одного з них.",
                second:
                  "Успішна взаємодія з відділом якості для вирішення проблем і помилок на виробництві."
              }
            }
          },
          education: {
            section: "Освіта",
            first: {
              place: "Луцький національний технічний університет | 2012 - 2015",
              branch: "Спеціаліст | Комп'ютерні системи та мережі"
            },
            second: {
              place: "ІТ школа GoIT | 2021 - 2022",
              branch: "Full stack розробник | JS + React"
            }
          },
          contacts: {
            title: "Контактна інформація",
            coordination: "Луцьк, Україна"
          },
          skills: {
            tech: {
              title: "Технічні навички"
            },
            soft: {
              title: "Особисті якості",
              first: "Легко адаптуюсь",
              second: "Спокійний",
              third: "Логічне мислення",
              fourth: "Досвід роботи в команді",
              fifth: "Організованість",
              sixth: "Етичність"
            }
          },
          languages: {
            title: "Рівень володіння мовами",
            ukr: "Українська - рідна",
            rus: "Російська - вільно володію",
            eng: "Англійська - середній рівень"
          }
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
          whatWeDo: "What we do"
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
        },
        author: {
          name: "Ivan Darmovis",
          position: "Junior Front-End developer",
          summaryTitle: "SUMMARY",
          summary:
            "I am a Junior Fron-End developer. I focus on React, JS, HTML5 and CSS3. I am currently studding TS and Node.js. I consider the development necessary to facilitate routine tasks, which will allow us to focus on more serious tasks.",
          projects: {
            section: "PROJECTS",
            first: {
              title: "Ice Cream company site (landing).",
              text: "Responsible design. Used Parcel, SCSS, JS, HTML."
            },
            second: {
              title:
                "Site for searching movies with ability to create own film library.",
              text: "Responsible design. Used SCSS, HTML, JS, Parcel."
            }
          },
          experience: {
            section: "WORK EXPERIENCE",
            title: {
              resp: "Responsibilities:",
              achivs: "Achievement:"
            },
            first: {
              title: "Customer support | 2021 - present",
              responsibilities: {
                first:
                  "Chat with customers, help them to solve their problems and unswer for their questions.",
                second: "Сorrespondence with clients.",
                third: "Monitoring complience with the rules of the site."
              },
              achievement: {
                first: "Learn and can perform all work processes.",
                second: "Took the position of deputy senior shift."
              }
            },
            second: {
              title:
                "Technical drawing engineer Kromberg & Shubert Ukraine | 2016 - 2018",
              responsibilities: {
                first: "Create and support technical drawing.",
                second:
                  "Implement changes in the drawing and on the production.",
                third:
                  "Chang the drawing to prevent and correct errors and mistaces.",
                four: "Support production."
              },
              achievement: {
                first:
                  "Minimize amount of mistaces on the hurnesses of two projects and succeful launching one of them;",
                second: "problem on the projects."
              }
            }
          },
          education: {
            section: "EDUCATION",
            first: {
              place: "Lutsk National Technical University | 2012 - 2015",
              branch: "Specialist | Computer Systems and Networks"
            },
            second: {
              place: "IT School GoIT | 2021 - 2022",
              branch: "Full stack developer | JS + React"
            }
          },
          contacts: {
            title: "CONTACT INFORMATION",
            coordination: "Lutsk, Ukraine"
          },
          skills: {
            tech: {
              title: "TECH SKILLS"
            },
            soft: {
              title: "SOFT SKILLS",
              first: "Adaptability",
              second: "Calmness",
              third: "Logical reasoning",
              fourth: "Teamwork",
              fifth: "Organization",
              sixth: "Work Ethic"
            }
          },
          languages: {
            title: "LANGUAGE SKILLS",
            ukr: "Ukrainian - native",
            rus: "Russian - fluent",
            eng: "English - intermediate"
          }
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
          whatWeDo: "Наша цель"
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
        },
        author: {
          name: "Иван Дармовис",
          position: "Junior Front-End разработчик",
          summaryTitle: "Краткая информация",
          summary:
            "Я junior Front-End разработчик. Фокусируюсь на таких направлениях, как React, JS, HTML и CSS. На данный момент начал изучать TS и Node.js. Считаю разработку необходимой для упрощения однотипных задач в угоду более важным задачам.",
          projects: {
            section: "Проэкты",
            first: {
              title: "Сайт компании по продаже мороженого.",
              text: "Адаптивная вёрстка. Использование Parcel, SCSS, JS, HTML."
            },
            second: {
              title:
                "Сайт для поиска фильмов с возможностью сделать свою личную иблиотеку.",
              text: "Адаптивная вёрстка. Использование SCSS, HTML, JS, Parcel."
            }
          },
          experience: {
            section: "Опыт работы",
            title: {
              resp: "Обязанности:",
              achivs: "Достижения:"
            },
            first: {
              title:
                "Служба поддержки пользователей | 2021 - до текущего времени",
              responsibilities: {
                first:
                  "Общение с клиентами в чате, помощь в решении возникших проблем, ответ на поставленные вопросы.",
                second: "Ведение почтовых переписок с клиентами.",
                third: "Контроль за соблюдением правил сайта."
              },
              achievement: {
                first: "Изучил и смог выполнять все рабочие процессы.",
                second: "Достиг уровня заместителя старшего смены."
              }
            },
            second: {
              title:
                "Разработчик технически чертежей Kromberg & Shubert Ukraine | 2016 - 2018",
              responsibilities: {
                first:
                  "Создание новых и поддержание уже существующей библиотеки технических чертежей.",
                second: "Внесение изменений в чертежах и на производстве.",
                third:
                  "Изменение чертежей для предтвращения новых и исправления уже существующих проблем и ошибок.",
                four: "Поддержка производства."
              },
              achievement: {
                first:
                  "Минимизировал количество ошибо на проводках двух проэктов и успешный запуск одного из них.",
                second:
                  "Успешное взаимодействие с отделом качетсва для исправления проблем и ошибок на производстве."
              }
            }
          },
          education: {
            section: "Образование",
            first: {
              place:
                "Луцкий национальный технический университет | 2012 - 2015",
              branch: "Специалист | Компьютерные системы и сети"
            },
            second: {
              place: "ІТ школа GoIT | 2021 - 2022",
              branch: "Full stack разработчик | JS + React"
            }
          },
          contacts: {
            title: "Контактная информация",
            coordination: "Луцк, Украина"
          },
          skills: {
            tech: {
              title: "Технические навыки"
            },
            soft: {
              title: "Личные качества",
              first: "Легко адаптируюсь",
              second: "Спокойствие",
              third: "Логическое мышление",
              fourth: "Опыт работы в команде",
              fifth: "Организованность",
              sixth: "Этичность"
            }
          },
          languages: {
            title: "Уровень владения языками",
            ukr: "Украинский - родной",
            rus: "Русский - свободно",
            eng: "Английский - средний уровень"
          }
        }
      }
    }
  }
});

export default i18n;
