import React from 'react';
import { ProblemProvider, useProblems } from './modules/ProblemContext';
import { LeaderboardProvider, useLeaderboard } from './modules/LeaderboardContext';

// Legacy hook for backward compatibility if needed, but better to use specific hooks
export function useData() {
    const { problems, addProblem } = useProblems();
    const { leaderboard } = useLeaderboard();

    return {
        problems,
        addProblem,
        leaderboard
    };
}

export function DataProvider({ children }) {
    return (
        <ProblemProvider>
            <LeaderboardProvider>
                {children}
            </LeaderboardProvider>
        </ProblemProvider>
    );
}
