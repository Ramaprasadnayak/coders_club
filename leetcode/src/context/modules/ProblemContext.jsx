import { createContext, useContext, useState, useEffect } from 'react';

const ProblemContext = createContext();

export function useProblems() {
    return useContext(ProblemContext);
}

const INITIAL_PROBLEMS = [
    {
        id: 1,
        title: "Two Sum",
        difficulty: "Easy",
        description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
        acceptance: "48%",
        url: "https://leetcode.com/problems/two-sum/"
    },
    {
        id: 2,
        title: "Add Two Numbers",
        difficulty: "Medium",
        description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit.",
        acceptance: "39%",
        url: "https://leetcode.com/problems/add-two-numbers/"
    },
    {
        id: 3,
        title: "Median of Two Sorted Arrays",
        difficulty: "Hard",
        description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
        acceptance: "35%",
        url: "https://leetcode.com/problems/median-of-two-sorted-arrays/"
    }
];

export function ProblemProvider({ children }) {
    const [problems, setProblems] = useState(() => {
        const saved = localStorage.getItem('cc_problems');
        return saved ? JSON.parse(saved) : INITIAL_PROBLEMS;
    });

    useEffect(() => {
        localStorage.setItem('cc_problems', JSON.stringify(problems));
    }, [problems]);

    const addProblem = (problem) => {
        const newProblem = { ...problem, id: problems.length + 1, acceptance: "0%" };
        setProblems([...problems, newProblem]);
    };

    return (
        <ProblemContext.Provider value={{ problems, addProblem }}>
            {children}
        </ProblemContext.Provider>
    );
}
