import {MdPerson,MdAssignment,MdSettings,MdHelpOutline,MdLogout} from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import "./component_css/drawer.css"
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/auth.js";
export default function Drawer() {
    const [open, setOpen] = useState(false);
    const drawerRef = useRef();
    const navigate = useNavigate();


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

    const handleclick = (path) => {
        navigate(path);
        setOpen(false)
    };
    const dlogout=()=>{
        logout();
        navigate("/loginpage");
    }


    return (
        <>
            <button onClick={() => setOpen(true)} className="drawer-btn">☰</button>
            <div ref={drawerRef} className={`drawer ${open ? "open" : ""}`}>
                <h1 style={{color:"rgb(233, 220, 169)"}}>coders club</h1>
                <hr />
                <div className="sets">
                    <p className="options" onClick={()=>handleclick("/profile")}><MdPerson/>profile</p>
                    <p className="options" onClick={()=>handleclick("/problemset")}><MdAssignment/>problemSet</p>
                    <p className="options" onClick={()=>handleclick("/settings")}><MdSettings/>settings</p>
                    <p className="options" onClick={()=>handleclick("/help")}><MdHelpOutline/>help</p>
                    <p className="options" onClick={dlogout}><MdLogout/>logout</p>
                </div>
            </div>

        </>
    )
}
