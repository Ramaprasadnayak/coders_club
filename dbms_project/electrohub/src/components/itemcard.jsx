import "./components_css/itemcard.css";
import { FaStar } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function ItemCard(props) {
  const navigate=useNavigate();
  const { itemId, itemName, category, price, company, image_path, reviews } = props;
  const id=localStorage.getItem("userId");

  const add_to_cart= async () => {  
    try {
      const res = await axios.post("http://localhost:5000/cart", {
        userId: id,
        itemId: itemId,
        qtyval:1
      });
      alert(res.data.message);
    } catch (err) {
      alert(err)
    }
  };

  const go_to_product=(itemId)=>{
    navigate(`/itempage/${itemId}`,{
      state:{
        itemId,
        itemName, 
        category, 
        price, 
        company, 
        image_path, 
        reviews
      }
    });
  }

  return (
    <div className="itemcard">
      <img src={image_path} alt={itemName} className="itemimage" onClick={()=>go_to_product(itemId)} />
      <h3>{itemName}</h3>

      <div style={{ display: "flex", gap: "5px",fontSize:"15px",fontWeight:"450",margin:"10px" }}>reviews :
        {[...Array(5)].map((_, i) => {
          const starColor = i < reviews ? "#FFD700" : "#ccc"; 
          return <FaStar key={i} color={starColor} size={20} />;
        })}
      </div>
      <h3 className="price">₹{price}</h3>
      <Button className="addtocart" onClick={add_to_cart}>Add to cart</Button>
    </div>
  );
}
