import React from 'react';
import { Link } from 'react-router-dom';
import SimplePageShell from '../components/layout/SimplePageShell';

interface PlaceholderProps {
    title: string;
}

const Placeholder: React.FC<PlaceholderProps> = ({ title }) => {
    return (
        <SimplePageShell>
            <h1>{title}</h1>
            <p>This page is currently under development. Please check back later!</p>
            <Link to="/">Go back to Home</Link>
        </SimplePageShell>
    );
};

export default Placeholder;
