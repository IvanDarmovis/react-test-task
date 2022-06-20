import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers } from "../../redux/apiActions";
import { useTranslation } from "react-i18next";
import s from "./Friends.module.css";

export default function Friends() {
  const friends = useSelector((state) => state.users);
  const isFetching = useSelector((state) => state.isFetching);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div>
      <ul className={s.friendsList}>
        {!isFetching &&
          friends?.map((el) => (
            <li key={el.id} className={s.friendsCard}>
              <h3>{el.name}</h3>
              <p>
                {t("friends.phone")}: <a href={`tel:${el.phone}`}>{el.phone}</a>
              </p>
              <p>
                {t("friends.email")}:{" "}
                <a href={`mailto:${el.email}`}>{el.email}</a>
              </p>
              <Link to={`../friends/${el.id}`}>{t("friends.more")}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
