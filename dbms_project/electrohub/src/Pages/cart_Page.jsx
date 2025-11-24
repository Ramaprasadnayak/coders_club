import axios from "axios";
import { useEffect, useState } from "react";
import "../components/components_css/cartcard.css";
import CartCard from "../components/cartcard";
import { Button } from "react-bootstrap";


export default function CartPage() {
  const [carts, setCart] = useState([]);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    const uid = localStorage.getItem("userId");
    axios
      .get(`http://localhost:5000/cartpage?uid=${uid}`)
      .then((res) => {
        setCart(res.data);
        if (res.data.length > 0) {
          setTotal(res.data[0].total_price);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="mycartpage">
        {carts.map((cart, index) => (
          <CartCard
            key={index}
            cartId={cart.cartId}
            itemId={cart.itemId}
            itemName={cart.itemName}
            category={cart.category}
            price={cart.price}
            image_path={cart.image_path}
            reviews={cart.reviews}
            qty={cart.qty}
          />
        ))}
      </div>
      {
        total==0?<p className="empty_cart">cart is empty</p>:
        <div className="total_amount">
          <h2>Subtotal price: ₹{total}</h2>
          <Button>Proceed to Buy</Button>
        </div>
      }
    </>
  );
}
