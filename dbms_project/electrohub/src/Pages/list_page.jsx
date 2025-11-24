import { useState, useEffect } from "react";
import "../components/components_css/featured_category.css";
import axios from "axios";
import ItemCard from "../components/itemcard";
import { useParams } from "react-router-dom";


export default function New_product() {
    const [products, setProducts] = useState([]);
    const { category } = useParams();
    // categories:
    // Smartphones
    // Headphones
    // Air_Conditioners
    // Televisions 
    // VR_Headsets
    // Laptops
    // Camera

    useEffect(() => {
        if (category) {
            axios.post(`http://localhost:5000/ItemLists/${category}`).then((res) => setProducts(res.data)).catch((err) => console.error("Error fetching items:", err));
        }
    }, [category]);
    return (
        <>
            <h3 className="myheader">{localStorage.getItem("category")}</h3>
            <div className="popular-container">
                    <div className="new_product-track">
                        {products.map((product) => (
                            <ItemCard
                                itemId={product.itemId}
                                itemName={product.itemName}
                                category={product.category}
                                price={product.price}
                                company={product.company}
                                image_path={product.image_path}
                                reviews={product.reviews}
                            />
                        ))}
                    </div>
                </div>
        </>
    );
}
