import { useState } from 'react';
import './component_css/downnav.css';
import { useNavigate } from "react-router-dom";

export default function DownNav() {
    const navigate = useNavigate();
    const [location,setlocation]=useState("");
    const handleclick = (path) => {
        navigate(path);
        setlocation(path);
    };
    return (
        <div className="downnav">
            <button className={`btns ${location === "/" ? "active" : ""}`} onClick={() => handleclick("/")}>Home</button>
            <button className={`btns ${location === "/about" ? "active" : ""}`} onClick={() => handleclick("/about")}>About</button>
            <button className={`btns ${location === "/events" ? "active" : ""}`} onClick={() => handleclick("/events")}>Events</button>
            <button className={`btns ${location === "/contacts" ? "active" : ""}`} onClick={() => handleclick("/contacts")}>Contacts</button>
        </div>
    )
}