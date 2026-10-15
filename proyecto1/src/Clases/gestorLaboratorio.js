export class GestorLaboratorios {
  constructor(laboratorios, reservas = []) {
    this.laboratorios = [...laboratorios];
    this.reservas = [...reservas];
  }

  // Obtener todos los laboratorios
  obtenerLaboratorios() {
    return this.laboratorios;
  }

  // Obtener un laboratorio por id
  obtenerLaboratorioPorId(id) {
    return this.laboratorios.find((lab) => lab.id === id);
  }

  // Contar ocupados / disponibles
  contarEstados() {
    const ocupados = this.laboratorios.filter((l) => l.estado === "ocupado").length;
    const disponibles = this.laboratorios.filter((l) => l.estado === "desocupado").length;
    return { total: this.laboratorios.length, ocupados, disponibles };
  }

  // Registrar una nueva reserva
  registrarReserva(reserva) {
    const nuevoId = this.reservas.length + 1;
    const nuevaReserva = { ...reserva, id: nuevoId, asistencia: null };
    this.reservas.push(nuevaReserva);

    // Marcar laboratorio como ocupado
    const lab = this.laboratorios.find((l) => l.id === reserva.laboratorioId);
    if (lab) {
      lab.estado = "ocupado";
      lab.maestro = reserva.maestro;
      lab.horaEntrada = reserva.fecha;
      lab.carrera = reserva.carrera;
    }
    return nuevaReserva;
  }

  // Registrar asistencia
  registrarAsistencia(reservaId, estado) {
    // estado: "asistio" | "falto"
    const reserva = this.reservas.find((r) => r.id === reservaId);
    if (reserva) {
      reserva.asistencia = estado;
    }
    return reserva;
  }
  // Obtener reservas por día (ej. "lunes", "martes", ...)
  obtenerReservasPorDia(dia) {
    return this.reservas.filter((r) => r.dia?.toLowerCase() === dia.toLowerCase());
  }
}