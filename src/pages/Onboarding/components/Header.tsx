import React from 'react';
import { Link, useLocation } from 'react-router';
import './Header.scss';

const Header: React.FC = () => {
    const location = useLocation();
    const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

    return (
        <header className={`onboarding__header ${isAuthPage ? 'onboarding__header--auth' : ''}`}>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <h1 className='onboarding__logo'>Chuks Kitchen</h1>
            </Link>
            {!isAuthPage && (
                <Link to="/login" className='onboarding__signin-btn'>
                    Sign In
                </Link>
            )}
        </header>
    );
};

export default Header;
