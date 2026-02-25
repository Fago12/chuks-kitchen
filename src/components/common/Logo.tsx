import React from 'react';
import { Link } from 'react-router';
import './Logo.scss';

interface LogoProps {
    className?: string;
    onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ className = '', onClick }) => {
    return (
        <Link
            to="/"
            className={`shared-logo ${className}`}
            onClick={onClick}
            style={{ textDecoration: 'none' }}
        >
            <h1 className="shared-logo__text">Chuks Kitchen</h1>
        </Link>
    );
};

export default Logo;
