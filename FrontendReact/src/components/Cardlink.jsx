import { Link } from 'react-router-dom';
import './Cardlink.css';

// Envuelve un <Graytainer> para convertirlo en enlace sin tocar el componente Graytainer.
function CardLink({ to, state, children }) {
  return (
    <Link to={to} state={state} className="card-link">
      {children}
    </Link>
  );
}

export default CardLink;