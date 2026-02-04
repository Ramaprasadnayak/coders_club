import { useNavigate } from "react-router-dom";
import "./component_css/problemrow.css"

export default function Problemrow({ id, heading, difficulty,slug }) {
    const color=difficulty==="hard" ? "red" :difficulty === "easy" ? "green" :"orange";
    // const scolor=status==="Pending"? "#9ca3af":"#22c55e";
    const navigate = useNavigate();
    const handleclick = (path,id) => {
        navigate("/problemset/"+path,{state:{id:id}});
    };

    return (
        <div className="statement" onClick={()=>handleclick(slug,id)}>
            <div className="left">
                <p>{id}. </p>
                <p>{heading}</p>
            </div>
            <div className="right">
                <p style={{ color:color }}>{difficulty}</p>
                {/* <p style={{ color:scolor }}>{status}</p> */}
            </div>
        </div>
    );
}
