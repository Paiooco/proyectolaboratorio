function TarjetaLaboratorio({ laboratorio, onReservar }) {
  const ocupado = laboratorio.estado === "ocupado";

  return (
    <div className="card shadow-sm h-100">
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title mb-0">{laboratorio.nombre}</h5>
          <span className={`badge ${ocupado ? "bg-danger" : "bg-success"}`}>
            {ocupado ? "● Ocupado" : "● Desocupado"}
          </span>
        </div>

        {ocupado ? (
          <>
            <p className="card-text mb-1">
              👤 Ocupado por <strong>{laboratorio.maestro}</strong>
            </p>
            <p className="card-text text-muted small">
              🕐 De {laboratorio.horaEntrada} a {laboratorio.horaSalida}
            </p>
          </>
        ) : (
          <>
            <p className="card-text mb-3">🕐 Libre de 09:00 a 14:00</p>
            <button
              className="btn btn-primary mt-auto"
              onClick={() => onReservar(laboratorio)}
            >
              Reservar
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TarjetaLaboratorio;