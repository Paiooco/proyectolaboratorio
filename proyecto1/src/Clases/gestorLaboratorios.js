export class gestorLaborartorio{
  constructor(laboratorio, reservas){
    this.laboratorio=laboratorio
    this.reservas=[...reservas]
    this.horario=["7-0 am ", "9-12 ", "12-2 pm", "2-4pm"]
    this.dias=["Lunes", "Martes", "Miercoles", "Jueves", "Viernes" , "Sabado"]
  }

  guardarReserva(nueva){
    this.reserva.push({...nueva, id : Date.now(), asistio: null})
  }

  marcarAsistencia(id, estado){
    const reserva=this.reserva.find(r=> r.id ===id)
    if(reserva) reserva.asistio= estado

    
  }
}