import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setFecha, setHorario } from '../../Redux/Compra/ReservaSlice.jsx';

function convertirFecha(fechaStr) {
  const meses = {
    "Enero": "01",
    "Febrero": "02",
    "Marzo": "03",
    "Abril": "04",
    "Mayo": "05",
    "Junio": "06",
    "Julio": "07",
    "Agosto": "08",
    "Septiembre": "09",
    "Octubre": "10",
    "Noviembre": "11",
    "Diciembre": "12"
  };

  const partes = fechaStr.split(" ");
  const mes = meses[partes[0]]; // Obtener el número del mes
  const año = partes[1]; // Obtener el año
  const dia = partes[2]; // Obtener el día

  // Formatear la fecha en el formato YYYY-MM-DD
  return `${año}-${mes}-${dia.padStart(2, '0')}`;
}

const CalendarioReservas = () => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [mesActual, setMesActual] = useState(0);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const meses = [
    {
      nombre: "Noviembre 2024",
      dias: [null, null, null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    },
    {
      nombre: "Diciembre 2024",
      dias: [null, null, null, null, null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    },
    {
      nombre: "Enero 2025",
      dias: [null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    },
    {
      nombre: "Febrero 2025",
      dias: [null, null, null, null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
    },
  ];
  
  const horarios = ["12:00 pm", "12:30 pm", "1:00 pm", "1:30 pm", "2:00 pm"];

  const handleSiguiente = () => {
    if (!fechaSeleccionada) {
      setError("Por favor, selecciona una fecha válida.");
      return;
    }
    if (!horarioSeleccionado) {
      setError("Por favor, selecciona un horario.");
      return;
    }

    const NewFecha = convertirFecha(fechaSeleccionada)

    setError("");
    dispatch(setFecha(NewFecha));
    dispatch(setHorario(horarioSeleccionado));
    navigate("/home/reservaMesa/numeroMesas");
  };

  const handleAnterior = () => {
    navigate("/home/reservaMesa/numeroPersonas");
  };

  const renderMes = () => {
    const { nombre, dias } = meses[mesActual];
    return (
      <div>
        <h2 className="text-white text-xl font-bold text-center">{nombre}</h2>
        <div className="grid grid-cols-7 gap-2">
          {["Lun", "Mar", "Mie", "Jue", "Vie", "Sáb", "Dom"].map((dia, index) => (
            <div key={index} className="text-center text-white font-bold">
              {dia}
            </div>
          ))}
          {dias.map((dia, index) => (
            <div
              key={index}
              className={`text-center h-10 w-10 flex items-center justify-center rounded-full ${fechaSeleccionada === `${nombre} ${dia}`
                ? "bg-black text-white"
                : "text-black bg-gray-200"
                } hover:bg-black hover:text-white`}
              onClick={() => dia && setFechaSeleccionada(`${nombre} ${dia}`)}
            >
              {dia || ""}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className=" p-8 bg-emerald-500">
      <h1 className="text-white text-center text-2xl font-bold mb-8">Selecciona una fecha</h1>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-between mb-8 w-full max-w-lg">
          <button
            onClick={() => setMesActual((mesActual - 1 + meses.length) % meses.length)}
            className="text-white font-bold px-4 py-2 bg-black hover:bg-black rounded-full m-3"
            disabled={mesActual === 0}
          >
            &#8249;
          </button>

          <div className="flex-grow text-center">{renderMes()}</div>

          <button
            onClick={() => setMesActual((mesActual + 1) % meses.length)}
            className="text-white font-bold px-4 py-2 bg-black hover:bg-black rounded-full m-3"
            disabled={mesActual === meses.length - 1}
          >
            &#8250;
          </button>
        </div>

        <div className="mt-8">
          <h2 className="text-white text-2xl font-bold mb-4">Selecciona un horario</h2>
          <div className="flex flex-wrap gap-4">
            {horarios.map((hora, index) => (
              <button
                key={hora}
                onClick={() => setHorarioSeleccionado(index+1)}
                className={`px-4 py-2 rounded-full border-2 ${horarioSeleccionado === index+1 ? "bg-black text-white" : "border-black text-white"
                  } hover:bg-black hover:text-white`}
              >
                {hora}
              </button>
            ))}
          </div>
        </div>

        {error && <h2 className="text-black mt-4 font-bold">{error}</h2>}

        <div className="mt-8 flex gap-4">
          <button
            onClick={handleAnterior}
            className="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Anterior
          </button>
          <button
            onClick={handleSiguiente}
            className="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarioReservas;
