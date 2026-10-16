import TarjetaLaboratorio from "./TarjetaLaboratorio";

function EstadoLaboratorios({ laboratorios, onReservar }) {
  const ocupados = laboratorios.filter((l) => l.estado === "ocupado").length;
  const disponibles = laboratorios.filter((l) => l.estado === "desocupado").length;

  return (
    <div className="container my-4">
      <h2 className="fw-bold text-primary">Estado de los Laboratorios</h2>
      <p className="text-muted">
        Consulta disponibilidad de laboratorios en tiempo real
      </p>

      <div className="row g-3">
        {laboratorios.map((lab) => (
          <div className="col-md-6" key={lab.id}>
            <TarjetaLaboratorio laboratorio={lab} onReservar={onReservar} />
          </div>
        ))}
      </div>

      <div className="alert alert-info mt-4 text-center fw-semibold">
        Total: {laboratorios.length} laboratorios · 🔴 {ocupados} Ocupado · 🟢{" "}
        {disponibles} Disponible
      </div>
    </div>
  );
}

export default EstadoLaboratorios;