import React from 'react';

const drinksData = [
    {
        id: 1,
        title: "Limonada Frozen 1L",
        price: "S/. 15.00",
        description: "Refrescante limonada para acompañar tus comidas.",
        image: "https://losmaderos.pe/public/img/products/prd_wc60e4ba747b51a.jpg",
    },
    {
        id: 2,
        title: "Chicha Morada 1L",
        price: "S/. 15.00",
        description: "Tradicional bebida peruana hecha de maíz morado.",
        image: "https://www.lovferments.com/wp-content/uploads/2021/04/beb_chicha.jpg",
    },
    {
        id: 3,
        title: "Maracuya Frozen 1L",
        price: "S/. 15.00",
        description: "Deliciosa bebida de maracuyá helada.",
        image: "https://89acebichados.pe/55-large_default/1l-refresco-de-maracuya.jpg",
    },
    {
        id: 4,
        title: "Clarito Helado",
        price: "S/. 7.00",
        description: "Una opción ligera y refrescante.",
        image: "https://tumpistv.pe/wp-content/uploads/2024/04/130960876_972873413239526_2231271383571150796_n.jpg",
    },

    {
        id: 5,
        title: "Inka Cola 1L",
        price: "S/. 8.00",
        description: "",
        image: "https://minimarketmajaz.com/wp-content/uploads/2021/11/inca-kola-1L-retornable.jpg",
    },
    {
        id: 6,
        title: "Coca Cola 1L",
        price: "S/. 8.00",
        description: "",
        image: "https://minimarketmajaz.com/wp-content/uploads/2021/05/coca-cola-1L-retornable.jpg",
    },
    {
        id: 7,
        title: "Inka Cola 2L",
        price: "S/. 10.00",
        description: "",
        image: "https://minimarketmajaz.com/wp-content/uploads/2021/05/inca-kola-retornable-2L.jpg",
    },
    {
        id: 8,
        title: "Coca Cola 2L",
        price: "S/. 10.00",
        description: "",
        image: "https://www.coca-cola.com/content/dam/onexp/gt/es/brands/coca-cola/es_coca-cola_prod_orginal-bottle-2L_750x750_v1.jpg",
    },
    {
        id: 9,
        title: "Pilsen",
        price: "S/. 9.00",
        description: "Cerveza clásica para disfrutar con amigos.",
        image: "https://www.chilis.pe/Multimedia/productos/detalle/PILSEN_305_ML_202302141710473834.PNG",
    },
    {
        id: 10,
        title: "Cristal",
        price: "S/. 9.00",
        description: "Cerveza peruana refrescante.",
        image: "https://metroio.vtexassets.com/arquivos/ids/241663/frontal-2463.jpg?v=638173834431270000",
    },
    {
        id: 11,
        title: "Cusqueña Trigo",
        price: "S/. 10.00",
        description: "Cerveza premium con notas de trigo.",
        image: "https://www.chilis.pe/Multimedia/productos/detalle/CUSQUENA_TRIGO_310_ML_202302141713484337.PNG",
    },
    {
        id: 12,
        title: "Cusqueña Negra",
        price: "S/. 10.00",
        description: "Cerveza oscura con cuerpo robusto.",
        image: "https://metroio.vtexassets.com/arquivos/ids/252642-800-auto?v=638173967213800000&width=800&height=auto&aspect=true",
    },
];

const Drinks = () => {
    return (
        <div className="py-10 bg-red-900 mt-16">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold text-white font-serif mb-8">Nuestras Bebidas</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {drinksData.map((drink) => (
                        <div
                            key={drink.id}
                            style={{ backgroundColor: "#CE8C36" }}
                            className=" shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                        >
                            <div className="relative">
                                <img
                                    src={drink.image}
                                    alt={drink.title}
                                    className="w-full h-96 object-cover"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h2 className="text-xl font-bold font-sans text-white mb-2">{drink.title}</h2>
                                <p className="text-sm font-sans text-white mb-4">{drink.description}</p>
                                <p className="mt-2 text-lg font-semibold text-white">{drink.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Drinks;
