import ProblemDrawer from "./problemdrawer";
import "./component_css/problemnav.css";
import { MdCloudUpload,MdPlayArrow } from "react-icons/md";

export default function ProblemNav(){
    return(
        <div className="problempage-navbar">
            <div style={{display:"flex",flexDirection:"row"}}>
                <ProblemDrawer/><p style={{color:"white"}}>Problem list</p>
            </div>
            <div className="nav-actions">
                <button className="navbutton1"><MdPlayArrow size={18} /><span>run</span></button>
                <button className="navbutton2"><MdCloudUpload size={18} color="#00ff66"/><span>submit</span></button>
            </div>
            <button className="navbutton3">login</button>
        </div>
    );
}