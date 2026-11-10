import './TestWritting.css';
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

const MAX_CARACTERES = 1000;

function TestWritting() {
  const navigate = useNavigate();
  const TIEMPO_MINUTOS = 10;
  const [tiempoRestante, setTiempoRestante] = useState(TIEMPO_MINUTOS * 60);
  const [texto, setTexto] = useState('');

  useEffect(() => {
    if (tiempoRestante <= 0) return;
    const temporizador = setInterval(() => {
      setTiempoRestante(prev => prev - 1);
    }, 1000);
    return () => clearInterval(temporizador);
  }, [tiempoRestante]);

  const terminarTest = () => navigate('/analisis-escritura', { replace: true });

  // Al llegar a 0:00 la prueba termina sola
  useEffect(() => {
    if (tiempoRestante <= 0) navigate('/analisis-escritura', { replace: true });
  }, [tiempoRestante, navigate]);

  const minutos = Math.floor(tiempoRestante / 60);
  const segundos = tiempoRestante % 60;
  const tiempoFormateado = `${minutos}:${segundos.toString().padStart(2, '0')}`;
  const clasePocoTiempo = tiempoRestante <= 120 ? 'poco-tiempo' : '';
  const claseLimite = texto.length >= MAX_CARACTERES * 0.9 ? 'cerca-limite' : '';

  return (
    <div className="test-writting">
      <div className="header">
        <button
          type="button"
          className="arrow-left-icon"
          aria-label="Volver"
          onClick={() => navigate('/select-writting')}
        >
          <img src={ArrowLeft} alt="" />
        </button>

        <div className="header-left">
          <div className="title-row">
            <h1>Test escritura</h1>
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
          Escriba un mensaje invitando a un amigo o familiar a cenar este fin de semana.
          Sé lo más detallado posible.
        </p>
        <Graytainer className="tips-container">
          <h3>Tips:</h3>
          <p>Incluya detalles como la hora, el lugar y cualquier otra información relevante para que la invitación sea clara y atractiva.</p>
        </Graytainer>
        <Graytainer className="textarea-container">
          <textarea
            className="textarea"
            placeholder="Escriba su mensaje aquí..."
            maxLength={MAX_CARACTERES}
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
          <p className={`char-counter ${claseLimite}`}>
            {texto.length}/{MAX_CARACTERES}
          </p>
        </Graytainer>
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

export default TestWritting;