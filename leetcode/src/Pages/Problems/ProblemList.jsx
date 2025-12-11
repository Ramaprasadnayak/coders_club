import React from 'react';
import { useData } from '../../context/DataContext';
import { MdCheckCircle, MdCancel } from 'react-icons/md';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import './ProblemList.css';

export default function ProblemList() {
    const { problems } = useData();

    const getDifficultyType = (diff) => {
        switch (diff.toLowerCase()) {
            case 'easy': return 'success';
            case 'medium': return 'warning';
            case 'hard': return 'danger';
            default: return 'default';
        }
    };

    return (
        <div className="page-container">
            <div className="content-wrapper">
                <header className="page-header">
                    <h1>Problem Set</h1>
                    <p>Curated challenges to master your algorithms.</p>
                </header>

                <Card className="problem-table-container p-0 overflow-hidden border-0">
                    <table className="problem-table">
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Title</th>
                                <th>Difficulty</th>
                                <th>Acceptance</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {problems.map((prob) => (
                                <tr key={prob.id} className="problem-row">
                                    <td className="status-col">
                                        <div className="status-icon pending" />
                                    </td>
                                    <td className="title-col">
                                        <a
                                            href={prob.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="problem-title"
                                        >
                                            {prob.id}. {prob.title}
                                        </a>
                                    </td>
                                    <td>
                                        <Badge type={getDifficultyType(prob.difficulty)}>
                                            {prob.difficulty}
                                        </Badge>
                                    </td>
                                    <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                                        {prob.acceptance}
                                    </td>
                                    <td>
                                        <a
                                            href={prob.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="solve-btn"
                                        >
                                            Solve
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card>
            </div>
        </div>
    );
}
