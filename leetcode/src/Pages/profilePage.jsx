import MyBackground from "../components/background";
import "./Pages_css/profilePage.css";
import { MdStar } from "react-icons/md";
import { getUser } from "../utils/auth.js";
import { useState, useEffect } from "react";

export default function Profile() {
    const [user, setUser] = useState({
        username: "hello",
        email: "example@gmail.com",
        points: 0
    });

    useEffect(() => {
        const storedUser = getUser();
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);


    const firstTwoCaps = (str = "") => {
        return str.slice(0, 2).toUpperCase();
    };
    if (!user) return null;

    return (
        <div className="profile-page">
            <MyBackground count={40} />
            <div className="profile-grid">
                <div className="profile-username">
                    <div className="profile-circle">
                        <h1>{firstTwoCaps(user.username)}</h1>
                    </div>
                    <div className="profile-name">
                        <h2>{user.username}</h2>
                        <p>{user.email}</p>
                    </div>
                    <div className="profile-points">
                        <MdStar /> {user.points}
                    </div>
                </div>
                <div className="profile-dailystreak">u</div>
            </div>
        </div>
    );
}
