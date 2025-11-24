import { useState, useEffect } from "react";
import img1 from "../assets/carousel/img1.png";
import img2 from "../assets/carousel/img2.png";
import img3 from "../assets/carousel/img3.png";
import img4 from "../assets/carousel/img4.png";
import img5 from "../assets/carousel/img5.png";
import "./components_css/Carousel.css";

const Carousel = () => {
  const images = [img1, img2, img3, img4, img5];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => clearInterval(interval);
  }, [currentIndex]); 
  return (
    <div className="carousel-container">
      <button onClick={prevSlide} className="carousel-btn left">❮</button>

      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 80}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              className="carousel-img"
            />
          ))}
        </div>
      </div>

      <button onClick={nextSlide} className="carousel-btn right">❯</button>
    </div>
  );
};

export default Carousel;
