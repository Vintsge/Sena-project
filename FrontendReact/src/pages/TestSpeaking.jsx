import './TestSpeaking.css';
import Graytainer from '../components/Graytainer';
import ArrowLeft from '../assets/arrow-left.svg';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Boton from '../components/Boton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons';
import Reloj from '../assets/clock.svg';
import Escudo from '../assets/shield.svg';
import Volumen from '../assets/volume.svg';
import Mic from '../assets/mic.svg';

function TestSpeaking() {

  const navigate = useNavigate();
  const TIEMPO_MINUTOS = 10;
  const [tiempoRestante, setTiempoRestante] = useState(TIEMPO_MINUTOS * 60);
  // Solo estado visual: aquí puedes enganchar tu lógica real de grabación (MediaRecorder)
  const [grabando, setGrabando] = useState(false);

  useEffect(() => {
    if (tiempoRestante <= 0) return;
    const temporizador = setInterval(() => {
      setTiempoRestante(prev => prev - 1);
    }, 1000);
    return () => clearInterval(temporizador);
  }, [tiempoRestante]);

  const terminarTest = () => navigate('/analisis-habla', { replace: true });

  // Al llegar a 0:00 la prueba termina sola
  useEffect(() => {
    if (tiempoRestante <= 0) navigate('/analisis-habla', { replace: true });
  }, [tiempoRestante, navigate]);

  const minutos = Math.floor(tiempoRestante / 60);
  const segundos = tiempoRestante % 60;
  const tiempoFormateado = `${minutos}:${segundos.toString().padStart(2, '0')}`;
  const clasePocoTiempo = tiempoRestante <= 120 ? 'poco-tiempo' : '';

  return (
    <div className="test-speaking">
      <div className="header">
        <button
          type="button"
          className="arrow-left-icon"
          aria-label="Volver"
          onClick={() => navigate('/select-speaking')}
        >
          <img src={ArrowLeft} alt="" />
        </button>

        <div className="header-left">
          <div className="title-row">
            <h1>Test Habla</h1>
          </div>
          <p className="subtitulo">Invitation Message</p>
        </div>

        <div className={`timer ${clasePocoTiempo}`} role="timer">
          <span className="icono-reloj">
            <img src={Reloj} alt="Reloj" />
          </span>
          {tiempoRestante > 0 ? tiempoFormateado : '0:00'}
        </div>
      </div>

      <div className="test-instructions">
        <h3>Instrucciones</h3>
        <p>
          Durante 60 segundos, nombra en voz alta tantos animales como puedas, sin repetir ninguno. Intenta mantener un ritmo constante.
        </p>
        <Graytainer className="tips-container">
          <h3>Tips:</h3>
          <p>Hable con claridad, evite el ruido y mantenga un ritmo natural.</p>
        </Graytainer>
      </div>

      <div className="audio-invitation">
        <img src={Volumen} alt="" className="vol-icon" />
        <h3>Grabe su audio</h3>
      </div>

      <div className="audio-recorder">
        <button
          type="button"
          className={`recorder-button ${grabando ? 'grabando' : ''}`}
          onClick={() => setGrabando((g) => !g)}
          aria-pressed={grabando}
          aria-label={grabando ? 'Detener grabación' : 'Iniciar grabación'}
        >
          <img src={Mic} alt="" />
        </button>
        <p aria-live="polite">
          {grabando
            ? 'Grabando... presione el botón para detener.'
            : 'Presione el botón para grabar su respuesta.'}
        </p>
      </div>

      <div className="botones">
        <Boton id="btn-guardar">
          <FontAwesomeIcon icon={faFloppyDisk} style={{ color: "#ffffff" }} />
          Guardar Borrador
        </Boton>
        <Boton id="btn-enviar" onClick={terminarTest}>
          <FontAwesomeIcon icon={faCheck} style={{ color: "#ffffff" }} />
          Terminar Test
        </Boton>
      </div>

      <footer className="footer-test">
        <div className="footer-item">
          <img src={Reloj} alt="Reloj" className="footer-icon" />
          <p>Est. 10min</p>
        </div>

        <div className="footer-item">
          <img src={Escudo} alt="Escudo" className="footer-icon" />
          <p>Secure & Private</p>
        </div>
      </footer>
    </div>
  );
}

export default TestSpeaking;