import React from 'react';

interface CopyrightProps {
    companyName: string;
    className?: string;
    showAllRights?: boolean;
}

const Copyright: React.FC<CopyrightProps> = ({
    companyName,
    className,
    showAllRights = false
}) => {
    const currentYear = new Date().getFullYear();

    return (
        <span className={className}>
            &copy; {currentYear} {companyName}.{showAllRights && ' All rights reserved.'}
        </span>
    );
};

export default Copyright;
