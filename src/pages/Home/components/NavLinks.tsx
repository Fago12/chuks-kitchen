import React from 'react';
import { Link } from 'react-router';

interface NavLinksProps {
    closeMenu: () => void;
    isActive: (path: string) => boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ closeMenu, isActive }) => (
    <ul className="home-header__nav-list">
        <li>
            <Link to="/home" onClick={closeMenu} className={`home-header__nav-link ${isActive('/home') ? 'home-header__nav-link--active' : ''}`}>
                Home
            </Link>
        </li>
        <li>
            <Link to="/explore" onClick={closeMenu} className={`home-header__nav-link ${isActive('/explore') ? 'home-header__nav-link--active' : ''}`}>
                Explore
            </Link>
        </li>
        <li>
            <Link to="/orders" onClick={closeMenu} className={`home-header__nav-link ${isActive('/orders') ? 'home-header__nav-link--active' : ''}`}>
                My Orders
            </Link>
        </li>
        <li>
            <Link to="/account" onClick={closeMenu} className="home-header__nav-link">Account</Link>
        </li>
    </ul>
);

export default NavLinks;
