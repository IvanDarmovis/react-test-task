import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Modal from "components/services/Popup";
import PostForm from "components/PostForm";
import {
  getPostById,
  getPostComments,
  postCorrection,
  deletePost
} from "redux/reducer";
import s from "./PostDetails.module.css";

export default function PostDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const postComments = useSelector((state) => state.postComments);
  const isFetching = useSelector((state) => state.isFetching);
  const userId = useSelector((state) => state.currentUser.id);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getPostById(id));
    dispatch(getPostComments(id));
  }, [dispatch, id]);

  const onCorrection = (ev) => {
    ev.preventDefault();
    setShowModal(!showModal);
  };

  const onPostDelete = (ev) => {
    ev.preventDefault();
    dispatch(deletePost(id));
  };

  const toogleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <p>PostDetails</p>
      {!isFetching && (
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          {post.userId === userId && (
            <div>
              <button type="button" onClick={onCorrection}>
                Редагувати
              </button>
              <button type="button" onClick={onPostDelete}>
                Видалити
              </button>
            </div>
          )}
          <div>
            <p>Comments:</p>
            <ul>
              {postComments &&
                postComments.map((el) => (
                  <li key={el.id}>
                    <h4>{el.name}</h4>
                    <p>{el.body}</p>
                    <a href={`mailto:${el.email}`}>{el.email}</a>
                  </li>
                ))}
            </ul>
          </div>
          {showModal && (
            <Modal onClose={toogleModal}>
              <div className={s.modalChild}>
                <PostForm
                  id={id}
                  title={post.title}
                  body={post.body}
                  action={postCorrection}
                  onSubmit={toogleModal}
                />
                <button
                  type="button"
                  className={s.closeButton}
                  onClick={() => setShowModal(!showModal)}
                >
                  Закрити
                </button>
              </div>
            </Modal>
          )}
        </div>
      )}
    </div>
  );
}
