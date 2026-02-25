import React, { useState, useEffect, useRef } from 'react';
import './CategoryNav.scss';

interface CategoryNavProps {
    categories: string[];
    activeCategory: string;
    onCategoryClick: (category: string) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ categories, activeCategory, onCategoryClick }) => {
    const [isSticky, setIsSticky] = useState(false);
    const [staticHeight, setStaticHeight] = useState(0);
    const navRef = useRef<HTMLDivElement>(null);
    const placeholderRef = useRef<HTMLDivElement>(null);

    // Capture the static height of the vertical list to prevent page jumps when sticking
    useEffect(() => {
        if (!isSticky && navRef.current) {
            setStaticHeight(navRef.current.offsetHeight);
        }
    }, [isSticky, categories]);

    useEffect(() => {
        const handleScroll = () => {
            const currentNav = navRef.current;
            const currentPlaceholder = placeholderRef.current;

            if (currentNav && currentPlaceholder) {
                const headerHeight = 80;

                if (!isSticky) {
                    const navRect = currentNav.getBoundingClientRect();
                    // Stick when the BOTTOM of the list scrolls up past the navbar
                    if (navRect.bottom <= headerHeight) {
                        setIsSticky(true);
                    }
                } else {
                    const placeholderRect = currentPlaceholder.getBoundingClientRect();
                    // Unstick as soon as the BOTTOM of the vertical list area
                    // scrolls back down past the navbar. This makes the list "emerge" from the top.
                    if (placeholderRect.bottom > headerHeight) {
                        setIsSticky(false);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isSticky]);

    return (
        <>
            {/* Placeholder to maintain layout when nav becomes sticky */}
            <div
                ref={placeholderRef}
                className="category-nav-placeholder"
                style={{ height: isSticky ? `${staticHeight}px` : '0' }}
            ></div>

            <div
                ref={navRef}
                className={`category-nav ${isSticky ? 'category-nav--sticky' : ''}`}
            >
                <div className="category-nav__container">
                    {!isSticky && <h2 className="category-nav__title">Menu Categories</h2>}
                    <ul className="category-nav__list">
                        {categories.map((category) => (
                            <li key={category} className="category-nav__item">
                                <button
                                    className={`category-nav__link ${activeCategory === category ? 'category-nav__link--active' : ''}`}
                                    onClick={() => onCategoryClick(category)}
                                >
                                    {category}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CategoryNav;
