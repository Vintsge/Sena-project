import './SelectWritting.css';
import { useNavigate } from 'react-router-dom';
import Graytainer from '../components/Graytainer';
import CardLink from '../components/CardLink';
import Email from '../assets/mail.svg';
import Calendar from '../assets/calendar.svg';
import Image from '../assets/image.svg';
import Grammar from '../assets/spell.svg';
import Arrow from '../assets/arrow-right.svg';
import ArrowLeft from '../assets/arrow-left.svg';
import Boton from '../components/Boton';

function SelectWritting() {
  const navigate = useNavigate();

  return (
    <div className="select-writting">
      <div className="header">
        <button
          type="button"
          className="arrow-left-icon"
          aria-label="Volver"
          onClick={() => navigate('/menu')}
        >
          <img src={ArrowLeft} alt="" />
        </button>
        <h1>Seleccione una prueba de escritura</h1>
        <p>Elige una de las siguientes tareas de escritura para comenzar.</p>
      </div>
      <div className="options">
        <CardLink to="/test-writting" state={{ tipo: 'invitacion' }}>
          <Graytainer image={Email} reverse={true}>
            <div className="texto_container">
              <p className="titles">Invitación</p>
              <p className="description">Redacte una invitación detallada para cualquier evento.</p>
            </div>
            <i className="arrow-icon">
              <img src={Arrow} alt="" />
            </i>
          </Graytainer>
        </CardLink>
        <CardLink to="/test-writting" state={{ tipo: 'recuerdo' }}>
          <Graytainer image={Calendar} reverse={true}>
            <div className="texto_container">
              <p className="titles">Recuerdo de Memoria</p>
              <p className="description">Describa su último cumpleaños o día especial.</p>
            </div>
            <i className="arrow-icon">
              <img src={Arrow} alt="" />
            </i>
          </Graytainer>
        </CardLink>
        <CardLink to="/test-writting" state={{ tipo: 'imagen' }}>
          <Graytainer image={Image} reverse={true}>
            <div className="texto_container">
              <p className="titles">Describa una Imagen</p>
              <p className="description">Describa la imagen que se le presenta.</p>
            </div>
            <i className="arrow-icon">
              <img src={Arrow} alt="" />
            </i>
          </Graytainer>
        </CardLink>
        <CardLink to="/test-writting" state={{ tipo: 'gramatica' }}>
          <Graytainer image={Grammar} reverse={true}>
            <div className="texto_container">
              <p className="titles">Quiz Gramatical</p>
              <p className="description">Corrija un texto con errores.</p>
            </div>
            <i className="arrow-icon">
              <img src={Arrow} alt="" />
            </i>
          </Graytainer>
        </CardLink>
        <div className="button-container">
          <Boton type="button" id="volver-button" onClick={() => navigate('/menu')}>
            Volver
          </Boton>
        </div>
      </div>
    </div>
  );
}

export default SelectWritting;