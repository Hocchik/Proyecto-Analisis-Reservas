import React from 'react';

const MiReserva = () => {
    const reservas = [
        { id: 1, numeroPersonas: 4, fechaHorario: '2024-11-30 19:00', mesaSeleccionada: 'Mesa 5', detalles: 'Celebración de cumpleaños' },
        { id: 2, numeroPersonas: 2, fechaHorario: '2024-12-01 20:30', mesaSeleccionada: 'Mesa junto a la ventana', detalles: 'Cena romántica' },
        { id: 3, numeroPersonas: 6, fechaHorario: '2024-12-02 18:00', mesaSeleccionada: 'Mesa en el patio', detalles: 'Reunión familiar' },
    ];

    const eliminarReserva = (id) => {
        alert(`Reserva con ID: ${id} eliminada`);
    };

    return (
        <div className='bg-yellow-950 py-10'>
            <div className="container mx-auto p-6 mt-16 text-center">
                <h2 className="text-2xl font-bold mb-8 text-white">Mis Reservas</h2>

                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="py-3 px-4 border-b">ID</th>
                            <th className="py-3 px-4 border-b">Número de Personas</th>
                            <th className="py-3 px-4 border-b">Fecha y Horario</th>
                            <th className="py-3 px-4 border-b">Mesa Seleccionada</th>
                            <th className="py-3 px-4 border-b">Detalles</th>
                            <th className="py-3 px-4 border-b">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservas.map((reserva) => (
                            <tr key={reserva.id} className="border-b">
                                <td className="py-2 px-4">{reserva.id}</td>
                                <td className="py-2 px-4">{reserva.numeroPersonas}</td>
                                <td className="py-2 px-4">{reserva.fechaHorario}</td>
                                <td className="py-2 px-4">{reserva.mesaSeleccionada}</td>
                                <td className="py-2 px-4">{reserva.detalles}</td>
                                <td className="py-2 px-4 text-center">
                                    <button
                                        onClick={() => eliminarReserva(reserva.id)}
                                        className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
                                    >
                                        Eliminar Reserva
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MiReserva;
