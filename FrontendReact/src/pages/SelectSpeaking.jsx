import './SelectSpeaking.css';
import Graytainer from '../components/Graytainer';
import Apple from '../assets/apple.svg';
import List from '../assets/list.svg';
import Image from '../assets/image.svg';
import AudioLinear from '../assets/audio-lines.svg';
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
        <h1>Seleccione una prueba de habla</h1>
        <p>Elige una de las siguientes tareas de habla para comenzar.</p>
      </div>
      <div className="options">
        <Graytainer image={Apple} reverse={true}>
          <div className="texto_container">
            <p className="titles">Nombre Objetos</p>
            <p className="description">Nombre tantos objetos como sea posible en 60 segundos.</p>
          </div>
            <i className="arrow-icon">
              <img src={Arrow} alt="Flecha" />
            </i>
        </Graytainer>
        <Graytainer image={List} reverse={true}>
          <div className="texto_container">
            <p className="titles">Responda Preguntas</p>
            <p className="description">Responda preguntas faciles tan rapido como sea posible.</p>
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
        <Graytainer image={AudioLinear} reverse={true}>
          <div className="texto_container">
            <p className="titles">Describiendo</p>
            <p className="description">Describa algo de su vida.</p>
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