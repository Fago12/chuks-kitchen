import React from 'react';
import { Link } from 'react-router-dom';

interface PlaceholderProps {
    title: string;
}

const Placeholder: React.FC<PlaceholderProps> = ({ title }) => {
    return (
        <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
            <h1>{title}</h1>
            <p>This is a placeholder for the {title} page.</p>
            <Link to="/" style={{ color: '#ff7a18', fontWeight: 'bold' }}>Go Back Home</Link>
        </div>
    );
};

export default Placeholder;
