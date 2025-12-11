import { useState, useRef, useEffect } from "react";
import "./component_css/nav_bar.css";
import { useNavigate } from "react-router-dom";


export default function NavBar() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const drawerRef = useRef();
    const handleclick = (path) => {
        navigate(path);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (open && drawerRef.current && !drawerRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <div className="navbar">
            <button onClick={() => setOpen(true)} className="drawer-btn">☰</button>
            <div ref={drawerRef} className={`drawer ${open ? "open" : ""}`}>
                <p className="options">ram</p>
                <p className="options">prasad</p>
                <p className="options">nayak</p>
            </div>

            <div className="header-btn">
                <button className="btns">Home</button>
                <button className="btns">About</button>
                <button className="btns">Leaderboadr</button>
                <button className="btns">Events</button>
                <button className="btns">contacts</button>
                <button className="login-btn" onClick={() => handleclick("/loginpage")}>login</button>
            </div>
        </div>
    );
}


