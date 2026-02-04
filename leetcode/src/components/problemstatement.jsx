import "./component_css/statement.css";
export default function ProblemStatement({ problem,id }) {
    return (
        <div className="problempage-statement">
            <h2>{id}. {problem.heading}</h2>
            <div className="statements">
                <div className="statement-difficulty">{problem.difficulty}</div>
                <div className="statement-topic">{problem.category}</div>
            </div>
            <div className="statement-description">
                <p>{problem.description}</p>
            </div>
            <div className="statement-examples">
                <h3>Examples</h3>
                {problem.examples?.map((ex, index) => (
                    <div key={index} className="example-box">
                        <p><strong>Input:</strong> {ex.input}</p>
                        <p><strong>Output:</strong> {ex.output}</p>
                        <p><strong>Explanation:</strong> {ex.explanation}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}