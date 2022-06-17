import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers } from "../../redux/reducer";
import s from "./Friends.module.css";

export default function Friends() {
  const friends = useSelector((state) => state.users);
  const isFetching = useSelector((state) => state.isFetching);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div>
      <p>Friends</p>
      <ul className={s.friendsList}>
        {!isFetching &&
          friends?.map((el) => (
            <li key={el.id} className={s.friendsCard}>
              <h3>{el.name}</h3>
              <p>
                Phone: <a href={`tel:${el.phone}`}>{el.phone}</a>
              </p>
              <p>
                Email: <a href={`mailto:${el.email}`}>{el.email}</a>
              </p>
              <Link to={`/friends/${el.id}`}>Більше інформації</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

/*
  address:
    city: "Wisokyburgh"
    geo: { lat: '-43.9509', lng: '-34.4618' }
    street: "Victor Plains"
    suite: "Suite 879"
    zipcode: "90566-7771"

  company:
    catchPhrase: "Proactive didactic contingency"
    name: "Deckow-Crist"
    bs: "synergize scalable supply-chains"

  email: "Shanna@melissa.tv"
  id: 2
  name: "Ervin Howell"
  phone: "010-692-6593 x09125"
  username: "Antonette"
    */
