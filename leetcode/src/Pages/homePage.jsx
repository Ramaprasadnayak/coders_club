import image from "../assets/logo.png";
import "./Pages_css/homePage.css";
import MyBackground from "../components/background";
import { Link } from "react-router-dom";
import Leaderboard from "../components/leaderboard";
import { useState, useEffect } from "react";
import DownNav from "../components/down_nav";


export default function HomePage() {
    const [count, setCount] = useState(window.innerWidth <= 768 ? 10 : 60);

    useEffect(() => {
        const updateCount = () => {
            setCount(window.innerWidth <= 768 ? 10 : 60);
        };
        updateCount();
        window.addEventListener("resize", updateCount);
        return () => window.removeEventListener("resize", updateCount);
    }, []);
    return (
        <div className="home-container">
            <MyBackground count={count} />
            <div className="contents">
                <Link to={'/'}>
                    <img className="logo" src={image} alt="logo" draggable="false" />
                </Link>
                <Leaderboard />
            </div>
        </div>
    );
}
