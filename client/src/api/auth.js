import axios from './axios'

export const registerRequest = (user) => axios.post(`/register`, user)

export const loginRequest = (user) => axios.post(`/login`, user)

export const logoutRequest = () => axios.post(`/logout`)

export const verifyTokenRequest = () => axios.get('/verify')

export const DataClientes = (client) => axios.get('/datoscliente', client)