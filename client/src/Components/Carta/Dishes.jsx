import React from 'react';

const dishesData = [
    {
        id: 1,
        title: "Pescado Aguaja",
        price: "S/.35.00 S/.50.00 S/.65.00",
        description: "Fresco pescado aguaja, servido con guarniciones tradicionales.",
        image: "https://i.ytimg.com/vi/5kPHnFfCV-A/maxresdefault.jpg"
    },
    {
        id: 2,
        title: "Pescado Mero",
        price: "S/.55.00 S/.70.00 S/.85.00",
        description: "Delicioso pescado mero, preparado con hierbas y especias.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT7_F_m1wYqzdwxtleSCjzq4vXZVnWWvNfHw&s"
    },
    {
        id: 3,
        title: "Pescado Cabrillón",
        price: "S/.55.00 S/.70.00 S/.85.00",
        description: "Pescado cabrillón en su punto perfecto, con una salsa especial.",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/26/ca/0b/f9/exquisito-ceviche-de.jpg"
    },
    {
        id: 4,
        title: "Pescado Caballa",
        price: "S/.25.00",
        description: "Pescado caballa a la parrilla, acompañada de papas fritas.",
        image: "https://larepublica.cronosmedia.glr.pe/migration/images/YCNKRLTCZ5AMVAXW6AEARVQ56A.jpg"
    },
    {
        id: 5,
        title: "Pescados y Mariscos",
        price: "S/.55.00 S/.70.00 S/.85.00",
        description: "Combinación de pescados y mariscos frescos, acompañados de arroz.",
        image: "https://tofuu.getjusto.com/orioneat-local/resized2/QQdkRgfx3sNt4Qo2W-800-x.webp"
    },
    {
        id: 6,
        title: "Conchas Negras",
        price: "S/.55.00 S/.70.00 S/.85.00",
        description: "Conchas negras frescas, servidas con una salsa de mariscos.",
        image: "https://lechedetigre.net/wp-content/uploads/2019/08/Receta-Ceviche-de-Conchas-Negras-Peru-Tumbes.jpg"
    }
];

const Dishes = () => {
    return (
        <div className="py-10 bg-red-900 mt-16">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold font-serif text-white mb-12">Nuestra Carta</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">
                    {dishesData.map((dish) => (
                        <div
                            key={dish.id}
                            className="shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                            style={{ backgroundColor: "#CE8C36" }}
                        >

                            <div className="relative">
                                <img
                                    src={dish.image}
                                    alt={dish.title}
                                    className="w-full h-56 object-cover"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h2 className="text-lg font-bold text-white font-sans mb-2">{dish.title}</h2>
                                <p className="text-sm text-white font-sans">{dish.description}</p>
                                <p className="mt-2 text-lg font-semibold text-white">{dish.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default Dishes;
