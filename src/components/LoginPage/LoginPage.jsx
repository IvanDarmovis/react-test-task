import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, logoutUser } from "../../redux/reducer";
import { useTranslation } from "react-i18next";

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
      console.log(date - Date.now());
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
      <h2>{t("login.login")}</h2>
      <form onSubmit={onFormSubmit}>
        <label>
          {t("login.id")}
          <input
            type="text"
            value={userId}
            onChange={(ev) => setUserId(ev.currentTarget.value)}
            required
          />
        </label>
        <p>{t("login.date")}</p>
        <DatePicker
          selected={date}
          onChange={onDateChange}
          showTimeSelect
          timeIntervals="1"
          dateFormat="dd.MM.yyyy   hh:mm"
          minDate={Date.now()}
          required
        />

        <button type="submit">{t("login.login")}</button>
      </form>
    </div>
  );
}
