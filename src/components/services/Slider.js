import { useState } from "react";
import Modal from "./Popup";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./Slider.module.css";

export default function SliderGallery({ library = [] }) {
  const [src, setSrc] = useState("");
  const [showModal, setShowModal] = useState(false);

  const toogleModal = () => {
    setShowModal(!showModal);
  };

  const onImgClick = (ev) => {
    setSrc(ev.currentTarget.alt);
    toogleModal();
  };

  const settings = {
    onSwipe: (ev) => {
      console.log(ev);
    },
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };
  return (
    <div>
      <Slider {...settings}>
        {library?.map((el) => (
          <div key={el.id} className={s.sliderCard}>
            <img
              src={el.thumbnailUrl}
              alt={el.url}
              onClick={onImgClick}
              width="150"
            />
            <p>{el.title}</p>
          </div>
        ))}
      </Slider>
      {showModal && (
        <Modal onClose={toogleModal}>
          <img className={s.modalChild} src={src} alt="" width="600" />
        </Modal>
      )}
    </div>
  );
}
