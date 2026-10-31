import './Historial.css';
import DownFilter from '../assets/filter-down.svg';
import UpFilter from '../assets/filter-up.svg';
import Inicio from '../assets/house.svg';
import History from '../assets/history.svg';
import User from '../assets/perfilUser.svg';
import { useState, useRef, useEffect } from "react";

function SortFilter({ sort, onSortChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="sort-wrapper" ref={ref}>
      <button
        className="sort-btn"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <img src={DownFilter} alt="Ordenar" />
      </button>

      {open && (
        <div className="sort-dropdown">
          <button
            className={`sort-option ${sort === "recent" ? "active" : ""}`}
            onClick={() => { onSortChange("recent"); setOpen(false); }}
          >
            <img src={DownFilter} alt="" className="sort-ico" />
            Más Reciente
          </button>
          <button
            className={`sort-option ${sort === "oldest" ? "active" : ""}`}
            onClick={() => { onSortChange("oldest"); setOpen(false); }}
          >
            <img src={UpFilter} alt="" className="sort-ico" />
            Menos Reciente
          </button>
        </div>
      )}
    </div>
  );
}

const pruebasIniciales = [
  { id: 1, titulo: "Prueba 1", descripcion: "Descripción de la prueba", fecha: "2023-01-01" },
  { id: 2, titulo: "Prueba 2", descripcion: "Descripción de la prueba", fecha: "2023-01-02" },
  { id: 3, titulo: "Prueba 3", descripcion: "Descripción de la prueba", fecha: "2023-01-03" },
  { id: 4, titulo: "Prueba 4", descripcion: "Descripción de la prueba", fecha: "2023-01-10" },
  { id: 5, titulo: "Prueba 5", descripcion: "Descripción de la prueba", fecha: "2023-01-22" },
  { id: 6, titulo: "Prueba 6", descripcion: "Descripción de la prueba", fecha: "2023-02-3" },
];

function Historial() {
  const [sort, setSort] = useState("recent");

  const pruebas = [...pruebasIniciales].sort((a, b) =>
    sort === "recent"
      ? new Date(b.fecha) - new Date(a.fecha)
      : new Date(a.fecha) - new Date(b.fecha)
  );

  return (
    <div className="historial">
        <div className=''>
            <h1>Historial de Pruebas</h1>
            <p>Aquí puedes ver el historial de tus pruebas realizadas.</p>
        </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Titulo de la prueba</th>
              <th>
                Fecha/Hora
                <SortFilter sort={sort} onSortChange={setSort} />
              </th>
            </tr>
          </thead>
          <tbody>
            {pruebas.map((p) => (
              <tr key={p.id}>
                <td>
                  {p.titulo}
                  <p>{p.descripcion}</p>
                </td>
                <td>{p.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    <footer className='toolbar-container'>
        <hr />
        <div className='toolsBar'>
            <div className='iconBar'>
                <img src = {Inicio} alt="Home page"/>
                <p>Inicio</p>
            </div>
            <div className='iconBar'>
                <img src= {History} alt="Historial" /> 
                <p>Historial</p>
            </div>
            <div className='iconBar'>
                <img src={User} alt="Perfil" />
                <p>Perfil</p>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default Historial;