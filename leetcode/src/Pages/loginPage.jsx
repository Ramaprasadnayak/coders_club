import "./Pages_css/login_signup.css";
import { useState } from "react";
import { MdPerson, MdEmail, MdLock } from "react-icons/md";
import MyTextField from "../components/my_textfield";

function Loginpage() {
    const [action, setAction] = useState("SignUp");

    // Login fields
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    // Signup fields
    const [signupUsername, setSignupUsername] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");

    const signINhandle = async () => { };

    const signUPhandle = async () => { };

    return (
        <div className="loginpage">

            <div className="loginbox">

                {/* Heading wheather signin or signup */}
                <div className="header"><p>{action}</p></div>

                {/* signin or signup (toggle button) */}
                <div className="submit">
                    <button className={action === "SignUp" ? "submit_button" : "submit_button toggle"} onClick={() => setAction("SignUp")}>Sign Up</button>
                    <button className={action === "Login" ? "submit_button" : "submit_button toggle"} onClick={() => setAction("Login")}>Login</button>
                </div>

                {/* login toggle logic*/}
                {action === "Login" ? (
                    // login toggle
                    <div className="input-list">
                        {/* email entry */}
                        <MyTextField
                            key="login_email"
                            icontag={MdEmail}
                            mycolor="#797979"
                            iconclass="icon"
                            inputtype="email"
                            hinttext="Email"
                            visibility={false}
                            value={loginEmail}
                            onChange={setLoginEmail} />
                        {/* password entry */}
                        <MyTextField
                            key="login_pass"
                            icontag={MdLock}
                            mycolor="#797979"
                            iconclass="icon"
                            inputtype="password"
                            hinttext="Password"
                            visibility={true}
                            value={loginPassword}
                            onChange={setLoginPassword} />
                    </div>
                ) : (
                    // signUp toggle
                    <div className="input-list">
                        {/* username entry */}
                        <MyTextField
                            icontag={MdPerson}
                            key="signup_username"
                            mycolor="#797979"
                            iconclass="icon"
                            inputtype="text"
                            hinttext="Username"
                            visibility={false}
                            value={signupUsername}
                            onChange={setSignupUsername} />
                        {/* email entry */}
                        <MyTextField
                            key="signup_email"
                            icontag={MdEmail}
                            mycolor="#797979"
                            iconclass="icon"
                            inputtype="email"
                            hinttext="Email"
                            visibility={false}
                            value={signupEmail}
                            onChange={setSignupEmail} />
                        {/* password  entry */}
                        <MyTextField
                            key="signup_pass"
                            icontag={MdLock}
                            mycolor="#797979"
                            iconclass="icon"
                            inputtype="password"
                            hinttext="Password"
                            visibility={true}
                            value={signupPassword}
                            onChange={setSignupPassword} />
                    </div>
                )}

                {/* forgot password */}
                {
                    action === "SignUp" ? null : (
                        <div className="forgot_password">
                            Forgot your password? <span>Click here</span>
                        </div>
                    )
                }

                {/* submit */}
                <div className="submit">
                    <button className="submit_button" onClick={action === "SignUp" ? signUPhandle : signINhandle}>Submit</button>
                </div>

            </div>
        </div>
    );
}

export default Loginpage;