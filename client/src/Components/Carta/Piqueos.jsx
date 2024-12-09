import React from 'react';

const piqueosData = [
    {
        id: 1,
        title: "Seco de chavelo con costillas de chancho",
        price: "S/. 45.00",
        description: "Un delicioso plato de costillas de chancho con una rica salsa de seco.",
        image: "https://buenazo.cronosmedia.glr.pe/original/2024/01/11/65a0816f1d5fca12c81d8c28.png"
    },
    {
        id: 2,
        title: "Carne seca",
        price: "S/. 42.00",
        description: "Carne seca perfectamente sazonada para disfrutar en cualquier ocasión.",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/16/ad/1a/d9/el-tundal.jpg"
    },
    {
        id: 3,
        title: "Mojado de yuca con costillas de chancho",
        price: "S/. 42.00",
        description: "Yuca bañada en salsa y acompañada de tiernas costillas de chancho.",
        image: "https://scontent.flim33-1.fna.fbcdn.net/v/t1.6435-9/81831074_2619628928150620_5894649576454881280_n.jpg?stp=dst-jpg_p843x403_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFArty5VnAtUoLAf_Qsfo9oh-0Z6_qUGBaH7Rnr-pQYFv10S8UQcb38D2qWo1LOfNoPw_nWASnZoGE4sYTmpG7e&_nc_ohc=elmTgvCmLYkQ7kNvgHeUVqU&_nc_zt=23&_nc_ht=scontent.flim33-1.fna&_nc_gid=AIh1uEysmo2uxby3Ca6RS-X&oh=00_AYAdH-8FITR2kF8DhnwsE1K0ycl7FPNL7e6Dj5piL6X7hA&oe=677EBE8C"
    },
    {
        id: 4,
        title: "Cachema encebollado",
        price: "S/. 42.00",
        description: "Cachema fresca con una deliciosa mezcla de cebollas y especias.",
        image: "https://i.ytimg.com/vi/rVAtxP4x8ew/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBhzpx4ylqmNONiQgyZJziTzosWOA"
    },
    {
        id: 5,
        title: "Majado de yuca + seco de chavelo + costillas de chancho",
        price: "S/. 65.00",
        description: "Una combinación de majado de yuca con seco de chavelo y costillas de chancho.",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/0d/d8/57/4c/ronda-nortena-majado.jpg"
    }
];

const Piqueos = () => {
    return (
        <div className="py-10 bg-red-900 mt-16">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold font-serif text-white mb-8">Nuestros Piqueos</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {piqueosData.slice(0, 3).map((piqueo) => (
                        <div
                            key={piqueo.id}
                            className="bg-[#CE8C36] shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                        >
                            <img
                                src={piqueo.image}
                                alt={piqueo.title}
                                className="w-full h-60 object-cover"
                            />
                            <div className="p-4 text-center">
                                <h2 className="text-lg font-bold text-white mb-2">{piqueo.title}</h2>
                                <p className="text-sm text-white mb-4">{piqueo.description}</p>
                                <p className="mt-2 text-lg font-semibold text-white">{piqueo.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {piqueosData.slice(3).map((piqueo) => (
                        <div
                            key={piqueo.id}
                            className="bg-[#CE8C36] shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                        >
                            <img
                                src={piqueo.image}
                                alt={piqueo.title}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4 text-center">
                                <h2 className="text-lg font-bold text-white mb-2">{piqueo.title}</h2>
                                <p className="text-sm text-white mb-4">{piqueo.description}</p>
                                <p className="mt-2 text-lg font-semibold text-white">{piqueo.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Piqueos;
