import './Perfil.css';
import Inicio from '../assets/house.svg';
import History from '../assets/history.svg';
import User from '../assets/perfilUser.svg';
import { useState } from 'react';
import Right from '../assets/arrow-right.svg'

const progreso = [
  { mes: 1, valor: 2 },
  { mes: 2, valor: 3 },
  { mes: 3, valor: 1 },
  { mes: 4, valor: 4 },
  { mes: 5, valor: 3 },
  { mes: 6, valor: 2 },
  { mes: 7, valor: 3 },
];

function Perfil() {
  return (
    <div className="perfil-pagina">
      <div className="contenedor-centrado">
        {/* Tarjeta de Usuario */}
        <section className="tarjeta usuario">
          <div className="avatar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <h2>Nombre</h2>
          <p className="edad">45 Años</p>
        </section>

        {/* Estado Actual */}
        <section className="tarjeta estado">
          <h3>Estado Actual</h3>
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
          <p className="estado-texto">• Tu estado cognitivo es estable</p>
        </section>

        {/* Gráfico de Progreso */}
        <section className="tarjeta progreso">
          <h3>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3v18h18" />
              <path d="M18 9l-5 5-4-4-4 4" />
            </svg>
            Progreso
          </h3>
          <div className="grafico-wrapper">
            <div className="eje-vertical">Veces</div>
            <div className="grafico-area">
              <div className="rejilla">
                {[0, 1, 2, 3].map(i => (
                  <div key={i} className="linea-rejilla" style={{ top: `${i * 25}%` }} />
                ))}
              </div>
              <svg className="linea-grafico" viewBox="0 0 600 200" preserveAspectRatio="xMidYMid meet">
                <path
                  d="M 50 150 L 133 100 L 216 175 L 300 25 L 383 75 L 466 125 L 550 75"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {[
                  { x: 50, y: 150 },
                  { x: 133, y: 100 },
                  { x: 216, y: 175 },
                  { x: 300, y: 25 },
                  { x: 383, y: 75 },
                  { x: 466, y: 125 },
                  { x: 550, y: 75 },
                ].map((p, i) => (
                  <g key={i}>
                    <circle cx={p.x} cy={p.y} r="10" fill="#0f172a" stroke="#3b82f6" strokeWidth="3" />
                    <circle cx={p.x} cy={p.y} r="5" fill="#3b82f6" />
                  </g>
                ))}
              </svg>
              <div className="etiquetas-meses">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
              </div>
              <div className="etiqueta-eje-x">Meses</div>
            </div>
          </div>
          <p className="ultima-prueba">• Última prueba realizada: 7 días atrás</p>
        </section>

        {/* Salud */}
        <section className="seccion">
          <h2 className="titulo-seccion">Salud</h2>
          <div className="bloque-opcion">
            <div>
              <h4>Historial Familiar</h4>
              <p className="valor">None yet</p>
            </div>
            <button className="btn-agregar">Add +</button>
          </div>
          <div className="bloque-opcion">
            <div>
              <h4>Condiciones</h4>
              <p className="valor">None yet</p>
            </div>
            <button className="btn-agregar">Add +</button>
          </div>
          <div className="bloque-opcion recomendaciones">
            <div className="cabecera-recomendaciones">
              <h4>Tus recomendaciones</h4>
              <img src={Right} alt="Flecha derecha" />
            </div>
            <ul>
              <li>Vestibulum sit amet ultrices dolor.</li>
              <li>Donec neque elit, hendrerit vitae.</li>
              <li>Pellentesque suscipit erat eu.</li>
            </ul>
          </div>
        </section>

        {/* Configuración */}
        <section className="seccion">
          <h2 className="titulo-seccion">Configuración</h2>
          <button className="opcion-menu">
            <span className="icono">🔔</span> Notificaciones
          </button>
          <button className="opcion-menu">
            <span className="icono">🔒</span> Privacidad
          </button>
          <button className="opcion-menu">
            <span className="icono">🌐</span> Idioma
          </button>
          <button className="opcion-menu">
            <span className="icono">↗</span> Cerrar Sesión
          </button>
          <button className="opcion-menu peligro">
            <span className="icono">🗑</span> Borrar Cuenta
          </button>
        </section>

        <div className="espacio-final"></div>
      </div>

      {/* Barra de navegación — ESTRUCTURA ORIGINAL */}
      <footer className="toolbar-container">
        <hr />
        <div className="toolsBar">
          <div className="iconBar">
            <img src={Inicio} alt="Home page"/>
            <p>Inicio</p>
          </div>
          <div className="iconBar">
            <img src={History} alt="Historial" /> 
            <p>Historial</p>
          </div>
          <div className="iconBar activo">
            <img src={User} alt="Perfil" />
            <p>Perfil</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Perfil;