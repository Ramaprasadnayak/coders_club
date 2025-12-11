import Card from "../components/ui/Card";
import "./Pages_css/homePage.css";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="home-wrapper">

            <div className="content-layer">
                <section className="hero-section">
                    <h1 className="hero-title">
                        Level Up Your <span className="highlight">Code</span>
                    </h1>
                    <p className="hero-subtitle">
                        Join the elite community of developers. Solve problems, complete challenges, and mastery algorithms.
                    </p>
                    <div className="hero-actions">
                        <Link to="/problems" className="btn btn-primary">Start Solving</Link>
                        <Link to="/contest" className="btn btn-secondary">Join Contest</Link>
                    </div>
                </section>

                <section className="features-grid">
                    <Card className="feature-card border-slate-700/50">
                        <h3>Algo Mastery</h3>
                        <p>500+ curated problems to sharpen your logic.</p>
                    </Card>
                    <Card className="feature-card border-slate-700/50">
                        <h3>Daily Streaks</h3>
                        <p>Consistency is key. Track your progress.</p>
                    </Card>
                    <Card className="feature-card border-slate-700/50">
                        <h3>Global Rank</h3>
                        <p>Compete with coders worldwide.</p>
                    </Card>
                </section>
            </div>
        </div>
    );
}
