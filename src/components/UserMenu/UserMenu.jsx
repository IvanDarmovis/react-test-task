import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser, setLang } from "../../redux/reducer";
import { useTranslation } from "react-i18next";
import { timerId } from "components/LoginPage/LoginPage";
import { useEffect } from "react";
import s from "./UserMenu.module.css";

const lngs = {
  ua: { nativeName: "Ukrainian" },
  en: { nativeName: "English" },
  ru: { nativeName: "Russian" }
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const language = useSelector((state) => state.lang);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  return (
    <div className={s.navContainer}>
      <div className={s.mainNav}>
        <Link className={s.navLink} to="/">
          {t("userMenu.home")}
        </Link>
        <Link className={s.navLink} to="/signin">
          {t("userMenu.signIn")}
        </Link>
        <Link className={s.navLink} to="/friends">
          {t("userMenu.friends")}
        </Link>
        <Link className={s.navLink} to="/photos">
          {t("userMenu.photos")}
        </Link>
        <Link className={s.navLink} to="/posts">
          {t("userMenu.posts")}
        </Link>
        <Link className={s.navLink} to="/author">
          {t("userMenu.home")}
        </Link>
      </div>
      <div className={s.subNav}>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal"
            }}
            type="submit"
            onClick={() => {
              i18n.changeLanguage(lng);
              dispatch(setLang(lng));
            }}
          >
            {t(`userMenu.${lng}`)}
          </button>
        ))}
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
  );
}
