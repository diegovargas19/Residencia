import React from "react";
import ProyectosDestacados from "../components/secciones/ProyectosDestacados";
import EncuestasDestacadas from "../components/secciones/EncuestasDestacadas";
import UsuariosDestacados from "../components/secciones/UsuariosDestacados";

const Home = () => {
  return (
    <div className="bg-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* HERO */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Biblioteca de <br /> Proyectos de Investigación
          </h1>

          <p className="mt-4 text-gray-500 text-lg">
            Explora, desarrolla y publica proyectos académicos innovadores.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* IZQUIERDA */}
          <div className="lg:col-span-2">

            <div className="rounded-xl overflow-hidden shadow-sm">
              <img
                src="/img/react.jpg"
                alt="Proyecto JavaScript"
                className="w-full h-[380px] object-cover"
              />
            </div>

            <p className="text-pink-600 font-semibold text-sm mt-6">
              Desarrollo Web y Software
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-2">
              Análisis comparativo de rendimiento entre arquitecturas frontend modernas en aplicaciones JavaScript de alta demanda
            </h2>

          </div>

          {/* DERECHA */}
          <ProyectosDestacados />

        </div>

      </div>

      {/* SECCIÓN ENCUESTAS */}
      <EncuestasDestacadas />
      <UsuariosDestacados />
    </div>
  );
};

export default Home;