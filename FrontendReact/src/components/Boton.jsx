
import './Boton.css';

function Boton({ children, className = '', id, type = 'button' }) {
  return (
    <button id={id} className={`button ${className}`} type={type}>
      {children}
    </button>
  );
}

export default Boton;
