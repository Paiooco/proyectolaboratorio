import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
import "./index.css";

import Login from "./Componentes/Login";
import Navbar from "./Componentes/Navbar";
import EstadoLaboratorios from "./Componentes/EstadoLaboratorios";
import FormularioReserva from "./Componentes/FormularioReserva";
import Asistencia from "./Componentes/Asistencia";
import HorarioAdmin from "./Componentes/HorarioAdmin";

import { gestorLaboratorios } from "./Clases/gestorLaboratorios";
import { GestorAsistencia } from "./Clases/gestorAsistencia";
import { Laboratorio_Datos } from "./Base_Nombres/Laboratorios";
import { Reserva_Datos } from "./Base_Nombres/Reservas";

function App() {
  const [gestor] = useState(
    () => new gestorLaboratorios(Laboratorio_Datos, Reserva_Datos)
  );

  const [gestorAsistencia] = useState(
    () => new GestorAsistencia(Reserva_Datos)
  );

  const [sesion, setSesion] = useState(null);
  const [vista, setVista] = useState("estado");
  const [labSeleccionado, setLabSeleccionado] = useState(null);

  if (!sesion) {
    return <Login onLogin={(u) => setSesion(u)} />;
  }

  const laboratorios = gestor.obtenerLaboratorios();
  const reservas = gestor.obtenerReservas();

  return (
    <div>
      <Navbar
        sesion={sesion}
        vista={vista}
        setVista={setVista}
        onLogout={() => {
          setSesion(null);
          setVista("estado");
          setLabSeleccionado(null);
        }}
      />

      <main>
        {vista === "estado" && (
          <EstadoLaboratorios
            laboratorios={laboratorios}
            onReservar={(lab) => {
              setLabSeleccionado(lab);
              setVista("reserva");
            }}
          />
        )}

        {vista === "reserva" && labSeleccionado && (
          <FormularioReserva
            laboratorio={labSeleccionado}
            onGuardar={(datos) => {
              gestor.registrarReserva(datos);
              alert("Reserva registrada ✅");
              setLabSeleccionado(null);
              setVista("estado");
            }}
            onCancelar={() => {
              setLabSeleccionado(null);
              setVista("estado");
            }}
          />
        )}

        {vista === "asistencia" && (
          <Asistencia
            reservas={reservas}
            onMarcar={(id, estado) =>
              gestorAsistencia.marcarAsistencia(id, estado)
            }
          />
        )}

        {vista === "admin" && sesion.rol === "admin" && (
          <HorarioAdmin laboratorios={laboratorios} />
        )}
      </main>
    </div>
  );
}

export default App;