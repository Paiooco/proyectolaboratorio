import { useState } from "react";

function FormularioReserva({ laboratorio, onGuardar, onCancelar }) {
  const [form, setForm] = useState({
    maestro: "",
    carrera: "",
    numPractica: "",
    fecha: "",
    grupo: "",
    nombrePractica: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const vacios = Object.values(form).some((v) => !v.trim());
    if (vacios) {
      setError("Todos los campos son obligatorios");
      return;
    }

    setError("");
    onGuardar({ ...form, laboratorioId: laboratorio.id });
  };

  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="fw-bold text-primary">Formulario de Reserva</h3>
          <p className="text-muted">
            <strong>{laboratorio.nombre}</strong> · Desocupado ·{" "}
            {laboratorio.edificio} · {laboratorio.piso} · Capacidad:{" "}
            {laboratorio.capacidad} personas
          </p>

          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Nombre del maestro</label>
              <input
                name="maestro"
                className="form-control"
                placeholder="Ej. Juan Pérez"
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Carrera</label>
              <input
                name="carrera"
                className="form-control"
                placeholder="Ej. Ing. Sistemas"
                onChange={handleChange}
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Número de práctica</label>
              <input
                name="numPractica"
                className="form-control"
                placeholder="Ej. 05"
                onChange={handleChange}
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Fecha</label>
              <input
                name="fecha"
                type="date"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Grupo</label>
              <input
                name="grupo"
                className="form-control"
                placeholder="Ej. 6SC"
                onChange={handleChange}
              />
            </div>

            <div className="col-12">
              <label className="form-label">Nombre de la práctica</label>
              <input
                name="nombrePractica"
                className="form-control"
                placeholder="Ej. Configuración de Redes VLAN"
                onChange={handleChange}
              />
            </div>

            {error && (
              <div className="col-12">
                <div className="alert alert-danger py-2 mb-0">{error}</div>
              </div>
            )}

            <div className="col-12 d-flex gap-2">
              <button type="submit" className="btn btn-primary">
                Apartar horario
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={onCancelar}
              >
                Cancelar
              </button>
            </div>
          </form>

          <p className="text-muted small mt-3 mb-0">
            Al continuar aceptas los lineamientos y Política de uso del
            laboratorio TecNM
          </p>
        </div>
      </div>
    </div>
  );
}

export default FormularioReserva;