import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import './AdminPanel.css';

export default function AdminPanel() {
    const { addProblem } = useData();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [formData, setFormData] = useState({
        title: '',
        difficulty: 'Medium',
        description: '',
        url: ''
    });

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple client-side check for demo purposes
        if (password === 'admin123') {
            setIsAuthenticated(true);
        } else {
            alert('Invalid Password');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.url) return;

        addProblem(formData);
        alert('Problem Added Successfully!');
        setFormData({ title: '', difficulty: 'Medium', description: '', url: '' });
    };

    if (!isAuthenticated) {
        return (
            <div className="admin-container">
                <div className="admin-card login-mode">
                    <h2>Admin Access</h2>
                    <p>Please enter the admin passcode to continue.</p>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input
                                type="password"
                                className="admin-input"
                                placeholder="Enter Passcode (admin123)"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="admin-btn">Unlock</button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="admin-container">
            <div className="admin-card">
                <h2>Admin Dashboard</h2>
                <p>Add new weekly challenges to the problem set.</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Problem Title</label>
                        <input
                            type="text"
                            className="admin-input"
                            placeholder="e.g. Reverse Linked List"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>LeetCode URL</label>
                        <input
                            type="text"
                            className="admin-input"
                            placeholder="e.g. https://leetcode.com/problems/..."
                            value={formData.url}
                            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>Difficulty</label>
                        <select
                            className="admin-input"
                            value={formData.difficulty}
                            onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                        >
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Description (Optional markdown)</label>
                        <textarea
                            className="admin-input admin-textarea"
                            placeholder="Describe the problem..."
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        ></textarea>
                    </div>

                    <button type="submit" className="admin-btn">Publish Problem</button>
                </form>
            </div>
        </div>
    );
}
