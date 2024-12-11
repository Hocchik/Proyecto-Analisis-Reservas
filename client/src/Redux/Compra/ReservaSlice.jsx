import { createSlice } from '@reduxjs/toolkit';

const reservaSlice = createSlice({
  name: 'reserva',
  initialState: {
    numeroPersonas: null,
    numeroMesas: null,
    fecha: null,
    horario: null,
    clienteID: null,
    requerimiento: '',
    restriccion: '',
    estado: 'pendiente' // Estado inicial de la reserva
  },
  reducers: {
    setNumeroPersonas: (state, action) => {
      state.numeroPersonas = action.payload;
    },
    setNumeroMesas: (state, action) => {
      state.numeroMesas = action.payload;
    },
    setFecha: (state, action) => {
      state.fecha = action.payload;
    },
    setHorario: (state, action) => {
      state.horario = action.payload;
    },
    setClienteID: (state, action) => { // Renombrado para consistencia
      state.clienteID = action.payload;
    },
    setRequerimiento: (state, action) => {
      state.requerimiento = action.payload;
    },
    setRestriccion: (state, action) => {
      state.restriccion = action.payload;
    },
    setEstado: (state, action) => { // Nuevo reducer para actualizar el estado
      state.estado = action.payload;
    },
    resetReserva: (state) => {
      state.numeroPersonas = null;
      state.numeroMesas = null;
      state.fecha = null;
      state.horario = null;
      state.clienteID = null; // Restablecer clienteID
      state.requerimiento = '';
      state.restriccion = '';
      state.estado = 'pendiente'; // Restablecer estado a 'pendiente'
    }
  },
});

export const {
  setNumeroPersonas,
  setNumeroMesas,
  setFecha,
  setHorario,
  setClienteID, // Asegúrate de usar el nombre actualizado
  setRequerimiento,
  setRestriccion,
  setEstado, // Exportar el nuevo reducer
  resetReserva
} = reservaSlice.actions;

export default reservaSlice.reducer;