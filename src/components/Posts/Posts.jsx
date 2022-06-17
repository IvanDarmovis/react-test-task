import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/reducer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import s from "./Posts.module.css";

export default function Posts() {
  const [position, setPosition] = useState(0);
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const id = useSelector((state) => state.currentUser.id);

  useEffect(() => {
    async function fetch() {
      const originalPromiseResult = await dispatch(getPosts(position)).unwrap();
      setOptions([...options, ...originalPromiseResult]);
    }
    fetch();
  }, [position]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <ul className={s.postList}>
        {options &&
          options.map((el) => (
            <li className={s.post} key={[el.userId, el.id].join("-")}>
              <h3>{el.title}</h3>
              {id !== el.userId && (
                <Link className={s.postLink} to={`/friends/${el.userId}`}>
                  {t("posts.aboutAuthor")}
                </Link>
              )}
              <Link to={`/posts/${el.id}`}>{t("posts.readPost")}</Link>
            </li>
          ))}
      </ul>
      <button type="button" onClick={() => setPosition(position + 10)}>
        {t("posts.loadMore")}
      </button>
    </div>
  );
}
