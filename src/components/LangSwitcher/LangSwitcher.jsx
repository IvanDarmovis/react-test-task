import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { setLang } from "../../redux/reducer";
import s from "./LangSwitcher.module.css";

const lngs = {
  ua: { nativeName: "Ukrainian" },
  en: { nativeName: "English" },
  ru: { nativeName: "Russian" }
};

export default function LangSwitcher() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const onClickLink = async (lng) => {
    if (i18n.language === lng) return;
    i18n.changeLanguage(lng);
    const arr = location.pathname.split("/");
    let p = "";
    if (lng === "en" || lng === "ru") {
      if (arr[1] === "en" || arr[1] === "ru") arr[1] = lng;
      else arr.splice(1, 0, lng);
      dispatch(setLang(lng));
      p = arr.join("/");
      setTimeout(() => {
        navigate(p, { replace: true });
      }, 0);
    } else {
      if (arr.length > 2) arr.splice(1, 1);
      dispatch(setLang(""));
      p = arr.join("/");
      navigate(p, { replace: true });
    }
  };

  return (
    <div>
      <div className={s.subNav}>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal"
            }}
            onClick={() => onClickLink(lng)}
          >
            {t(`userMenu.${lng}`)}
          </button>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
