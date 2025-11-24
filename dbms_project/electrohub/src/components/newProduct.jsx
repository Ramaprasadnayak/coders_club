import { useState, useEffect } from "react";
import "./components_css/featured_category.css";
import axios from "axios";
import ItemCard from "./itemcard";
export default function New_product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/newProducts").then((res) => setProducts(res.data)).catch((err) => console.error(err+"bro there  is error"));
  }, []);

  return (
    <>
      <h3 className="myheader">New Products</h3>
      <p className="myheader mysmallheader">
        New products with updated stocks.
      </p>

      <div className="popular-container">
        <div className="carousel-wrapper">
          <div className="new_product-track">
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
      </div>
    </>
  );
}
