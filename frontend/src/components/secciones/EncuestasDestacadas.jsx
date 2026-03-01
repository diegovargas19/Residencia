import React from "react";

const lista = [
    {
        titulo: "Opinión sobre infraestructura de red universitaria",
        categoria: "Encuesta",
        img: "/img/redes3.jpg",
    },
    {
        titulo: "Evaluación de seguridad informática institucional",
        categoria: "Encuesta",
        img: "/img/ciberseguridad.jpg",
    },
    {
        titulo: "Uso de plataformas cloud académicas",
        categoria: "Encuesta",
        img: "/img/nube.jpg",
    },
];

const cards = [
    {
        color: "bg-teal-400",
        titulo: "Nivel de aprobación",
        valor: "94%",
        proyecto: "Arquitectura de red segura",
        categoria: "Redes",
        img: "/img/redes3.jpg",
        respuestas: 324,
    },
    {
        color: "bg-yellow-400",
        titulo: "Participación",
        valor: "76%",
        proyecto: "Sistema de detección de intrusos",
        categoria: "Ciberseguridad",
        img: "/img/ciberseguridad.jpg",
        respuestas: 280,
    },
    {
        color: "bg-pink-400",
        titulo: "Satisfacción",
        valor: "89%",
        proyecto: "Infraestructura cloud académica",
        categoria: "Cloud",
        img: "/img/nube.jpg",
        respuestas: 305,
    },
];

const EncuestasDestacadas = () => {
    return (
        <section className="bg-[#f3f3f3] py-20">

            <div className="max-w-7xl mx-auto px-6">

                {/* BLOQUE 1 */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* LISTA */}
                    <div>
                        <div className="flex justify-between mb-6">
                            <h2 className="text-2xl font-bold">Encuestas</h2>
                            <button className="text-sm text-gray-500 hover:underline">
                                Ver todas
                            </button>
                        </div>

                        <div className="space-y-5">
                            {lista.map((item, i) => (
                                <div key={i} className="flex gap-4 items-center">
                                    <img
                                        src={item.img}
                                        className="w-24 h-16 rounded-lg object-cover"
                                        alt=""
                                    />

                                    <div>
                                        <p className="text-xs text-pink-600 font-semibold">
                                            {item.categoria}
                                        </p>

                                        <p className="text-sm font-semibold text-gray-900 leading-snug max-w-xs">
                                            {item.titulo}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CARD NEGRA */}
                    <div className="bg-[#1d1d1d] text-white rounded-2xl p-10 relative overflow-hidden">

                        <h3 className="text-3xl font-bold leading-snug">
                            Encuesta general tecnológica universitaria
                        </h3>

                        <button className="mt-6 bg-white text-black text-sm px-5 py-2 rounded-full font-medium">
                            Participar
                        </button>

                        <div className="absolute top-0 right-0 w-40 h-40 bg-pink-400 opacity-30 blur-3xl rounded-full"></div>
                    </div>

                </div>

                {/* BLOQUE 2 */}
                <div className="mt-20">

                    <div className="flex justify-between mb-8">
                        <h2 className="text-2xl font-bold">Resultados Destacados</h2>
                        <button className="text-sm text-gray-500 hover:underline">
                            Ver todos
                        </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {cards.map((c, i) => (
                            <div
                                key={i}
                                className={`${c.color} rounded-2xl p-6 text-white space-y-4 hover:scale-[1.02] transition`}
                            >

                                {/* PROYECTO */}
                                <div>
                                    <p className="text-xs opacity-90 uppercase tracking-wide">
                                        {c.categoria}
                                    </p>

                                    <p className="text-sm font-semibold leading-tight">
                                        {c.proyecto}
                                    </p>
                                </div>

                                {/* RESULTADO */}
                                <div>
                                    <p className="text-sm font-semibold">
                                        {c.titulo}
                                    </p>

                                    <h3 className="text-4xl font-bold mt-1">
                                        {c.valor}
                                    </h3>
                                </div>

                                {/* META */}
                                <div className="text-sm opacity-90">
                                    Basado en <span className="font-semibold">{c.respuestas}</span> respuestas
                                </div>

                                {/* BADGE */}
                                <span className="inline-block text-xs bg-white/20 px-3 py-1 rounded-full">
                                    Encuesta de proyecto
                                </span>

                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default EncuestasDestacadas;