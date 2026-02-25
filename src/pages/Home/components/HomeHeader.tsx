import React from 'react';
import { Link, useLocation } from 'react-router';
import Logo from '../../../components/common/Logo';
import NavLinks from './NavLinks';
import './HomeHeader.scss';

const HomeHeader: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="home-header">
            <div className="home-header__container">
                <Logo onClick={closeMenu} />

                <nav className="home-header__nav">
                    <NavLinks closeMenu={closeMenu} isActive={isActive} />
                </nav>

                <div className="home-header__actions">
                    <Link to="/login" className="home-header__login-btn">
                        Login
                    </Link>
                </div>

                <button
                    className={`home-header__hamburger ${isMenuOpen ? 'home-header__hamburger--open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Overlay/Drawer */}
            <div className={`home-header__mobile-drawer ${isMenuOpen ? 'home-header__mobile-drawer--open' : ''}`}>
                <div className="home-header__mobile-content">
                    <nav className="home-header__mobile-nav">
                        <NavLinks closeMenu={closeMenu} isActive={isActive} />
                    </nav>
                    <div className="home-header__mobile-actions">
                        <Link to="/login" onClick={closeMenu} className="home-header__login-btn">
                            Login
                        </Link>
                    </div>
                </div>
            </div>

            {/* Backdrop */}
            {isMenuOpen && (
                <div className="home-header__backdrop" onClick={closeMenu}></div>
            )}
        </header>
    );
};

export default HomeHeader;
