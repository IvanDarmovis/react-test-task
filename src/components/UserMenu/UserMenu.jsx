/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser, setLang } from "../../redux/reducer";
import { useTranslation } from "react-i18next";
import { timerId } from "components/LoginPage/LoginPage";
import { useEffect } from "react";

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
  }, [language]);

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/friends">Friends</Link>
      <Link to="/photos">Photos</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/author">Author</Link>

      <div>
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
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={() => {
          dispatch(logoutUser());
          clearInterval(timerId);
        }}
      >
        Log Out
      </button>
    </div>
  );
}
