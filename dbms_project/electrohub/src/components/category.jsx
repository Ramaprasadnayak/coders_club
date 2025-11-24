import { useState } from "react";
import "./components_css/Category.css";
import { useNavigate } from "react-router-dom";


export default function Category() {
  const navigate=useNavigate()
  const [active, setActive] = useState("");


  const categories = [
    { name: "Smartphones", icon: "📱", category: "Smartphones" },
    { name: "Televisions", icon: "📺", category: "Televisions" },
    { name: "Laptops", icon: "💻", category: "Laptops" },
    { name: "Headphones", icon: "🎧", category: "Headphones" },
    { name: "Camera", icon: "📸", category: "Camera" },
    { name: "VR Headsets", icon: "🥽", category: "VR_Headsets" },
    { name: "Air Conditioners", icon: "❄️", category: "AC" },
  ];

const category_btn = (name, cat) => {
  try {
    setActive(name);
    navigate(`/${cat}`);
  } catch (err) {
    console.error(err);
  }
};

  return (
    <div className="category-container">
      {categories.map((cat) => (
        <button key={cat.name} className={`category-btn ${active === cat.name ? "active" : ""}`} onClick={() => category_btn(cat.name, cat.category)}>
          <span className="icon">{cat.icon}</span>
          <span className="label">{cat.name}</span>
        </button>
      ))}
    </div>
  );
}