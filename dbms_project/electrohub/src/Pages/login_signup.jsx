import "./Pages_css/login_signup.css";
import { useState } from "react";
import { MdPerson, MdEmail, MdLock } from "react-icons/md";
import MyText from "../components/MyTextField";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cubes from "../components/background";

function Loginpage() {
  const [action, setAction] = useState("SignUp");
  const navigate = useNavigate();

  // Login fields
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Signup fields
  const [signupUsername, setSignupUsername] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const signINhandle = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email: loginEmail,
        password: loginPassword,
      });
      alert(res.data.message);
      localStorage.setItem("userId", res.data.userId);
      localStorage.setItem("username", res.data.name);
      localStorage.setItem("email", res.data.email);
      navigate("/");
    } catch (err) {
      alert("Invalid email or password");
      console.error(err);
    }
  };

  const signUPhandle = async () => {
    try {
      const res = await axios.post("http://localhost:5000/signup", {
        name: signupUsername,
        email: signupEmail,
        password: signupPassword,
      });
      alert(res.data.message);
      localStorage.setItem("userId", res.data.userId);
      localStorage.setItem("email", res.data.email);
      localStorage.setItem("username", res.data.name);
      navigate("/");
    } catch (err) {
      alert("Error during signup");
      console.error(err);
    }
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <Cubes
          gridSize={10}
          maxAngle={80}
          radius={4}
          borderStyle="2px dashed #5227FF"
          faceColor="#1a1a2e"
          rippleColor="#ff6b6b"
          rippleSpeed={1.5}
          autoAnimate={true}
          rippleOnClick={true}
        />
      </div>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
        </div>

        <div className="submit">
          <button
            className={action === "SignUp" ? "submit_button gray" : "submit_button"}
            onClick={() => setAction("SignUp")}
          >
            Sign Up
          </button>
          <button
            className={action === "Login" ? "submit_button gray" : "submit_button"}
            onClick={() => setAction("Login")}
          >
            Login
          </button>
        </div>

        {action === "Login" ? (
          <div className="inputs">
            <MyText
              icontag={MdEmail}
              mycolor="#797979"
              iconclass="icon"
              inputtype="text"
              hinttext="Email"
              visibility={false}
              value={loginEmail}
              onChange={setLoginEmail}
            />
            <MyText
              icontag={MdLock}
              mycolor="#797979"
              iconclass="icon"
              inputtype="password"
              hinttext="Password"
              visibility={true}
              value={loginPassword}
              onChange={setLoginPassword}
            />
          </div>
        ) : (
          <div className="inputs">
            <MyText
              icontag={MdPerson}
              mycolor="#797979"
              iconclass="icon"
              inputtype="text"
              hinttext="Username"
              visibility={false}
              value={signupUsername}
              onChange={setSignupUsername}
            />
            <MyText
              icontag={MdEmail}
              mycolor="#797979"
              iconclass="icon"
              inputtype="text"
              hinttext="Email"
              visibility={false}
              value={signupEmail}
              onChange={setSignupEmail}
            />
            <MyText
              icontag={MdLock}
              mycolor="#797979"
              iconclass="icon"
              inputtype="password"
              hinttext="Password"
              visibility={true}
              value={signupPassword}
              onChange={setSignupPassword}
            />
          </div>
        )}

        {action === "SignUp" ? null : (
          <div className="noacc">
            Forgot your password? <span>Click here</span>
          </div>
        )}

        <div className="submit">
          <button
            className="submit_button"
            onClick={action === "SignUp" ? signUPhandle : signINhandle}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Loginpage;
