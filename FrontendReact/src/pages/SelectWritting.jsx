import './SelectWritting.css';
import Graytainer from '../components/Graytainer';
import Email from '../assets/mail.svg';
import Calendar from '../assets/calendar.svg';
import Image from '../assets/image.svg';
import Grammar from '../assets/spell.svg';
import Arrow from '../assets/arrow-right.svg';
import ArrowLeft from '../assets/arrow-left.svg';
import Boton from '../components/Boton';

function SelectSpeaking() {
  return (
    <div className="select-speaking">
      <div className="header">
        <i className="arrow-left-icon">
          <img src={ArrowLeft} alt="Flecha izquierda" />
        </i>
        <h1>Seleccione una prueba de escritura</h1>
        <p>Elige una de las siguientes tareas de escritura para comenzar.</p>
      </div>
      <div className="options">
        <Graytainer image={Email} reverse={true}>
          <div className="texto_container">
            <p className="titles">Invitacion</p>
            <p className="description">Redacte una invitación detallada para cualquier evento.</p>
          </div>
            <i className="arrow-icon">
              <img src={Arrow} alt="Flecha" />
            </i>
        </Graytainer>
        <Graytainer image={Calendar} reverse={true}>
          <div className="texto_container">
            <p className="titles">Recuerda de Memoria</p>
            <p className="description">Describa su ultimo cumpleaños o dia especial. </p>
          </div>
            <i className="arrow-icon">
              <img src={Arrow} alt="Flecha" />
            </i>
        </Graytainer>        
        <Graytainer image={Image} reverse={true}>
          <div className="texto_container">
            <p className="titles">Describa una Imagen</p>
            <p className="description">Describa la  imagen que se le presenta.</p>
          </div>
            <i className="arrow-icon">
              <img src={Arrow} alt="Flecha" />
            </i>
        </Graytainer>        
        <Graytainer image={Grammar} reverse={true}>
          <div className="texto_container">
            <p className="titles">Quiz Gramatical</p>
            <p className="description">Corrija un texto con errores. </p>
          </div>
            <i className="arrow-icon">
              <img src={Arrow} alt="Flecha" />
            </i>
        </Graytainer>
        <div className="button-container">
          <Boton type="submit" id="signup-button">
            Volver
          </Boton>
        </div>
      </div>
    </div>
  );
}

export default SelectSpeaking;