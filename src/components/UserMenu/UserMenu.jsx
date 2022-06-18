import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser, setLang } from "../../redux/reducer";
import { useTranslation } from "react-i18next";
import { timerId } from "components/LoginPage/LoginPage";
// import { useEffect } from "react";
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

  return (
    <div className={s.navContainer}>
      <div className={s.mainNav}>
        <Link className={s.navLink} to={`/${language}/`}>
          {t("userMenu.home")}
        </Link>
        <Link className={s.navLink} to="/signin">
          {/* <Link className={s.navLink} to={`/${language}/signin`}> */}
          {t("userMenu.signIn")}
        </Link>
        <Link className={s.navLink} to="friends">
          {/* <Link className={s.navLink} to={`/${language}/friends`}> */}
          {t("userMenu.friends")}
        </Link>
        <Link className={s.navLink} to="photos">
          {/* <Link className={s.navLink} to={`/${language}/photos`}> */}
          {t("userMenu.photos")}
        </Link>
        <Link className={s.navLink} to="posts">
          {/* <Link className={s.navLink} to={`/${language}/posts`}> */}
          {t("userMenu.posts")}
        </Link>
        <Link className={s.navLink} to="author">
          {/* <Link className={s.navLink} to={`/${language}/author`}> */}
          {t("userMenu.author")}
        </Link>
      </div>
      <div className={s.subNav}>
        {Object.keys(lngs).map((lng) => (
          // <div key={lng}>
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
          //  <Link
          // to={`/${lng}`}
          // onClick={() => {
          // i18n.changeLanguage(lng);
          // dispatch(setLang(lng));
          // }}
          // >
          // Link
          // </Link>
          // </div>
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
