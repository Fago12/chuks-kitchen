import React from 'react';

const Header: React.FC = () => {
    return (
        <header className='onboarding__header'>
            <h1 className='onboarding__logo'>Chuks Kitchen</h1>
            <button className='onboarding__signin-btn'>Sign In</button>
        </header>
    );
};

export default Header;
