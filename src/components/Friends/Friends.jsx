import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../redux/reducer";

export default function Friends() {
  const friends = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  console.log(friends);
  return (
    <div>
      <p>Friends</p>
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
