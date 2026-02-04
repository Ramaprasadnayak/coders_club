import axios from "axios";
import "./component_css/leaderboard.css"
import { useState, useEffect } from "react";

export default function Leaderboard() {
    const [list, setlist] = useState([]);
    useEffect(() => {
        const fetchusers = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/users/leaderboard`);
                setlist(res.data.leaderboard);
            } catch (err) {
                console.error("Something went wrong");
            }
        }
        fetchusers();
    }, []);
    return (
        <div className="dashboard">
            <h1 style={{ color: "white", fontSize: "2rem" }}>Leaderboard</h1>
            <div className="dashboard2">
                {
                    list.map(
                        (members) => {
                            return (
                                <div className="inside-boxes">
                                    <div>
                                        <h4 className="rank">{list.indexOf(members) + 1}</h4>
                                    </div>
                                    <div className="info">
                                        <div className="member-name">{members.username}</div>
                                        <div className="member-points">{members.points} PTS</div>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}