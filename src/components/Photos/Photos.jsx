import { useSelector } from "react-redux";
import { useState } from "react";
import Modal from "components/services/Popup";
import s from "./Photos.module.css";

export default function Photos() {
  const photos = useSelector((state) => state.photos);
  const [src, setSrc] = useState("");
  const [showModal, setShowModal] = useState(false);

  const toogleModal = () => {
    setShowModal(!showModal);
  };

  const onImgClick = (ev) => {
    setSrc(ev.currentTarget.alt);
    toogleModal();
  };

  return (
    <div>
      <ul className={s.gallery}>
        {photos.map((el) => (
          <li key={el.id} className={s.galleryCard}>
            <img src={el.thumbnailUrl} onClick={onImgClick} alt={el.url} />
            <p>{el.title}</p>
          </li>
        ))}
      </ul>
      {showModal && (
        <Modal onClose={toogleModal}>
          <img src={src} alt="" width="600" className={s.modalImg} />
        </Modal>
      )}
    </div>
  );
}
