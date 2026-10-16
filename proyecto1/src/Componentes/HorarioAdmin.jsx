function HorarioAdmin({ laboratorios }) {
  const horas = [
    "08:00-09:00",
    "09:00-10:00",
    "10:00-11:00",
    "11:00-12:00",
    "12:00-13:00",
    "13:00-14:00",
    "15:00-16:00",
  ];
  const dias = ["Lun 20", "Mar 21", "Mié 22", "Jue 23", "Vie 24"];

  return (
    <div className="container my-4">
      <h2 className="fw-bold text-primary">Horario de Disponibilidad (Admin)</h2>
      <p className="text-muted">
        Administrando {laboratorios.length} laboratorios:{" "}
        {laboratorios.map((l) => l.nombre).join(", ")}
      </p>

      <div className="table-responsive shadow-sm rounded">
        <table className="table table-bordered align-middle mb-0">
          <thead className="table-primary">
            <tr>
              <th>HORA</th>
              {dias.map((d) => (
                <th key={d}>{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {horas.map((h) => (
              <tr key={h}>
                <td className="fw-semibold">{h}</td>
                {dias.map((d) => (
                  <td key={d} className="text-center text-success fw-semibold">
                    Disponible
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex gap-3 mt-3 small">
        <span>🔴 Rojo = Ocupado</span>
        <span>🟢 Verde = Disponible</span>
      </div>

      <div className="d-flex gap-2 mt-3">
        <button className="btn btn-primary">Exportar PDF</button>
        <button className="btn btn-success">+ Programar Bloqueo</button>
      </div>
    </div>
  );
}

export default HorarioAdmin;