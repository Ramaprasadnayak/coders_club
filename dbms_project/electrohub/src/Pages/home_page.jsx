import Carousel from "../components/Carousel";
import FCategory from "../components/featured_category";
import Popular_product from "../components/popular_product"
import New_product from "../components/newProduct";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Pages_css/home.css";

function HomePage() {
    console.log(localStorage.getItem("userId"));
    return (
        <>
            <Carousel />
            <FCategory />
            <Popular_product message="Popular products" />
            <New_product />
            <footer className="footer">
                <p>©2025 ElectroHub — All Rights Reserved</p>
                <div className="socials">
                    <a href=""><FaInstagram size={25} /></a>
                    <a href=""><FaLinkedin size={25} /></a>
                    <a href=""><FaGithub size={25} /></a>
                </div>
            </footer>
        </>
    );
}

export default HomePage