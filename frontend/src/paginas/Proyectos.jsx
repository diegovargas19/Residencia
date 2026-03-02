import React, { useState } from "react";
import { proyectos as data } from "../data/Proyectos";
import TablaProyectos from "../components/tablas/TablaProyectos";
import NuevoProyectoModal from "../components/modales/NuevoProyectoModal";

const Proyectos = () => {
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-6">
      {/* Top bar */}
      <div className="flex justify-between items-center mb-6">
        <button
          type="button"
          className="bg-red-800 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg transition"
          onClick={() => setModalOpen(true)}
        >
          + Nuevo proyecto
        </button>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar proyecto..."
          className="bg-[#0d1b34] border border-white/10 rounded-lg px-4 py-2 text-sm outline-none"
        />
      </div>

      {/* Card */}
      <div className="bg-[#0b162c] border border-white/10 rounded-2xl p-6 shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Proyectos de Investigación</h2>

          <div className="flex gap-2">
            {["Departamento", "Estado", "Ordenar", "Filtros"].map((b, i) => (
              <button
                key={i}
                className="bg-[#0d1b34] border border-white/10 px-4 py-2 rounded-lg text-sm hover:bg-[#122044]"
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Tabla + lógica de paginación */}
        <TablaProyectos key={search} data={data} search={search} />
      </div>

      <NuevoProyectoModal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Proyectos;