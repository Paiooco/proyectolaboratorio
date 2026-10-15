import { useState } from 'react'
import {Laboratorio_Datos} from './Base_Nombres/Laboratorios'
import{Reserva_Datos} from './Base_Nombres/Reservas'
import{gestorLaboratorios} from './Clases/gestorLaboratorio'

const gestor = new gestorLaboratorios(Laboratorio_Datos, Reserva_Datos);

function App() {
  const Laboratorios = gestor.obtenerLaboratorios();
  const Reservas = gestor.obtenerReservas();

  return (
    <div>
      <h1>Laboratorios de Computo Ed.D</h1>
      <ul>
        {Laboratorios.map((lab) => (
          <li key={lab.id}>
            <h2>{lab.nombre}</h2>
            <p>Estado: {lab.estado}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
