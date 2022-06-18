import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import s from "./PostList.module.css";
import { useTranslation } from "react-i18next";

export default function PostList({ posts }) {
  const { t } = useTranslation();
  const loggedId = useSelector((state) => state.currentUser.id);
  const { id } = useParams();

  return (
    <ul className={s.postList}>
      {posts &&
        posts.map((el) => (
          <li key={el.id} className={s.post}>
            <h3>{el.title}</h3>
            <div className={s.buttonWrapper}>
              {loggedId !== el.userId && parseInt(id) !== el.userId && (
                <Link className={s.postLink} to={`/friends/${el.userId}`}>
                  {t("posts.aboutAuthor")}
                </Link>
              )}
              <Link className={s.postLink} to={`/posts/${el.id}`}>
                {t("posts.readPost")}
              </Link>
            </div>
          </li>
        ))}
    </ul>
  );
}
