import React from 'react';

export default function Card({ children, className = '', title, ...props }) {
    return (
        <div className={`
            bg-slate-800/50 
            backdrop-blur-md 
            border border-slate-700 
            rounded-xl 
            p-6 
            shadow-xl
            ${className}
        `} {...props} style={{
                background: 'rgba(30, 41, 59, 0.5)',
                backdropFilter: 'blur(12px)',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                padding: '1.5rem',
                ...props.style
            }}>
            {title && (
                <h3 className="text-xl font-bold mb-4 text-blue-400" style={{
                    color: 'var(--primary-color)',
                    marginTop: 0,
                    marginBottom: '1rem',
                    fontSize: '1.25rem',
                    fontWeight: 700
                }}>{title}</h3>
            )}
            {children}
        </div>
    );
}
