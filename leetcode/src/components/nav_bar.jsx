import { Link, useNavigate } from "react-router-dom";
import "./component_css/nav_bar.css";

export default function NavBar() {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="nav-brand">
                <span className="brand-icon">{"< />"}</span>
                <span className="brand-name">CodeClub</span>
            </div>

            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/problems" className="nav-link">Problems</Link>
                <Link to="/contest" className="nav-link">Contest</Link>
                <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
            </div>

            <div className="nav-auth">
                <button className="btn-signin" onClick={() => navigate('/loginpage')}>
                    Sign In
                </button>
            </div>
        </nav>
    );
}