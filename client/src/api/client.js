import axios from './axios'

export const createReserva = (reserva) => axios.post('/reservas/createreserva', reserva)
export const createDetalleReserva = (dtreserva) => axios.post('/reservas/createdetallereserva', dtreserva)
export const misReservas = () => axios.get('/reservas/misreservas')
