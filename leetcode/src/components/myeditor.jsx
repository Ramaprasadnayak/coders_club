import { Editor } from "@monaco-editor/react";
import "./component_css/myeditor.css";
// import axios from "axios";


export default function MyEditor({code="",setCode}) {
    // const [output,setOutput]=useState("")
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
                <span>Java Script</span>
            </div>
            <Editor
                height="100%"
                width="100%"
                language="javascript"
                theme="dark"
                beforeMount={handleEditorWillMount}
                value={code}
                onChange={(val) =>
                    setCode(val)
                }
            />
        </div>
    );
}
