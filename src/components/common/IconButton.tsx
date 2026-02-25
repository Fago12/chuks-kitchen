import React from 'react';
import './IconButton.scss';

interface IconButtonProps {
    onClick: (e: React.MouseEvent) => void;
    icon: 'plus' | 'minus';
    ariaLabel: string;
    className?: string;
    size?: 'small' | 'medium' | 'large';
}

const IconButton: React.FC<IconButtonProps> = ({
    onClick,
    icon,
    ariaLabel,
    className = '',
    size = 'medium'
}) => {
    return (
        <button
            className={`icon-button icon-button--${icon} icon-button--${size} ${className}`}
            onClick={onClick}
            aria-label={ariaLabel}
        >
            <span className="icon-button__icon"></span>
        </button>
    );
};

export default IconButton;
