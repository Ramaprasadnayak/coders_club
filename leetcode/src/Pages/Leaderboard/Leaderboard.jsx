import React from 'react';
import { useData } from '../../context/DataContext';
import Card from '../../components/ui/Card';
import './Leaderboard.css';

export default function Leaderboard() {
    const { leaderboard } = useData();

    return (
        <div className="leaderboard-container">
            <div className="leaderboard-wrapper">
                <header className="page-header">
                    <h1 className="leaderboard-title">Global Ranking</h1>
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem' }}>
                        See who's topping the charts this week.
                    </p>
                </header>

                <Card className="rankings-list p-0">
                    <div className="rank-header">
                        <span className="col-rank">Rank</span>
                        <span className="col-user">User</span>
                        <span className="col-solved">Questions Solved</span>
                        <span className="col-score">Score</span>
                    </div>

                    {leaderboard.sort((a, b) => b.score - a.score).map((user, index) => (
                        <div key={user.username} className={`rank-row rank-${index + 1}`}>
                            <span className="col-rank">#{index + 1}</span>
                            <span className="col-user">
                                <div className="avatar">{user.username[0].toUpperCase()}</div>
                                {user.username}
                            </span>
                            <span className="col-solved">{user.solved}</span>
                            <span className="col-score">{user.score}</span>
                        </div>
                    ))}
                </Card>
            </div>
        </div>
    );
}
