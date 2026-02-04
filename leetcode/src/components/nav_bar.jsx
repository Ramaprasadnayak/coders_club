import "./component_css/nav_bar.css";
import { useNavigate } from "react-router-dom";
import Drawer from "./drawer";
import { getUser } from "../utils/auth";
import { useEffect, useState } from "react";

export default function NavBar() {
    const [users, setUsers] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setUsers(getUser()); 
    }, []);

    const handleclick = (path) => {
        navigate(path);
    };
    return (
        <div className="navbar">
            <Drawer />
            <div className="header-btn">
                <button className="btns" onClick={() => handleclick("/")}>Home</button>
                <button className="btns">About</button>
                <button className="btns">Events</button>
                <button className="btns">Contacts</button>
                {
                    users ? (
                        <div className="user-info">Hi, {users.username}</div>
                    ) : (
                        <button className="login-btn" onClick={() => handleclick("/loginpage")}>Login</button>
                    )
                }
            </div>
            <div className="mobile-nav">
                {
                    users ? (
                        <div className="user-info">Hi, {users.username}</div>
                    ) : (
                        <button className="login-btn" onClick={() => handleclick("/loginpage")}>Login</button>
                    )
                }
            </div>
        </div>
    );
}
