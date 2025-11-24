import { useState, useEffect } from "react";
import "./components_css/featured_category.css";
import axios from "axios";
import ItemCard from "./itemcard";


export default function Popular_product(props) {
  const {message}=props;
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerSlide = 3; 
  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      return newIndex >= Math.ceil(products.length / itemsPerSlide)-1
        ? 0
        : newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      return newIndex < 0
        ? Math.ceil(products.length / itemsPerSlide) - 1
        : newIndex;
    });
  };


  useEffect(() => {
    axios
      .get("http://localhost:5000/popular").then((res) => setProducts(res.data)).catch((err) => console.error(err+"bro there  is error"));
  }, []);

  return (
    <>
      <h3 className="myheader">{message}</h3>
      <p className="myheader mysmallheader">
        Do not miss the current offers until the end of this mounth.
      </p>

      <div className="popular-container">
        <button onClick={prevSlide} className="popular-btn left">
          ❮
        </button>

        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * 80}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {products.map((product, index) => (
              <ItemCard
                key={index}
                itemId={product.itemId}
                itemName={product.itemName}
                category={product.category}
                company={product.company}
                price={product.price}
                image_path={product.image_path}
                reviews={product.reviews}
              />
            ))}
          </div>
        </div>

        <button onClick={nextSlide} className="popular-btn right">❯</button>
      </div>
    </>
  );
}
