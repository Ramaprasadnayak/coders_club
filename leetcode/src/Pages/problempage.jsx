import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyEditor from "../components/myeditor";
import MyBackground from "../components/background";
import "./Pages_css/problempage.css";
import ProblemStatement from "../components/problemstatement";
import ProblemNav from "../components/problemnav";
import { useLocation } from "react-router-dom";

export default function ProblemPage() {
  const { slug } = useParams();
  const [problemdes, setproblemdes] = useState([]);
  const location = useLocation();
  const { id } = location.state || {};

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/problems/${slug}`).then((res) => setproblemdes(res.data)).catch((err) => console.error(err));
  }, [slug]);

  return (
    <div className="problempage">
      <MyBackground count={0} color="#0d1117"/>
      <ProblemNav/>
      <div className="problempage-grid">
        <ProblemStatement id={id} problem={problemdes}/>
        <MyEditor />
        <div className="problempage-solution">
          solution
        </div>
      </div>
    </div>
  );
}
