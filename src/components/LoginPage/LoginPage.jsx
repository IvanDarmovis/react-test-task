import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { useGetUsersQuery } from "../../redux/api";
import { actions } from "../../redux/reducer";

export default function LoginPage() {
  const [userId, setUserId] = useState("");
  const [date, setDate] = useState(null);
  const { data, error, isFetching } = useGetUsersQuery();
  const dispatch = useDispatch();

  const onDateChange = (date) => {
    if (date - Date.now() <= 0)
      return alert("Ви вибрали дату в минулому. Аяяй!");
    console.log(date);
    setDate(date);
  };

  const formReset = () => {
    setUserId("");
    setDate(null);
  };

  const onFormSubmit = (ev) => {
    ev.preventDefault();
    if (data.find((el) => el.id === Number(userId))) {
      dispatch(actions.loginUser);
    }
    console.log("hi");
    console.log(data);
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
