
import './Graytainer.css';

function Graytainer({ image, children, reverse, className = '' }) {
  return (
    <div className={`graytainer ${reverse ? 'reverse' : ''} ${className}`}>
      {children}
      {image && <img src={image} alt="" className="Icon" />}
    </div>
  );
}

export default Graytainer;
