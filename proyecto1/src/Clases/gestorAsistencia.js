export class GestorAsistencia {
  constructor(reservas) {
    this.reservas = [...reservas];
  }

  marcarAsistencia(reservaId, estado) {
    const r = this.reservas.find((x) => x.id === reservaId);
    if (r) r.asistencia = estado;
    return r;
  }

  obtenerReservas() {
    return this.reservas;
  }
}