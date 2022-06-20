import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/reducer";
import { getUserById } from "../../redux/apiActions";
import { useTranslation } from "react-i18next";
import s from "./LoginPage.module.css";

export let timerId = null;

export default function LoginPage() {
  const [userId, setUserId] = useState("");
  const [date, setDate] = useState(null);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const { t } = useTranslation();

  useEffect(() => {
    if (!isLoggedIn) clearInterval(timerId);
  }, [isLoggedIn]);

  const onDateChange = (date) => {
    if (date - Date.now() <= 0)
      return alert("Ви вибрали дату в минулому. Аяяй!");
    setDate(date);
    timerId = setInterval(() => {
      if (date - Date.now() <= 0) {
        dispatch(logoutUser());
        clearInterval(timerId);
      }
    }, 1000);
  };

  const formReset = () => {
    setUserId("");
    setDate(null);
  };

  const onFormSubmit = (ev) => {
    ev.preventDefault();
    dispatch(getUserById(parseInt(userId)));
    formReset();
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label>
          <p className={s.labelText}>{t("login.id")}</p>
          <input
            className={s.inputField}
            type="text"
            value={userId}
            onChange={(ev) => setUserId(ev.currentTarget.value)}
            required
          />
        </label>
        <p className={s.labelText}>{t("login.date")}</p>
        <DatePicker
          wrapperClassName={s.wrapper}
          className={s.inputDate}
          selected={date}
          onChange={onDateChange}
          showTimeSelect
          timeIntervals="1"
          dateFormat="dd.MM.yyyy   hh:mm"
          minDate={Date.now()}
          required
        />

        <button type="submit" className={s.loginButton}>
          {t("login.login")}
        </button>
      </form>
    </div>
  );
}
