import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPhotos,
  getPostsByUserId,
  getUserById,
  postPublishing
} from "redux/reducer";
import SliderGallery from "components/Slider";
import PostForm from "components/PostForm";
import PostList from "components/PostList";
import { useTranslation } from "react-i18next";
import s from "./UserInfo.module.css";

export default function UserInfo({ id }) {
  const user = useSelector((state) => state.user);
  const loggedId = useSelector((state) => state.currentUser.id);
  const photos = useSelector((state) => state.photos);
  const posts = useSelector((state) => state.userPosts);
  const isFetching = useSelector((state) => state.isFetching);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getUserById(id));
    dispatch(getPhotos(id));
    dispatch(getPostsByUserId(id));
  }, [dispatch, id]);

  if (!isFetching && isLoggedIn)
    return (
      <>
        {user && (
          <div className={s.mainContainer}>
            <div className={s.cardContainer}>
              <h2>{t("userInfo.contactInfo")}</h2>
              <ul>
                <li>
                  {t("userInfo.name")}: {user.name}
                </li>
                <li>
                  {t("userInfo.phone")}: {user.phone}
                </li>
                <li>
                  {t("userInfo.email")}: {user.email}
                </li>
                <li>
                  {t("userInfo.username")}: {user.username}
                </li>
              </ul>
              <a href="https://anastasia.net" target="_blanc">
                {t("userInfo.personalWebsite")}
              </a>
            </div>
            <div className={s.cardContainer}>
              <h2>{t("userInfo.address")}</h2>
              <ul>
                <li>
                  {t("userInfo.city")}: {user.address.city}
                </li>
                <li>
                  {t("userInfo.street")}: {user.address.street}
                </li>
                <li>
                  {t("userInfo.suite")}: {user.address.suite}
                </li>
                <li>
                  {t("userInfo.zipcode")}: {user.address.zipcode}
                </li>
              </ul>
            </div>
            <div className={s.cardContainer}>
              <h2>{t("userInfo.company")}</h2>
              <ul>
                <li>
                  {t("userInfo.companyName")}: {user.company.name}
                </li>
                <li>
                  {t("userInfo.slogan")}: {user.company.catchPhrase}
                </li>
                <li>
                  {t("userInfo.whatWeDo")}: {user.company.bs}
                </li>
              </ul>
            </div>
          </div>
        )}
        <SliderGallery library={photos} />
        <div className={s.postContainer}>
          {loggedId === user.id && <PostForm action={postPublishing} />}
          <PostList posts={posts} />
        </div>
      </>
    );
}
