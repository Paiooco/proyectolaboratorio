//fany  pestaña 2 

import { useState } from "react";

function DiasLibres({ gestor, actualizar }) {
  const [labSeleccionado, setLabSeleccionado] = useState(1);

  const reservar = (dia, hora) => {
    const nombreMaestro = prompt("Ingresa el nombre del maestro que reserva:");
    if (nombreMaestro) {
      gestor.guardarReserva({
        laboratorio: labSeleccionado,
        dia: dia,
        horario: hora,
        maestro: nombreMaestro,
      });
      actualizar();
    }
  };

  const estaOcupado = (dia, hora) => {
    return gestor.reservas.some(
      (r) => r.laboratorio === labSeleccionado && r.dia === dia && r.horario === hora
    );
  };

  return (
    <div className="container mt-4">
      <h3 className="fw-bold text-primary">Días Libres para Reservar</h3>
      
      <select 
        className="form-select w-50 mb-4 shadow-sm" 
        value={labSeleccionado}
        onChange={(e) => setLabSeleccionado(Number(e.target.value))}
      >
        <option value={1}>Laboratorio 1</option>
        <option value={2}>Laboratorio 2</option>
      </select>

      <div className="table-responsive shadow-sm rounded">
        <table className="table table-bordered text-center mb-0">
          <thead className="table-dark">
            <tr>
              <th>Días / Horas</th>
              {gestor.horarios.map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {gestor.dias.map((dia) => (
              <tr key={dia}>
                <td className="fw-bold bg-light">{dia}</td>
                {gestor.horarios.map((hora) => (
                  <td key={hora}>
                    {estaOcupado(dia, hora) ? (
                      <span className="badge bg-danger">Ocupado</span>
                    ) : (
                      <button 
                        className="btn btn-sm btn-outline-success fw-bold" 
                        onClick={() => reservar(dia, hora)}
                      >
                        Reservar
                      </button>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DiasLibres;