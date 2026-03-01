import React from "react";

const usuarios = [
  {
    nombre: "Dra. Laura Méndez",
    rol: "Investigadora en Redes",
    img: "/img/user5.jpg",
  },
  {
    nombre: "Carlos Ramírez",
    rol: "Especialista en Ciberseguridad",
    img: "/img/user2.jpg",
  },
  {
    nombre: "Mariana Torres",
    rol: "Analista Cloud",
    img: "/img/user3.jpg",
  },
  {
    nombre: "José Hernández",
    rol: "Investigador IoT",
    img: "/img/user4.jpg",
  },
];

const UsuariosDestacados = () => {
  return (
    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900">
            Investigadores Destacados
          </h2>

          <button className="text-sm text-gray-500 hover:underline">
            Ver todos
          </button>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {usuarios.map((u, i) => (
            <div
              key={i}
              className="bg-[#f7f7f7] rounded-2xl p-6 text-center hover:shadow-md transition"
            >
              <img
                src={u.img}
                alt={u.nombre}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-white shadow"
              />

              <h3 className="font-semibold text-gray-900">
                {u.nombre}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {u.rol}
              </p>

              <button className="mt-4 text-xs font-semibold text-pink-600 hover:underline">
                Ver perfil
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default UsuariosDestacados;