import { useState, useRef, useEffect } from "react";
import "./component_css/pdrawer.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MdMenu } from "react-icons/md";



export default function ProblemDrawer() {
    const [open, setOpen] = useState(false);
    const drawerRef = useRef();
    const navigate = useNavigate();
    const [problems, setproblems] = useState([]);
    useEffect(() => {
        const fetchProblems = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/problems`);
                setproblems(res.data);
            } catch (err) {
                console.error("Something went wrong", err);
            }
        };

        fetchProblems();
    }, []);
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

    const handleclick = (path,id) => {
        navigate(path,{state:{id:id}});
        setOpen(false); ;
    };

    return (
        <>
            <button onClick={() => setOpen(prev => !prev)} className="pdrawer-btn"><MdMenu /></button>
            <div ref={drawerRef} className={`pdrawer ${open ? "open" : ""}`}>
                <h1 style={{ color: "aqua" }}>Problem list</h1>
                <hr />
                {
                    problems.map(
                        (problem,index) => (
                            <div className="psets">
                                <p className="poptions" onClick={() => handleclick("/problemset/" + problem.slug,index+1)}>{index+1}.{problem.heading}</p>
                            </div>
                        )
                    )
                }
            </div>

        </>
    )
}
