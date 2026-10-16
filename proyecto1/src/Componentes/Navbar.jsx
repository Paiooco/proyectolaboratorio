function Navbar({ sesion, vista, setVista, onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <span className="navbar-brand fw-bold">
          TecNM — Sistema de Reserva
        </span>

        <div className="d-flex align-items-center gap-3">
          <span className="text-white">
            👤 <strong>{sesion.usuario}</strong> ({sesion.rol})
          </span>
        </div>

        <div className="ms-auto d-flex gap-2">
          <button
            className={`btn btn-sm ${vista === "estado" ? "btn-light" : "btn-outline-light"}`}
            onClick={() => setVista("estado")}
          >
            Inicio
          </button>
          <button
            className={`btn btn-sm ${vista === "asistencia" ? "btn-light" : "btn-outline-light"}`}
            onClick={() => setVista("asistencia")}
          >
            Asistencia
          </button>

          {sesion.rol === "admin" && (
            <button
              className={`btn btn-sm ${vista === "admin" ? "btn-light" : "btn-outline-light"}`}
              onClick={() => setVista("admin")}
            >
              Admin
            </button>
          )}

          <button className="btn btn-sm btn-danger" onClick={onLogout}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;