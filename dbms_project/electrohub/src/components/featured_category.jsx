import { useState } from "react";
import "./components_css/featured_category.css";
import { useNavigate } from "react-router-dom";

export default function FCategory() {
  const [active, setActive] = useState("");
  const navigate=useNavigate()
  const cat_btn = (name, cat) => {
    try {
      setActive(name);
      navigate(`/${cat}`);
    } catch (err) {
      console.error(err);
    }
  };


  const categories = [
    { name: "Smartphones", icon: "📱", color: "#ffe8e8", category: "Smartphones" },
    { name: "Televisions", icon: "📺", color: "#fff4d9", category: "Televisions" },
    { name: "Laptops", icon: "💻", color: "#e8f0ff", category: "Laptops" },
    { name: "Headphones", icon: "🎧", color: "#e8fff0", category: "Headphones" },
    { name: "Camera", icon: "📸", color: "#f0e8ff", category: "Camera" },
    { name: "VR Headsets", icon: "🥽", color: "#ffe8fa", category: "VR_Headsets" },
    { name: "Air Conditioners", icon: "❄️", color: "#e8fcff", category: "AC" },
  ];

  return (
    <>
      <h3 className="myheader">FEATURED CATEGORIES</h3>
      <div className="feature-container">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className={`feature-item ${active === cat.name ? "active" : ""}`}
            onClick={() => cat_btn(cat.name, cat.category)}
          >
            <div
              className="icon-circle"
              style={{ backgroundColor: cat.color }}
            >
              <span className="icon">{cat.icon}</span>
            </div>
            <span className="label">{cat.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}
