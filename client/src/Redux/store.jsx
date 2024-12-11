import { configureStore } from '@reduxjs/toolkit';
import reservaReducer from './Compra/ReservaSlice.jsx';

const store = configureStore({
  reducer: {
    reserva: reservaReducer,
  },
});

export default store;