import image from "../assets/logo.png";
import "./Pages_css/homePage.css";
import MyBackground from "../components/background";
import { Link } from "react-router-dom";


let list = [
    { name: "Code master", points: 11000 },
    { name: "Pixel duke", points: 10000 },
    { name: "chatgpt masters", points: 11000 },
    { name: "code gpt", points: 10000 },
    { name: "power rangers", points: 1100 },
    { name: "luffy", points: 100 }
]

export default function HomePage() {
    return (
        <div className="home-container">
            <MyBackground count="60" />
            <Link to={'/'}>
                <img className="logo" src={image} alt="logo" draggable="false" />
            </Link>
            <div className="dashboard">
                <h1 style={{ color: "white" }}>Leaderboard</h1>
                {
                    list.map(
                        (members) => {
                            return (
                                <div className="inside-boxes">
                                    <div>
                                        <h1 className="rank">{list.indexOf(members) + 1}</h1>
                                    </div>
                                    <div>
                                        <div className="member-name">{members.name}</div>
                                        <div className="member-points">{members.points} PTS</div>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    );
}
