import s from "./Author.module.css";
import photo from "./photo.jpg";
import { useTranslation } from "react-i18next";

export default function Author() {
  const { t } = useTranslation();

  return (
    <div className={s.cvContainer}>
      <main className={s.mainContent}>
        <header className={s.header}>
          <div className={s.textContainer}>
            <h1 className={s.name}>{t("author.name")}</h1>
            <h2 className={s.position}>{t("author.position")}</h2>
            <h3 className={s.summaryTitle}>{t("author.summaryTitle")}</h3>
            <p className={s.summary}>{t("author.summary")}</p>
          </div>
        </header>
        <section>
          <div className={s.textContainer}>
            <h3>{t("author.projects.section")}</h3>
            <ul className={s.projectsList}>
              <li>
                <a
                  className={s.projectLink}
                  href="https://joinua.github.io/icecream-project/"
                >
                  IceCream{" "}
                </a>
                (
                <a
                  className={s.repoLink}
                  href="https://github.com/joinua/icecream-project"
                >
                  repo
                </a>
                )<p>{t("author.projects.first.title")}</p>
                <p>{t("author.projects.first.text")}</p>
              </li>
              <li>
                <a
                  className={s.projectLink}
                  href="https://stassytnykov.github.io/team-project-goit/"
                >
                  Filmoteka{" "}
                </a>
                (
                <a
                  className={s.repoLink}
                  href="https://github.com/StasSytnykov/team-project-goit"
                >
                  repo
                </a>
                )<p>{t("author.projects.second.title")}</p>
                <p>{t("author.projects.second.text")}</p>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div className={s.textContainer}>
            <h3>{t("author.experience.section")}</h3>
            <ul className={s.companyList}>
              <li>
                <h4>{t("author.experience.first.title")}</h4>
                <p>{t("author.experience.title.resp")}</p>
                <ul className={s.describeList}>
                  <li>{t("author.experience.first.responsibilities.first")}</li>
                  <li>
                    {t("author.experience.first.responsibilities.second")}
                  </li>
                  <li>{t("author.experience.first.responsibilities.third")}</li>
                </ul>
                <p>{t("author.experience.title.achivs")}</p>
                <ul className={s.describeList}>
                  <li>{t("author.experience.first.achievement.first")}</li>
                  <li>{t("author.experience.first.achievement.second")}</li>
                </ul>
              </li>
              <li>
                <h4>{t("author.experience.second.title")}</h4>
                <p>{t("author.experience.title.resp")}</p>
                <ul className={s.describeList}>
                  <li>
                    {t("author.experience.second.responsibilities.first")}
                  </li>
                  <li>
                    {t("author.experience.second.responsibilities.second")}
                  </li>
                  <li>
                    {t("author.experience.second.responsibilities.third")}
                  </li>
                  <li>{t("author.experience.second.responsibilities.four")}</li>
                </ul>
                <p>{t("author.experience.title.achivs")}</p>
                <ul className={s.describeList}>
                  <li>{t("author.experience.second.achievement.first")}</li>
                  <li>{t("author.experience.second.achievement.second")}</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div className={s.textContainer}>
            <h3>{t("author.education.section")}</h3>
            <ul className={s.educationList}>
              <li>
                <h4>{t("author.education.first.place")}</h4>
                <p>{t("author.education.first.branch")}</p>
              </li>
              <li>
                <h4>{t("author.education.second.place")}</h4>
                <p>{t("author.education.second.branch")}</p>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <aside className={s.side}>
        <img src={photo} alt="" className={s.photo} />
        <div className={s.sidePart}>
          <h3>{t("author.contacts.title")}</h3>
          <ul className={s.contactsList}>
            <li>
              <a href="tel:+380683829387">+38 (068) 38-29-387</a>
            </li>
            <li>
              <a href="mailto:ivan.darmovis1@gmail.com">
                ivan.darmovis1@gmail.com
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ivan-darmovis-804258239/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/IvanDarmovis">Github</a>
            </li>
            <li>{t("author.contacts.coordination")}</li>
          </ul>
        </div>
        <div className={s.sidePart}>
          <h3>{t("author.skills.tech.title")}</h3>
          <ul className={s.skillsList}>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SASS</li>
            <li>JavaScript</li>
            <li>REST API</li>
            <li>Git</li>
            <li>Parcel</li>
            <li>React</li>
          </ul>
        </div>
        <div className={s.sidePart}>
          <h3>{t("author.skills.soft.title")}</h3>
          <ul className={s.skillsList}>
            <li>{t("author.skills.soft.first")}</li>
            <li>{t("author.skills.soft.second")}</li>
            <li>{t("author.skills.soft.third")}</li>
            <li>{t("author.skills.soft.fourth")}</li>
            <li>{t("author.skills.soft.fifth")}</li>
            <li>{t("author.skills.soft.sixth")}</li>
          </ul>
        </div>
        <div className={s.sidePart}>
          <h3>{t("author.languages.title")}</h3>
          <ul className={s.languageList}>
            <li>{t("author.languages.ukr")}</li>
            <li>{t("author.languages.eng")}</li>
            <li>{t("author.languages.rus")}</li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
