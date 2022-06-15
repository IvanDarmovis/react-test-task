import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "../../redux/reducer";
import SliderGallery from "../services/Slider";
import s from "./HomePage.module.css";

export default function HomePage() {
  const user = useSelector((state) => state.currentUser);
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos(user.id));
  }, [dispatch, user.id]);

  return (
    <div className={s.wrapper}>
      <h2>HomePage</h2>
      <div className={s.mainContainer}>
        <div className={s.cardContainer}>
          <h2>Contact info:</h2>
          <ul>
            <li>Name: {user.name}</li>
            <li>Phone number: {user.phone}</li>
            <li>Email: {user.email}</li>
            <li>Username: {user.username}</li>
          </ul>
          <a href="https://anastasia.net" target="_blanc">
            Personal website
          </a>
        </div>
        <div className={s.cardContainer}>
          <h2>Address</h2>
          <ul>
            <li>City: {user.address.city}</li>
            <li>Street: {user.address.street}</li>
            <li>Suite: {user.address.suite}</li>
            <li>Zipcode: {user.address.zipcode}</li>
          </ul>
        </div>
        <div className={s.cardContainer}>
          <h2>Company</h2>
          <ul>
            <li>Name: {user.company.name}</li>
            <li>Slogan: {user.company.catchPhrase}</li>
            <li>What we do: {user.company.bs}</li>
          </ul>
        </div>
      </div>
      <SliderGallery library={photos} />
    </div>
  );
}
