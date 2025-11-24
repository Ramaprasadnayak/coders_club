import { Link } from "react-router-dom";
import logo from "../assets/icon.png";
import "./Pages_css/header.css";
import TextField from "../components/TextField";
import CountryListDropdown from "../components/countrylist";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import UserCard from "../components/Card";
import Category from "../components/category";



export default function Header() {
  const uid = localStorage.getItem("userId");
  const hasUserId = !!uid;
  const navigate = useNavigate();

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.transition = "transform 0.2s ease"; 
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  const handleclick = (path) => {
    navigate(path);
  };

  return (
    <header className="header-container">
      {/* <div className="top-strip">
        <p>
          Due to the <b>COVID 19</b> epidemic, orders may be processed with a
          slight delay
        </p>
      </div> */}
      <div className="header-main">
        <Link to={'/'} className="logo-link">
          <img src={logo} alt="electrohub" className="mylogo"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
        </Link>
        <div className="location" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><CountryListDropdown /></div>
        <div className="searchbar" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><TextField/></div>

        {hasUserId ? (
          <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><UserCard/></div>
        ) : (
          <Button className="loginbutton" onClick={() => handleclick("/loginpage")}>
            Login
          </Button>
        )}

        <Button
          className="cartbutton"
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
          onClick={() => handleclick("/cartpage")}>
        <FaShoppingCart  size={20} style={{ marginRight: "8px" }} />Cart</Button>
      </div>
      <Category/>
      <hr className="line" />
    </header>
  );
}
