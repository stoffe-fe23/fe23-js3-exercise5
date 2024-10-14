import { NavLink } from 'react-router-dom';

export default function NavMenu() {

    return (
        <nav>
            <NavLink to="/" className={({ isActive }) => isActive ? "menu-active" : undefined}>Hem</NavLink>
            <NavLink to="/counter/" className={({ isActive }) => isActive ? "menu-active" : undefined}>Räknare</NavLink>
            <NavLink to="/timer/" className={({ isActive }) => isActive ? "menu-active" : undefined}>Timer</NavLink>
        </nav>
    );
}