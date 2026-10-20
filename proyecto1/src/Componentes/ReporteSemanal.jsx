// toño pestaña 3 

function ReporteSemanal({ gestor, actualizar }) {
  return (
    <div className="container mt-4">
      <h3 className="fw-bold text-primary">Reporte Semanal (Días Ocupados)</h3>
      <p className="text-muted">Marca la asistencia de los maestros a sus horarios reservados.</p>

      <div className="table-responsive shadow-sm rounded mt-3">
        <table className="table table-bordered mb-0 text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th>Día</th>
              <th>Horario</th>
              <th>Laboratorio</th>
              <th>Maestro</th>
              <th>¿Asistió?</th>
            </tr>
          </thead>
          <tbody>
            {gestor.reservas.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-muted py-4">
                  No hay reservas registradas aún.
                </td>
              </tr>
            ) : (
              gestor.reservas.map((r) => (
                <tr key={r.id}>
                  <td>{r.dia}</td>
                  <td>{r.horario}</td>
                  <td>Laboratorio {r.laboratorio}</td>
                  <td>{r.maestro}</td>
                  <td>
                    <button
                      className={`btn btn-sm me-2 ${r.asistio === true ? "btn-success" : "btn-outline-success"}`}
                      onClick={() => {
                        gestor.marcarAsistencia(r.id, true);
                        actualizar();
                      }}
                    >
                      
                    </button>
                    <button
                      className={`btn btn-sm ${r.asistio === false ? "btn-danger" : "btn-outline-danger"}`}
                      onClick={() => {
                        gestor.marcarAsistencia(r.id, false);
                        actualizar();
                      }}
                    >
                      
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReporteSemanal;
