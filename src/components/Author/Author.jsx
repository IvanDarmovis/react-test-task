import s from "./Author.module.css";
import photo from "./photo.jpg";

export default function Author() {
  return (
    <div className={s.cvContainer}>
      <main className={s.mainContent}>
        <header className={s.header}>
          <div className={s.textContainer}>
            <h1 className={s.name}>Ivan Darmovis</h1>
            <h2 className={s.position}>Junior Front-End developer</h2>
            <h3 className={s.summaryTitle}>Summary</h3>
            <p className={s.summary}>
              I am a Junior Fron-End developer. I focus on HTML5, CSS3, JS. I am
              currently studding React and Node.js. I consider the development
              necessary to facilitate routine tasks, which will allow us to
              focus on more serious tasks.
            </p>
          </div>
        </header>
        <section>
          <div className={s.textContainer}>
            <h3>Projects</h3>
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
                )<p>Ice Cream company site (landing).</p>
                <p>Responisble design. Used Parcel, SCSS, JS, HTML.</p>
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
                )<p>Ice Cream company site (landing).</p>
                <p>Responisble design. Used Parcel, SCSS, JS, HTML.</p>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div className={s.textContainer}>
            <h3>Work experience</h3>
            <ul className={s.companyList}>
              <li>
                <h4>Customer support | 2021 - present</h4>
                <p>Responsibilities:</p>
                <ul className={s.describeList}>
                  <li>
                    Chat with customers, help them to solve their problems and
                    unswer for their questions.
                  </li>
                  <li>Сorrespondence with clients</li>
                  <li>Monitoring complience with the rules of the site.</li>
                </ul>
                <p>Achievement:</p>
                <ul className={s.describeList}>
                  <li>Learn and can perform all work processes.</li>
                  <li>Took the position of deputy senior shift.</li>
                </ul>
              </li>
              <li>
                <h4>
                  Technical drawing engineer Kromberg & Shubert Ukraine | 2016 -
                  2018
                </h4>
                <p>Responsibilities:</p>
                <ul className={s.describeList}>
                  <li>Create and support technical drawing.</li>
                  <li>
                    Implement changes in the drawing and on the production.
                  </li>
                  <li>
                    Chang the drawing to prevent and correct errors and
                    mistaces.
                  </li>
                  <li>Support production.</li>
                </ul>
                <p>Achievement:</p>
                <ul className={s.describeList}>
                  <li>
                    Minimize amount of mistaces on the hurnesses of two projects
                    and succeful launching one of them;
                  </li>
                  <li>
                    Successful cooperation with quality team for decreasing some
                    big problem on the projects.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div className={s.textContainer}>
            <h3>Education</h3>
            <ul className={s.educationList}>
              <li>
                <h4>Lutsk National Technical University | 2012 - 2015</h4>
                <p>Specialist | Computer Systems and Networks</p>
              </li>
              <li>
                <h4>IT School GoIT | 2021 - 2022</h4>
                <p>Full stack developer | JS + React</p>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <aside className={s.side}>
        <img src={photo} alt="" className={s.photo} />
        <div className={s.sidePart}>
          <h3>Contact information</h3>
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
            <li>Lutsk, Ukraine</li>
          </ul>
        </div>
        <div className={s.sidePart}>
          <h3>Tech skills</h3>
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
          <h3>Soft skills</h3>
          <ul className={s.skillsList}>
            <li>Adaptability</li>
            <li>Calmness</li>
            <li>Logical reasoning</li>
            <li>Teamwork</li>
            <li>Tolerance</li>
            <li>Work Ethic</li>
          </ul>
        </div>
        <div className={s.sidePart}>
          <h3>Language skills</h3>
          <ul className={s.languageList}>
            <li>Ukrainian - native</li>
            <li>English - intermediate</li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
