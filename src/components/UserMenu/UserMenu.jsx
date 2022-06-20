import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logoutUser } from "../../redux/reducer";
import { useTranslation } from "react-i18next";
import { timerId } from "components/LoginPage/LoginPage";
import s from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const lang = useSelector((state) => state.lang);
  const lng = i18n.language;
  const location = useLocation();

  return (
    <div>
      <div className={s.navContainer}>
        <div className={s.mainNav}>
          <Link
            className={s.navLink}
            to={`${lang}/`}
            onClick={() => console.log(location.pathname)}
          >
            {t("userMenu.home")}
          </Link>
          <Link
            className={s.navLink}
            to={`${lang}/signin`}
            onClick={() => console.log(location.pathname)}
          >
            {t("userMenu.signIn")}
          </Link>
          <Link
            className={s.navLink}
            to={`${lang}/friends`}
            onClick={() => console.log(location.pathname)}
          >
            {t("userMenu.friends")}
          </Link>
          <Link
            className={s.navLink}
            to={`${lang}/photos`}
            onClick={() => console.log(location.pathname)}
          >
            {t("userMenu.photos")}
          </Link>
          <Link
            className={s.navLink}
            to={`${lang}/posts`}
            onClick={() => console.log(location.pathname)}
          >
            {t("userMenu.posts")}
          </Link>
          <Link
            className={s.navLink}
            to={`${lang}/author`}
            onClick={() => console.log(location.pathname)}
          >
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
