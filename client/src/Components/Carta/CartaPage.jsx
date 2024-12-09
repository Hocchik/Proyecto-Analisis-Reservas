import React from "react";

const carteData = [
    {
        id: 1,
        title: "Lomo Saltado",
        price: "S/. 28.00",
        description: "Delicioso lomo saltado con ingredientes frescos.",
        image: "https://assets.afcdn.com/recipe/20210416/119490_w1024h1024c1cx363cy240cxt0cyt0cxb726cyb480.jpg",
    },
    {
        id: 2,
        title: "Bistec Apanado",
        price: "S/. 20.00",
        description: "Bistec apanado acompañado de ensalada y papas.",
        image: "https://cdn0.recetasgratis.net/es/posts/1/9/2/bistec_apanado_77291_orig.jpg",
    },
    {
        id: 3,
        title: "Pollo a la Plancha",
        price: "S/. 20.00",
        description: "Pollo a la plancha con guarniciones saludables.",
        image: "https://tofuu.getjusto.com/orioneat-local/resized2/NF4MxK6R4FdQxxh7d-800-x.webp",
    },
    {
        id: 4,
        title: "Tallarines en Salsa de Langostino",
        price: "S/. 25.00",
        description: "Tallarines frescos en una exquisita salsa de langostinos.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5MWprph6h-23j8FXG3hQVGhwG0Pd3e16NkA&s",
    },
    {
        id: 5,
        title: "Tacu Tacu en Sala de Marisco",
        price: "S/. 25.00",
        description: "Tradicional tacu tacu bañado en salsa de mariscos.",
        image: "https://i.ytimg.com/vi/eox8BKZKgww/maxresdefault.jpg",
    },
    {
        id: 6,
        title: "Tacu Tacu con Lomo Saltado",
        price: "S/. 25.00",
        description: "Tacu tacu combinado con lomo saltado al estilo peruano.",
        image: "https://comidasperuanas.com.pe/wp-content/uploads/2023/10/lomos_saltado_con_tacu_tacu.jpg",
    },
    {
        id: 7,
        title: "Tallarines verdes con Lomo Fino",
        price: "S/. 25.00",
        description: "Tallarines verdes acompañados de un jugoso lomo fino.",
        image: "https://i.ytimg.com/vi/yFwhVahevw0/hqdefault.jpg",
    },
    {
        id: 8,
        title: "Tallarines verdes con Chuleta + Ensalada Rusa",
        price: "S/. 25.00",
        description: "Un plato completo con tallarines, chuleta y ensalada rusa.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEBvWoci1LHfiQPTgwhRkUXiIltGipg6LrA&s",
    },
];

const CartaPage = () => {
    return (
        <div className="py-10 bg-red-900 mt-16">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold text-white font-serif mb-8">Nuestra Carta</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {carteData.map((dish) => (
                        <div
                            key={dish.id}
                            style={{ backgroundColor: "#CE8C36" }}
                            className="shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                        >
                            <div className="relative">
                                <img
                                    src={dish.image}
                                    alt={dish.title}
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h2 className="text-lg font-bold font-sans text-white mb-2">{dish.title}</h2>
                                <p className="text-sm font-sans text-white">{dish.description}</p>
                                <p className="mt-2 text-lg font-semibold text-white">{dish.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CartaPage;
