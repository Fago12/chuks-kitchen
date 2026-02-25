import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/" style={{ color: '#ff7a18', fontWeight: 'bold' }}>Go Back Home</Link>
        </div>
    );
};

export default NotFound;
