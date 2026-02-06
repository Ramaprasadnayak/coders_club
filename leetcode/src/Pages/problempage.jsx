import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import MyEditor from "../components/myeditor";
import MyBackground from "../components/background";
import "./Pages_css/problempage.css";
import ProblemStatement from "../components/problemstatement";
import ProblemNav from "../components/problemnav";

export default function ProblemPage() {
  const { slug } = useParams();
  const [problemdes, setproblemdes] = useState({ examples: [] });
  const location = useLocation();
  const { id } = location.state || {};
  const [code, setCode] = useState(`function submit(num){\n\treturn 0;\n}`);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/problems/${slug}`).then((res) => setproblemdes(res.data)).catch((err) => console.error(err));
  }, [slug]);

  return (
    <div className="problempage">
      <MyBackground count={0} color="#0d1117" />
      <ProblemNav code={code} functionname={problemdes.slug} input1={problemdes.examples?.[0]?.input1} input2={problemdes.examples?.[0]?.input2} output={problemdes.examples?.[0]?.output} setCode={setCode}/>
      <div className="problempage-grid">
        <ProblemStatement id={id} problem={problemdes} />
        <MyEditor code={code} setCode={setCode} />
        <div className="problempage-solution">
          solution
        </div>
      </div>
    </div>
  );
}
