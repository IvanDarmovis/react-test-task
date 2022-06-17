import { useSelector } from "react-redux";
import { useState } from "react";
import Modal from "components/services/Popup";

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
      <p>Photos</p>
      <ul>
        {photos.map((el) => (
          <li key={el.id}>
            <img src={el.thumbnailUrl} onClick={onImgClick} alt={el.url} />
            <p>{el.title}</p>
          </li>
        ))}
      </ul>
      {showModal && (
        <Modal onClose={toogleModal}>
          <img src={src} alt="" width="600" />
        </Modal>
      )}
    </div>
  );
}
