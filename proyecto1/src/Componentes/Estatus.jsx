//tania pestaña 4 


function Estatus({ gestor }) {
  if (!gestor || !gestor.dias) return <p>Cargando...</p>;

  const conteo = {};
  gestor.dias.forEach((d) => { conteo[d] = 0; });
  
  if (gestor.reservas) {
    gestor.reservas.forEach((r) => {
      if (conteo[r.dia] !== undefined) conteo[r.dia]++;
    });
  }

  return (
    <div className="container mt-4">
      <h3 className="fw-bold text-primary">Estatus: Días más ocupados</h3>

      <div className="card shadow-sm p-4 mt-4">
        {gestor.dias.map((dia) => {
          const porcentaje = (conteo[dia] / 4) * 100;

          return (
            <div key={dia} className="mb-3">
              <div className="d-flex justify-content-between fw-semibold">
                <span>{dia}</span>
                <span>{conteo[dia]} / 4 cupos</span>
              </div>
              <div className="progress mt-1" style={{ height: "22px" }}>
                <div
                  className={`progress-bar ${porcentaje === 100 ? "bg-danger" : "bg-info"}`}
                  style={{ width: `${porcentaje}%` }}
                >
                  {porcentaje}%
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Estatus;