import "./components_css/card.css";
import { useState } from "react";
export default function UserCard() {
  const [click, setclick] = useState(false);

  const uname = localStorage.getItem("username");
  const email = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div
      className="user-card" onClick={()=>{setclick(!click)}}>
      <span style={{color:"white"}}>👤Hello, {uname}</span>

      {click && (
        <div className="profile-box">
          <p>{email}</p>
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
