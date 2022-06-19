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

  const onClickLink = async (ev, lng) => {
    i18n.changeLanguage(lng);
    const arr = location.pathname.split("/");
    arr[1] = lng;
    const p = arr.join("/");
    dispatch(setLang(lng));
    navigate(p, { replace: true });
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
            onClick={(ev) => onClickLink(ev, lng)}
          >
            {t(`userMenu.${lng}`)}
          </button>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
