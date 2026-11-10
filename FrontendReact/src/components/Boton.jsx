import './Boton.css';

// ...props reenvía onClick, disabled, aria-*, etc. al <button>
function Boton({ children, className = '', id, type = 'button', ...props }) {
  return (
    <button id={id} className={`button ${className}`} type={type} {...props}>
      {children}
    </button>
  );
}

export default Boton;