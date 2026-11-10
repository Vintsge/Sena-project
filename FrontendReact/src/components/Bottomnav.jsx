import { NavLink } from 'react-router-dom';
import './Bottomnav.css';
import Inicio from '../assets/house.svg';
import History from '../assets/history.svg';
import User from '../assets/perfilUser.svg';

const ITEMS = [
  { to: '/menu', label: 'Inicio', icon: Inicio },
  { to: '/historial', label: 'Historial', icon: History },
  { to: '/perfil', label: 'Perfil', icon: User },
];

// Barra inferior compartida. NavLink añade la clase "active" a la ruta actual.
function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Navegación principal">
      {ITEMS.map(({ to, label, icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => `bottom-nav__item${isActive ? ' active' : ''}`}
        >
          <img src={icon} alt="" />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default BottomNav;