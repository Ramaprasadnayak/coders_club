import { useLocation } from "react-router-dom";
import "./Pages_css/item_page.css";
import Popular_product from "../components/popular_product";
import { FaStar } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useState } from "react";

export default function ItemPage() {
    const location = useLocation();
    const [qtyval, setqtyval] = useState(0);

    const increment = () => {
        if (qtyval < 100) {
            setqtyval(prev => prev + 1);
        } else {
            alert("cant add more than 100 items");
        }
    };

    const decrement = () => {
        if (qtyval > 0) {
            setqtyval(prev => prev - 1);
        }
    };

    const state = location.state || {};
    const { itemId, itemName, category, price, company, image_path, reviews } = state;
    const id = localStorage.getItem("userId");

    const add_to_cart = async () => {
        if(qtyval===0){
            return alert("qty cant be 0");
        }
        try {
            const res = await axios.post("http://localhost:5000/cart", {
                userId: id,
                itemId: itemId,
                qtyval:qtyval
            });
            alert(res.data.message);
        } catch (err) {
            alert(err);
        }
    };

    return (
        <>
            <div className="itempage">
                <img src={image_path} alt="img" className="displayimg" draggable="false" />

                <div className="iteminfo">
                    <h3>{itemName}</h3>

                    <div style={{ display: "flex", gap: "5px", fontSize: "15px", fontWeight: "450" }}>
                        reviews :
                        {[...Array(5)].map((_, i) => {
                            const starColor = i < reviews ? "#FFD700" : "#ccc";
                            return <FaStar key={i} color={starColor} size={20} />;
                        })}
                    </div>

                    <p className="itemname">Category: {category}</p>
                    <p>company: {company}</p>

                    <div className="qtybuttondiv">
                        <Button className="qtybutton" onClick={increment}>+</Button>
                        <p>{qtyval}</p>
                        <Button className="qtybutton" onClick={decrement}>-</Button>
                    </div>

                    <p className="itemprice">Rs {price}</p>
                    <div className="buybuttons">
                        <Button className="addtocart2" onClick={add_to_cart}>Add to cart</Button>
                        <Button className="buy" onClick={add_to_cart}>Proceed to Buy</Button>
                    </div>
                </div>
            </div>

            <Popular_product message="related products" className="related"/>
        </>
    );
}
