import ProblemDrawer from "./problemdrawer";
import "./component_css/problemnav.css";
import { MdCloudUpload, MdPlayArrow } from "react-icons/md";
import { getUser } from "../utils/auth";
import { useEffect, useState } from "react";

export default function ProblemNav({ code,functionname,input1,input2,output,setCode }) {
    const [users, setUsers] = useState(null);
    useEffect(() => {
        setUsers(getUser());
    }, []);
    useEffect(() => {
        if (input2) {
            setCode(`function ${functionname}(input1, input2) {\n\treturn 0;\n}`);
        } else {
            setCode(`function ${functionname}(input1) {\treturn 0;\n}`);
        }
    }, [functionname, input2]);

    function handlerun(userCode, param1, param2) {
        const params = param2 !== undefined ? [param1, param2] : [param1];
        const wrapped = `${userCode}return ${functionname}(...${JSON.stringify(params)});`;
        try {
            const fn = new Function(wrapped);
            const result = fn();
            console.log("Output:", result);
            alert(output)
            if(output==result){
                console.log("execution complete")
            }
        } catch (err) {
            console.error("Runtime Error:", err.message);
        }
    }

    return (
        <div className="problempage-navbar">
            <div style={{ display: "flex", flexDirection: "row" }}>
                <ProblemDrawer />
                <p style={{ color: "white" }}>Problem list</p>
            </div>

            <div className="nav-actions">
                <button 
                    className="navbutton1" 
                    onClick={() => handlerun(code, input1, input2)}
                >
                    <MdPlayArrow size={18} />
                    <span>run</span>
                </button>

                <button className="navbutton2">
                    <MdCloudUpload size={18} color="#00ff66" />
                    <span>submit</span>
                </button>
            </div>

            {
                users ? (
                    <div className="user-info">Hi, {users.username}</div>
                ) : (
                    <button className="login-btn">Login</button>
                )
            }
        </div>
    );
}
