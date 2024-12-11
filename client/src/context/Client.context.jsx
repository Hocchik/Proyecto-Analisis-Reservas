import { createContext, useContext, useState } from "react";
import { createDetalleReserva, createReserva } from "../api/client";

const VwContext = createContext();

export const useClient = () =>{
    const context = useContext(VwContext);
    if(!context){
        throw new Error('No context')
    }
    return context;
}

export function ClientContext({ children }){
    const [errors, setErrors] = useState([]);

const createReservas = async (reserva) =>{
    try {
        const res = await createReserva(reserva); 
        console.log(res)
    } catch (error) {
        if(Array.isArray(error.response.data)){
            return setErrors(error.response.data)
        }
        setErrors([error.response.data.message]);
        console.log(errors)
    }
}

const createDetalleReservas = async (detareserva) => {
    try {
        const res = await createDetalleReserva(detareserva); 
        console.log(res)
    } catch (error) {
        if(Array.isArray(error.response.data)){
            return setErrors(error.response.data)
        }
        setErrors([error.response.data.message]);
        console.log(errors)
    }
}

    return (
        <VwContext.Provider value={{
            createReservas, createDetalleReservas
        }}>
            { children }
        </VwContext.Provider>
    )
}