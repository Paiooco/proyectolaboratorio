export class gestorLaboratorios {
  constructor(laboratorios, reservas) {
    this.laboratorios = [...laboratorios];
    this.reservas = [...reservas];
  }

  obtenerLaboratorios() {
    return this.laboratorios;
  }

  obtenerLaboratorioPorId(id) {
    return this.laboratorios.find((l) => l.id === id);
  }

  contarEstados() {
    const ocupados = this.laboratorios.filter((l) => l.estado === "ocupado").length;
    const disponibles = this.laboratorios.filter((l) => l.estado === "desocupado").length;
    return { total: this.laboratorios.length, ocupados, disponibles };
  }

  registrarReserva(reserva) {
    const nuevoId = this.reservas.length + 1;
    const nueva = { ...reserva, id: nuevoId, asistencia: null };
    this.reservas.push(nueva);

    const lab = this.laboratorios.find((l) => l.id === reserva.laboratorioId);
    if (lab) {
      lab.estado = "ocupado";
      lab.maestro = reserva.maestro;
      lab.horaEntrada = "10:00";
      lab.horaSalida = "11:00";
    }
    return nueva;
  }

  obtenerReservas() {
    return this.reservas;
  }
}