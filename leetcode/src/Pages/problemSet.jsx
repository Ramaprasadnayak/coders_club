import { useEffect, useState } from "react";
import Problemrow from "../components/problemrow";
import MyBackground from "../components/background";
import "./Pages_css/problemset.css";
import axios from "axios";

export default function ProblemSet() {
    const [action, setAction] = useState("all_topics");
    const [problems,setproblems]=useState([]);
    useEffect(()=>{
        const fetchProblems= async ()=>{
            try{
                const res=await axios.get(`${import.meta.env.VITE_API_URL}/api/problems`);
                setproblems(res.data);
            }catch(err){
                console.error("Something went wrong");
            }
        }
        fetchProblems();
    },[]);
    const filteredproblem=action==="all_topics"?problems:problems.filter(p=>p.category===action);
    return (
        <>
            <MyBackground count="0" />
            <div className="submit">
                <button className={action !=="all_topics"? "topics":"topics glow"} onClick={() => setAction("all_topics")}>All topics</button>
                <button className={action !== "arrays" ? "topics":"topics glow"} onClick={() => setAction("arrays")}>Arrays</button>
                <button className={action !== "strings" ? "topics":"topics glow"} onClick={() => setAction("strings")}>Strings</button>
                <button className={action !== "dp" ? "topics":"topics glow"} onClick={() => setAction("dp")}>DP</button>
                <button className={action !== "graph"? "topics":"topics glow"} onClick={() => setAction("graph")}>graph</button>
                <button className={action !== "bt" ? "topics":"topics glow"} onClick={() => setAction("bt")}>Binary tree</button>
            </div>
            <div className="problemlist">
                {
                    filteredproblem.map(
                        (problem,index)=>(
                            <Problemrow id={index+1} heading={problem.heading} difficulty={problem.difficulty} slug={problem.slug}/>
                        )
                    )
                }
            </div>
        </>
    )
}