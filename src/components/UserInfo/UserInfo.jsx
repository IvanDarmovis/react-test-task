import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPhotos,
  getPostsByUserId,
  getUserById,
  postPublishing
} from "redux/reducer";
import { Link } from "react-router-dom";
import SliderGallery from "components/services/Slider";
import PostForm from "components/PostForm";
import s from "./UserInfo.module.css";

export default function UserInfo({ id }) {
  const user = useSelector((state) => state.user);
  const loggedId = useSelector((state) => state.currentUser.id);
  const photos = useSelector((state) => state.photos);
  const posts = useSelector((state) => state.userPosts);
  const isFetching = useSelector((state) => state.isFetching);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(id));
    dispatch(getPhotos(id));
    dispatch(getPostsByUserId(id));
  }, [dispatch, id]);

  if (!isFetching)
    return (
      <>
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
        <div className={s.postContainer}>
          {loggedId === user.id && <PostForm action={postPublishing} />}
          <ul className={s.postList}>
            {posts &&
              posts.map((el) => (
                <li key={el.id} className={s.post}>
                  <h3>{el.title}</h3>
                  <Link to={`/posts/${el.id}`}>Read</Link>
                </li>
              ))}
          </ul>
        </div>
      </>
    );
}
