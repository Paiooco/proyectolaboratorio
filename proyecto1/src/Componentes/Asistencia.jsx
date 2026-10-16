const DIAS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

function Asistencia({ reservas, onMarcar }) {
  return (
    <div className="container my-4">
      <h2 className="fw-bold text-primary mb-4">Registro de Asistencia</h2>

      <div className="row g-3">
        {DIAS.map((dia) => (
          <div className="col-md-6 col-lg-4" key={dia}>
            <div className="card shadow-sm h-100">
              <div className="card-header bg-primary text-white fw-semibold">
                {dia}
              </div>
              <ul className="list-group list-group-flush">
                {reservas.map((r) => (
                  <li
                    key={r.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <div className="fw-semibold">{r.maestro}</div>
                      <small className="text-muted">{r.nombrePractica}</small>
                    </div>
                    <div className="d-flex gap-1">
                      <button
                        className="btn btn-sm btn-success"
                        onClick={() => onMarcar(r.id, "asistio")}
                        title="Asistió"
                      >
                        ✅
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => onMarcar(r.id, "falto")}
                        title="Faltó"
                      >
                        ❌
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Asistencia;