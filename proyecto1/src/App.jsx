import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import InicioSesion from "./Componentes/InicioSesion";
import DiasLibres from "./Componentes/DiasLibres";
import ReporteSemanal from "./Componentes/ReporteSemanal";
import Estatus from "./Componentes/Estatus";

import { gestorLaboratorios } from "./Clases/gestorLaboratorios";
import { Laboratorio_Datos } from "./Base_Nombres/Laboratorios";
import { Reserva_Datos } from "./Base_Nombres/Reservas";

function App() {
  const [sesion, setSesion] = useState(false);
  const [pestana, setPestana] = useState("reservar");

  const [gestor] = useState(() => {
    return new gestorLaboratorios(Laboratorio_Datos, Reserva_Datos);
  });

  const [, setRefresh] = useState(0);
  const actualizar = () => setRefresh((prev) => prev + 1);

  if (!sesion) {
    return <InicioSesion entrar={() => setSesion(true)} />;
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 shadow-sm">
        <div className="container-fluid">
          <span className="navbar-brand fw-bold">ITSR - Laboratorios</span>
          <div className="d-flex gap-2 flex-wrap">
            <button
              className={`btn btn-sm ${pestana === "reservar" ? "btn-light" : "btn-outline-light"}`}
              onClick={() => setPestana("reservar")}
            >
              Días Libres
            </button>
            <button
              className={`btn btn-sm ${pestana === "reporte" ? "btn-light" : "btn-outline-light"}`}
              onClick={() => setPestana("reporte")}
            >
              Reporte Semanal
            </button>
            <button
              className={`btn btn-sm ${pestana === "estatus" ? "btn-light" : "btn-outline-light"}`}
              onClick={() => setPestana("estatus")}
            >
              Estatus
            </button>
            <button className="btn btn-sm btn-danger ms-2" onClick={() => setSesion(false)}>
              Cerrar Sesión
            </button>
          </div>
        </div>
      </nav>

      <div className="container mt-3">
        {gestor && pestana === "reservar" && <DiasLibres gestor={gestor} actualizar={actualizar} />}
        {gestor && pestana === "reporte" && <ReporteSemanal gestor={gestor} actualizar={actualizar} />}
        {gestor && pestana === "estatus" && <Estatus gestor={gestor} />}
      </div>
    </div>
  );
}

export default App;