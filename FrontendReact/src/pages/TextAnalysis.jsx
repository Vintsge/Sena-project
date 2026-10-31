import './TextAnalysis.css';
import ArrowLeft from '../assets/arrow-left.svg';
import Alert from '../assets/alert.svg'
import Right from '../assets/arrow-right.svg'
import Boton from '../components/Boton';

function TextAnalysis() {
  return (
    <div className="text-Analysis">
      {/* Cabecera — TU estructura intacta */}
      <div className="headerAnalysis">
        <i className="arrow-left-icon">
          <img src={ArrowLeft} alt="Flecha izquierda" />
        </i>
        <div className="header-left">
          <div className="title-row">
            <h1>Análisis de Test de Escritura</h1>
          </div>
          <p className="subtitulo">Duración: 0:00</p>
        </div>
      </div>

      {/* Contenido recreado */}
      <div className="contenido-analisis">
        {/* Velocidad de escritura */}
        <div className="tarjeta tarjeta-ancha">
          <p className="etiqueta-meta">Velocidad de escritura</p>
          <p className="valor-principal">42 <span className="unidad">WPM</span></p>
          <p className="comparacion">Vs última sesión <span className="positivo">+2%</span></p>
        </div>

        {/* Errores en fila */}
        <div className="fila-doble">
          <div className="tarjeta">
            <p className="etiqueta-meta">Errores de ortografía</p>
            <p className="valor-principal">11</p>
            <p className="comparacion">Vs última sesión <span className="aumento">+2</span></p>
          </div>
          <div className="tarjeta">
            <p className="etiqueta-meta">Errores gramaticales</p>
            <p className="valor-principal">6</p>
            <p className="comparacion">Vs última sesión <span className="reduccion">-2</span></p>
          </div>
        </div>

        {/* Gráfico Pausas Largas */}
        <div className="tarjeta tarjeta-ancha">
          <div className="encabezado-grafico">
            <h3>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                {/* Rejilla */}
                <line x1="0" y1="0" x2="400" y2="0" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <line x1="0" y1="200" x2="400" y2="200" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                
                {/* Área sombreada */}
                <path
                  d="M 0 150 L 67 133 L 133 100 L 200 83 L 267 117 L 333 100 L 400 83 L 400 200 L 0 200 Z"
                  fill="rgba(59, 130, 246, 0.1)"
                />
                
                {/* Línea azul */}
                <path
                  d="M 0 150 L 67 133 L 133 100 L 200 83 L 267 117 L 333 100 L 400 83"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* Puntos */}
                {[
                  { x: 0, y: 150 },
                  { x: 67, y: 133 },
                  { x: 133, y: 100 },
                  { x: 200, y: 83 },
                  { x: 267, y: 117 },
                  { x: 333, y: 100 },
                  { x: 400, y: 83 },
                ].map((p, i) => (
                  <circle key={i} cx={p.x} cy={p.y} r="5" fill="#3b82f6" />
                ))}
              </svg>
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
          <p className="etiqueta-meta">Deteccion de Patrones Cognitivos</p>
          <ul>
            <li>
                Aumento de las pausas después de 90 segundos
            </li>
            <li>
                Disminución de la velocidad de escritura en un 18%
            </li>
            <li>
                Errores repetidos en palabras comunes
            </li>
          </ul>
        </div>

        <section className="tarjeta estado">
          <div className="estado-cabecera">
            <h3>Nivel de Riesgo</h3>
            <img src={Alert} alt="" aria-hidden="true" />
          </div>
          <div className="barra-niveles">
            <div className="nivel">
              <div className="barra-fondo bajo">
                <div className="barra-llena"></div>
              </div>
              <span className="etiqueta">Low</span>
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
              <img src={Right} alt="Flecha derecha" />
            </div>
          <p className='tituloReco'>Titulo Recomendacion</p>
          <p className='descripcionReco'>Descripcion</p>
          </div>
      </div>
      <div className='alerta'>
        <img src={Alert} alt="Signo Alerta" />
        <p>Este análisis es orientativo y no sustituye la evaluación de un profesional. Para un diagnóstico preciso, consulte a un especialista.</p>
      </div>

      <div className='botones'>
        <Boton id='email'>
            Enviar Via Email
        </Boton>
        <Boton id = 'evaluacion'>
            Nueva Evaluación
        </Boton>
        <Boton id = 'atras'>
            Atras
        </Boton>

        <hr />
      </div>
    </div>
  );
}

export default TextAnalysis;