import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import s from "./Slider.module.css";

export default function SliderGallery({ library = [] }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div>
      <h2>Gallery</h2>
      <Slider {...settings}>
        {library?.map((el) => (
          <div key={el.id} className={s.sliderCard}>
            <img src={el.thumbnailUrl} alt={el.url} width="150" />
            <p>{el.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
