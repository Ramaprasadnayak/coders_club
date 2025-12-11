import React from 'react';

export default function Badge({ children, type = 'default', className = '' }) {
    const getColors = () => {
        switch (type) {
            case 'success': return { bg: 'rgba(34, 197, 94, 0.1)', color: '#4ade80', border: '#22c55e' }; // Green
            case 'warning': return { bg: 'rgba(234, 179, 8, 0.1)', color: '#facc15', border: '#eab308' }; // Yellow
            case 'danger': return { bg: 'rgba(239, 68, 68, 0.1)', color: '#f87171', border: '#ef4444' }; // Red
            case 'info': return { bg: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa', border: '#3b82f6' }; // Blue
            case 'secondary': return { bg: 'rgba(168, 85, 247, 0.1)', color: '#c084fc', border: '#a855f7' }; // Purple
            default: return { bg: 'rgba(148, 163, 184, 0.1)', color: '#94a3b8', border: '#64748b' }; // Gray
        }
    };

    const style = getColors();

    return (
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${className}`} style={{
            background: style.bg,
            color: style.color,
            borderColor: style.border,
            borderWidth: '1px',
            borderStyle: 'solid',
            borderRadius: '9999px',
            padding: '0.25rem 0.75rem',
            fontSize: '0.875rem',
            fontWeight: 600
        }}>
            {children}
        </span>
    );
}
