import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, logoutUser } from "../../redux/reducer";

export default function LoginPage() {
  const [userId, setUserId] = useState("");
  const [date, setDate] = useState(null);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  let timerId = null;

  useEffect(() => {
    if (!isLoggedIn) clearTimeout(timerId);
  }, [isLoggedIn, timerId]);

  const onDateChange = (date) => {
    if (date - Date.now() <= 0)
      return alert("Ви вибрали дату в минулому. Аяяй!");
    setDate(date);
  };

  const formReset = () => {
    setUserId("");
    setDate(null);
  };

  const onFormSubmit = (ev) => {
    ev.preventDefault();
    dispatch(getUsers(parseInt(userId)));
    if (isLoggedIn)
      timerId = setTimeout(() => {
        dispatch(logoutUser());
      }, date - Date.now());
    formReset();
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onFormSubmit}>
        <label>
          Введіть ID користувача:
          <input
            type="text"
            value={userId}
            onChange={(ev) => setUserId(ev.currentTarget.value)}
            required
          />
        </label>
        <p>Введіть час, коли Ви закінчите користуватись цим сервісом:</p>
        <DatePicker
          selected={date}
          onChange={onDateChange}
          showTimeSelect
          dateFormat="dd.MM.yyyy   hh:mm"
          minDate={Date.now()}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
