import { useDispatch } from "react-redux";
import { useState } from "react";
import s from "./PostForm.module.css";

export default function PostForm({
  id = null,
  title = "",
  body = "",
  action,
  onSubmit
}) {
  const dispatch = useDispatch();
  const [titleField, setTitleField] = useState(title);
  const [bodyField, setBodyField] = useState(body);

  const onFormSubmit = (ev) => {
    ev.preventDefault();
    dispatch(
      action({
        id,
        title: titleField,
        body: bodyField
      })
    );
    onSubmit();
    setTitleField("");
    setBodyField("");
  };

  return (
    <form onSubmit={onFormSubmit} className={s.postForm}>
      <label>
        <p>Назва статті</p>
        <input
          className={s.title}
          type="text"
          value={titleField}
          onChange={(ev) => setTitleField(ev.currentTarget.value)}
        ></input>
      </label>
      <label>
        <p>Текст статті</p>
        <textarea
          className={s.body}
          type="text"
          rows="10"
          value={bodyField}
          onChange={(ev) => setBodyField(ev.currentTarget.value)}
        ></textarea>
      </label>
      <button type="submit" className={s.submitButton}>
        Опублікувати
      </button>
    </form>
  );
}
