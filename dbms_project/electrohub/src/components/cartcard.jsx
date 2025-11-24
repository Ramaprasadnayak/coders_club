import { FaStar, FaTrash } from "react-icons/fa";
import axios from "axios";

export default function CartCard(props) {
    const { key, cartId, itemId, itemName, category, price, image_path, reviews, qty ,total} = props;

    const deleteitem = async () => {
        try {
            const res = await axios.post("http://localhost:5000/deletecart", { cid: cartId });
            alert("item deleted");
            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <div className="cartcard" key={key}>
            <img src={image_path} alt={itemName} />
            <div className="details">
                <h3>{itemName}</h3>
                <p className="type">Category: {category}</p>

                <div className="review">
                    <span>Reviews: </span>
                    {[...Array(5)].map((_, i) => {
                        const starColor = i < reviews ? "#FFD700" : "#ccc";
                        return <FaStar key={i} color={starColor} size={20} />;
                    })}
                </div>

                <p>Price: {price}</p>
                <p className="qty">Quantity: {qty}</p>
            </div>
            <FaTrash size={25} color="red" className="deleteicon" onClick={deleteitem} />
        </div>
    );
}
