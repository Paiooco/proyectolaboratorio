export class gestorLaboratorios {
  constructor(laboratorios, reservas) {
    this.laboratorios = laboratorios;
    this.reservas = [...reservas]; 
    this.horarios = ["7-9 am", "9-12", "12-2 pm", "2-4 pm"];
    this.dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  }

  guardarReserva(nueva) {
    this.reservas.push({ ...nueva, id: Date.now(), asistio: null });
  }

  marcarAsistencia(id, estado) {
    const reserva = this.reservas.find(r => r.id === id);
    if (reserva) reserva.asistio = estado;
  }
}