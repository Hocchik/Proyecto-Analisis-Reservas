import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const SteeperReserva = ({ paso }) => {
  const [pasoActual, setPasoActual] = useState(1);

  const pasos = [
    { nombre: "Cantidad de Personas", descripcion: "Completa tus datos personales." },
    { nombre: "Fecha y Hora", descripcion: "Selecciona la fecha y hora." },
    { nombre: "Numero de Mesa", descripcion: "Elige servicios adicionales." },
    { nombre: "Detalles", descripcion: "Revisa y confirma los detalles." },
    { nombre: "Finalizado", descripcion: "¡Reserva completada con éxito!" },
  ];

  return (
    <div className="w-full bg-emerald-500 px-24 py-4 mt-16">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Pasos a seguir</h2>

      <div className="relative flex items-center justify-between w-full mb-24 mt-10">
        <div className="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-white"></div>
        <div
          className={`absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 ${pasoActual === pasos.length ? "bg-black" : "bg-black"
            } transition-all duration-500`}
        ></div>

        {pasos.map((paso, index) => {
          const pasoNumero = index + 1;
          return (
            <div
              key={pasoNumero}
              className={`relative z-10 grid w-10 h-10 font-bold text-white transition-all duration-300 ${pasoNumero <= pasoActual ? "bg-black" : "bg-black"
                } rounded-full place-items-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                ></path>
              </svg>

              <div className="absolute -bottom-[4.5rem] w-max text-center">
                <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-black">
                  {paso.nombre}
                </h6>
                <p className="block font-sans text-sm antialiased font-normal leading-relaxed text-black">
                  {paso.descripcion}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
};

export default SteeperReserva;
