import './SpeakingAnalysis.css'
import { useNavigate } from 'react-router-dom';
import ArrowLeft from '../assets/arrow-left.svg';
import Alert from '../assets/alert.svg'
import Right from '../assets/arrow-right.svg'
import Boton from '../components/Boton';

// Puntos del gráfico en el sistema de coordenadas del SVG (400 x 200)
const PUNTOS = [
  { x: 0, y: 150 },
  { x: 67, y: 133 },
  { x: 133, y: 100 },
  { x: 200, y: 83 },
  { x: 267, y: 117 },
  { x: 333, y: 100 },
  { x: 400, y: 83 },
];

const LINEA = PUNTOS.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
const AREA = `${LINEA} L 400 200 L 0 200 Z`;

function SpeakingAnalysis() {
  const navigate = useNavigate();

  return (
    <div className="speaking-analysis">
      <div className="headerAnalysis">
        <button
          type="button"
          className="arrow-left-icon"
          aria-label="Volver"
          onClick={() => navigate('/menu')}
        >
          <img src={ArrowLeft} alt="" />
        </button>
        <div className="header-left">
          <div className="title-row">
            <h1>Análisis de Llamada</h1>
          </div>
          <p className="subtitulo">Duración: 1m 35s</p>
        </div>
      </div>

      <div className="contenido-analisis">
        <div className="fila-doble">
          <div className="tarjeta">
            <p className="etiqueta-meta">Velocidad</p>
            <p className="valor-principal">2.3</p>
            <p className="comparacion">Palabras por segundo <span className="aumento">+2</span></p>
          </div>
          <div className="tarjeta">
            <p className="etiqueta-meta">Pronunciación</p>
            <p className="valor-principal">4.5</p>
            <p className="comparacion">Vs última sesión <span className="reduccion">-2</span></p>
          </div>
        </div>

        {/* Gráfico Pausas Largas */}
        <div className="tarjeta tarjeta-ancha">
          <div className="encabezado-grafico">
            <h3>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 3v18h18" />
                <path d="M18 9l-5 5-4-4-4 4" />
              </svg>
              Pausas Largas
            </h3>
            <span className="numero-resaltado">1</span>
          </div>

          <div className="contenedor-grafico">
            <div className="rotulo-eje-y">Pausas</div>
            <div className="eje-y" aria-hidden="true">
              <span>4</span>
              <span>3</span>
              <span>2</span>
              <span>1</span>
              <span>0</span>
            </div>
            <div className="area-grafico">
              <svg
                viewBox="0 0 400 200"
                preserveAspectRatio="none"
                role="img"
                aria-label="Cantidad de pausas largas entre 0 y 4, durante 0 a 180 segundos"
              >
                <defs>
                  <linearGradient id="habla-linea" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="400" y2="0">
                    <stop offset="0%" stopColor="#6704E8" />
                    <stop offset="100%" stopColor="#1883BD" />
                  </linearGradient>
                  <linearGradient id="habla-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6704E8" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#1883BD" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Rejilla */}
                {[0, 50, 100, 150, 200].map((y) => (
                  <line
                    key={y}
                    x1="0" y1={y} x2="400" y2={y}
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                  />
                ))}

                {/* Área sombreada */}
                <path d={AREA} fill="url(#habla-area)" />

                {/* Línea */}
                <path
                  d={LINEA}
                  fill="none"
                  stroke="url(#habla-linea)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Puntos en HTML para que no se deformen con el SVG estirado */}
              {PUNTOS.map((p, i) => (
                <span
                  key={i}
                  className="punto"
                  style={{ left: `${(p.x / 400) * 100}%`, top: `${(p.y / 200) * 100}%` }}
                />
              ))}
            </div>
            <div className="etiquetas-eje-x">
              <span>0</span>
              <span>30</span>
              <span>60</span>
              <span>90</span>
              <span>120</span>
              <span>150</span>
              <span>180</span>
            </div>
          </div>
          <p className="etiqueta-eje-x-nombre">Tiempo (s)</p>
        </div>

        <div className="tarjeta tarjeta-ancha">
          <p className="etiqueta-meta">Detección de Patrones Cognitivos</p>
          <ul>
            <li>Aumento de las pausas después de 90 segundos</li>
            <li>Disminución de la velocidad del habla en un 18%</li>
            <li>Errores repetidos en palabras comunes</li>
          </ul>
        </div>

        <section className="tarjeta estado">
          <div className="estado-cabecera">
            <h3>Nivel de Riesgo</h3>
            <img src={Alert} alt="" aria-hidden="true" />
          </div>
          <div className="barra-niveles" role="img" aria-label="Nivel de riesgo: bajo">
            <div className="nivel">
              <div className="barra-fondo bajo">
                <div className="barra-llena"></div>
              </div>
              <span className="etiqueta activa">Low</span>
            </div>
            <div className="nivel">
              <div className="barra-fondo medio"></div>
              <span className="etiqueta">Medium</span>
            </div>
            <div className="nivel">
              <div className="barra-fondo alto"></div>
              <span className="etiqueta">High</span>
            </div>
          </div>
        </section>

        <div className="bloque-opcion recomendaciones">
          <div className="cabecera-recomendaciones">
            <h4>Recomendaciones</h4>
            <img src={Right} alt="" />
          </div>
          <p className="tituloReco">Título de la recomendación</p>
          <p className="descripcionReco">Descripción</p>
        </div>

        <div className="alerta">
          <img src={Alert} alt="Signo de alerta" />
          <p>Este análisis es orientativo y no sustituye la evaluación de un profesional. Para un diagnóstico preciso, consulte a un especialista.</p>
        </div>

        <div className="botones">
          <Boton id="email">
            Enviar vía Email
          </Boton>
          <Boton id="evaluacion" onClick={() => navigate('/select-speaking')}>
            Nueva Evaluación
          </Boton>
          <Boton id="atras" onClick={() => navigate('/menu')}>
            Atrás
          </Boton>
        </div>
      </div>
    </div>
  );
}

export default SpeakingAnalysis;