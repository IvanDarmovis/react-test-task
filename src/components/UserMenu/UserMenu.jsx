import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/reducer";
import { useTranslation } from "react-i18next";
import { timerId } from "components/LoginPage/LoginPage";
import s from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div>
      <div className={s.navContainer}>
        <div className={s.mainNav}>
          <Link className={s.navLink} to={`${lang}/`}>
            {t("userMenu.home")}
          </Link>
          <Link className={s.navLink} to={`${lang}/signin`}>
            {t("userMenu.signIn")}
          </Link>
          <Link className={s.navLink} to={`${lang}/friends`}>
            {t("userMenu.friends")}
          </Link>
          <Link className={s.navLink} to={`${lang}/photos`}>
            {t("userMenu.photos")}
          </Link>
          <Link className={s.navLink} to={`${lang}/posts`}>
            {t("userMenu.posts")}
          </Link>
          <Link className={s.navLink} to={`${lang}/author`}>
            {t("userMenu.author")}
          </Link>
        </div>
        <div className={s.subNav}>
          <button
            type="button"
            onClick={() => {
              dispatch(logoutUser());
              clearInterval(timerId);
            }}
          >
            {t("userMenu.logOut")}
          </button>
        </div>
      </div>
    </div>
  );
}
