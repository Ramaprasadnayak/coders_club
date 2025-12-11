import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { MdArrowBack, MdPlayArrow, MdCloudUpload } from 'react-icons/md';
import './SolveProblem.css';

export default function SolveProblem() {
    const { id } = useParams();
    const { problems } = useData();
    const [problem, setProblem] = useState(null);
    const [code, setCode] = useState("// Write your solution here...\n");
    const [output, setOutput] = useState("");

    useEffect(() => {
        const p = problems.find(p => p.id === parseInt(id));
        if (p) {
            setProblem(p);
            setCode(`class Solution {\n    public void solve() {\n        // TODO: Implement ${p.title}\n    }\n}`);
        }
    }, [id, problems]);

    const handleRun = () => {
        setOutput("Compiling...\nRunning test cases...\n\nResult: Accepted\nRuntime: 2ms\nMemory: 41.5MB");
    };

    if (!problem) return <div className="loading">Loading Problem...</div>;

    return (
        <div className="solve-container">
            <header className="solve-header">
                <div className="left-controls">
                    <Link to="/problems" className="back-btn"><MdArrowBack /> Problem List</Link>
                    <span className="divider">|</span>
                    <h2 className="current-problem-title">{problem.id}. {problem.title}</h2>
                </div>
                <div className="right-controls">
                    <button className="action-btn run-btn" onClick={handleRun}><MdPlayArrow /> Run</button>
                    <button className="action-btn submit-btn" onClick={handleRun}><MdCloudUpload /> Submit</button>
                </div>
            </header>

            <div className="workspace">
                <div className="panel description-panel">
                    <div className="panel-header">
                        <span className="tab active">Description</span>
                        <span className="tab">Hints</span>
                    </div>
                    <div className="panel-content">
                        <h3>{problem.title}</h3>
                        <div className="difficulty-tag old-easy">{problem.difficulty}</div>
                        <div className="description-text">
                            <p>{problem.description}</p>
                        </div>

                        <div className="examples">
                            <h4>Example 1:</h4>
                            <div className="code-block">
                                Input: nums = [2,7,11,15], target = 9<br />
                                Output: [0,1]<br />
                                Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
                            </div>
                        </div>
                    </div>
                </div>

                <div className="panel editor-panel">
                    <div className="panel-header">
                        <span className="tab active">Java</span>
                        <span className="tab">C++</span>
                        <span className="tab">Python</span>
                    </div>
                    <div className="editor-wrapper">
                        <textarea
                            className="code-editor"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            spellCheck="false"
                        ></textarea>
                    </div>
                    <div className="terminal-panel">
                        <div className="terminal-header">Console</div>
                        <pre className="terminal-output">{output || "Run to see your results..."}</pre>
                    </div>
                </div>
            </div>
        </div>
    );
}
