import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import "./component_css/myeditor.css";
import axios from "axios";


export default function MyEditor() {
    const [language, setLanguage] = useState("c");
    const [output,setOutput]=useState("")
    const [code, setCode] = useState({
        c: `#include<stdio.h>\nint main(){\n\treturn 0;\n}`,
        cpp: `#include <iostream>\nusing namespace std;\nint main() {\n\t// Your code here\n\treturn 0;\n}`,
        java: `public class Main {\npublic static void main(String[] args) {\n\t// Your code here\n\t}\n}`,
        python: `# Your code here\nif __name__ == "__main__":\n\tpass`
    });
    const runcode = async () => {
    try {
        const res = await axios.post("http://localhost:3000/api/problems/run", {
            language: language,
            code: code[language] 
        });
        setOutput(res.data.output);
        console.log("output:",output)
    } catch (err) {
        console.error(err);
        alert("Error running code. Check console.");
    }
};
    function handleEditorWillMount(monaco) {
        monaco.editor.defineTheme('dark', {
            base: 'vs-dark',
            inherit: true,
            rules: [
                { token: 'comment', foreground: '6272a4', fontStyle: 'italic' },
                { token: 'keyword', foreground: 'ff79c6' },
            ],
            colors: {
                'editor.background': '#0f141d',
                'editor.lineHighlightBackground': '#161d2a',
                'editorCursor.foreground': '#ffffff',
                'editor.selectionBackground': '#3c424e',
                'editorLineNumber.foreground': '#ffffff',
            },
        });
    }

    return (
        <div className="problempage-editor">
            <div className="myeditor-nav">
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="dropdown-button"
                >
                    <option value="c">C</option>
                    <option value="cpp">C++</option>
                    <option value="java">Java</option>
                    <option value="python">Python</option>
                </select>
                <button onClick={runcode}>submit</button>
            </div>
            <Editor
                height="100%"
                width="100%"
                language={language}
                theme="dark"
                beforeMount={handleEditorWillMount}
                value={code[language]}
                onChange={(val) =>
                    setCode((prev) => ({ ...prev, [language]: val }))
                }
            />
        </div>
    );
}
