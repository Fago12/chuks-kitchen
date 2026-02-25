import React from 'react';

interface SimplePageShellProps {
    children: React.ReactNode;
}

const SimplePageShell: React.FC<SimplePageShellProps> = ({ children }) => {
    return (
        <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
            {children}
        </div>
    );
};

export default SimplePageShell;
