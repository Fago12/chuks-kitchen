import React from 'react';
import { Link } from 'react-router-dom';
import SimplePageShell from '../components/layout/SimplePageShell';

const NotFound: React.FC = () => {
    return (
        <SimplePageShell>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/">Go back to Home</Link>
        </SimplePageShell>
    );
};

export default NotFound;
