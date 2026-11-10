import './Historial.css';
import DownFilter from '../assets/filter-down.svg';
import UpFilter from '../assets/filter-up.svg';
import BottomNav from '../components/Bottomnav';
import { useState, useRef, useEffect } from "react";

function SortFilter({ sort, onSortChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className="sort-wrapper" ref={ref}>
      <button
        className={`sort-btn ${open ? "open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <img src={sort === "recent" ? DownFilter : UpFilter} alt="Ordenar" />
      </button>

      {open && (
        <div className="sort-dropdown">
          <button
            className={`sort-option ${sort === "recent" ? "active" : ""}`}
            onClick={() => { onSortChange("recent"); setOpen(false); }}
          >
            <img src={DownFilter} alt="" className="sort-ico" />
            Más reciente
          </button>
          <button
            className={`sort-option ${sort === "oldest" ? "active" : ""}`}
            onClick={() => { onSortChange("oldest"); setOpen(false); }}
          >
            <img src={UpFilter} alt="" className="sort-ico" />
            Menos reciente
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
  { id: 6, titulo: "Prueba 6", descripcion: "Descripción de la prueba", fecha: "2023-02-03" },
];

// Formatea "2023-02-03" como "3 feb 2023" (en UTC para evitar desfases de zona horaria)
const formatearFecha = (iso) =>
  new Date(iso).toLocaleDateString("es-CO", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

function Historial() {
  const [sort, setSort] = useState("recent");

  const pruebas = [...pruebasIniciales].sort((a, b) =>
    sort === "recent"
      ? new Date(b.fecha) - new Date(a.fecha)
      : new Date(a.fecha) - new Date(b.fecha)
  );

  return (
    <div className="historial">
      <header className="historial-header">
        <h1>Historial de Pruebas</h1>
        <p>Aquí puedes ver el historial de tus pruebas realizadas.</p>
        <span className="historial-count">{pruebas.length} pruebas</span>
      </header>

      <div className="historial-tabla">
        <table>
          <thead>
            <tr>
              <th>Título de la prueba</th>
              <th>
                <div className="th-fecha">
                  Fecha/Hora
                  <SortFilter sort={sort} onSortChange={setSort} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {pruebas.map((p, i) => (
              <tr key={p.id} style={{ "--i": i }}>
                <td>
                  {p.titulo}
                  <p>{p.descripcion}</p>
                </td>
                <td>
                  <time dateTime={p.fecha} className="fecha-chip">
                    {formatearFecha(p.fecha)}
                  </time>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <BottomNav />
    </div>
  );
}

export default Historial;