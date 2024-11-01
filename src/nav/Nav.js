import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/nav.css";

export default function Nav() {
    const location = useLocation();

    const getNavPositionClass = () => {
        switch (location.pathname) {
            case "/":
                return "nav-market";
            case "/buy":
                return "nav-buy";
            case "/sell":
                return "nav-sell";
            case "/profile":
                return "nav-profile";
            default:
                return "nav-market";
        }
    };

    const NavPositionClass = getNavPositionClass();

    const isCurrentPage = (navClass) => {
        return navClass === NavPositionClass;
    };

    const renderNavLink = (to, navClass, label) => {
        const isCurrent = isCurrentPage(navClass);
        const linkClass = isCurrent ? "nav-link current" : "nav-link";
    
        return (
            <Link to={to} className={linkClass}>
                {label}
            </Link>
        );
    };
    
    return (
        <nav className={`nav ${NavPositionClass}`}>
            {renderNavLink("/", "nav-market", "Market")}
            {renderNavLink("/buy", "nav-buy", "Buy")}
            {renderNavLink("/sell", "nav-sell", "Sell")}
            {renderNavLink("/profile", "nav-profile", "Profile")}
        </nav>
    );
}