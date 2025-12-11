import { createContext, useContext, useState } from 'react';

const LeaderboardContext = createContext();

export function useLeaderboard() {
    return useContext(LeaderboardContext);
}

const INITIAL_LEADERBOARD = [
    { rank: 1, username: "algoMaster_99", score: 1540, solved: 45 },
    { rank: 2, username: "codeNinja", score: 1420, solved: 40 },
    { rank: 3, username: "bugSlayer", score: 1350, solved: 38 },
];

export function LeaderboardProvider({ children }) {
    const [leaderboard, setLeaderboard] = useState(() => {
        const saved = localStorage.getItem('cc_leaderboard');
        return saved ? JSON.parse(saved) : INITIAL_LEADERBOARD;
    });

    // Future methods: updateScore, etc.

    return (
        <LeaderboardContext.Provider value={{ leaderboard }}>
            {children}
        </LeaderboardContext.Provider>
    );
}
