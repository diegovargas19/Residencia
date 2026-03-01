import React, { useMemo, useState } from "react";

const PAGE_SIZE = 10;

const statusStyle = {
  Activo: "bg-blue-500/20 text-blue-400",
  "En revisión": "bg-yellow-500/20 text-yellow-400",
  Aprobado: "bg-emerald-500/20 text-emerald-400",
  Rechazado: "bg-red-500/20 text-red-400",
  Pausado: "bg-orange-500/20 text-orange-400",
};

const priorityStyle = {
  Alta: "text-red-400",
  Media: "text-yellow-400",
  Baja: "text-green-400",
};

const TablaProyectos = ({ data = [], search = "" }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return data;

    return data.filter((item) =>
      [
        item.title,
        item.line,
        item.investigator,
        item.department,
        item.status,
        item.priority,
        item.deadline,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(term)
    );
  }, [data, search]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);

  const startIndex = (safePage - 1) * PAGE_SIZE;
  const endIndex = Math.min(startIndex + PAGE_SIZE, filteredData.length);
  const pageData = filteredData.slice(startIndex, startIndex + PAGE_SIZE);

  const goPrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const goNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-gray-400 border-b border-white/10">
            <tr className="text-left">
              <th className="py-3">Proyecto</th>
              <th>Investigador</th>
              <th>Departamento</th>
              <th>Progreso</th>
              <th>Estado</th>
              <th>Prioridad</th>
              <th>Fecha límite</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {pageData.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-8 text-center text-gray-400">
                  No se encontraron proyectos.
                </td>
              </tr>
            ) : (
              pageData.map((item, i) => {
                const globalIndex = startIndex + i;
                const rowKey = item.id ?? `${item.title}-${globalIndex}`;

                return (
                  <tr
                    key={rowKey}
                    className="border-b border-white/5 hover:bg-white/5 transition"
                  >
                    <td className="py-4">
                      <p>{item.title}</p>
                      <p className="text-gray-500 text-xs">{item.line}</p>
                    </td>

                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={`https://i.pravatar.cc/40?img=${(globalIndex % 70) + 10}`}
                          alt={item.investigator || "Investigador"}
                          className="w-9 h-9 rounded-full"
                        />
                        <span>{item.investigator}</span>
                      </div>
                    </td>

                    <td>
                      <span className="bg-white/10 px-3 py-1 rounded-full text-xs">
                        {item.department}
                      </span>
                    </td>

                    <td className="w-48">
                      <div className="w-full bg-white/10 h-2 rounded-full">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                          style={{ width: `${item.progress}%` }}
                          title={`Etapa actual: ${item.stage ?? "-"}`}
                        />
                      </div>
                    </td>

                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          statusStyle[item.status] ?? "bg-white/10 text-gray-300"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td
                      className={`font-medium ${
                        priorityStyle[item.priority] ?? "text-gray-300"
                      }`}
                    >
                      {item.priority}
                    </td>

                    <td className="text-gray-400">{item.deadline}</td>

                    <td className="text-gray-400 cursor-pointer hover:text-white">
                      ⋯
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-6 text-sm text-gray-400">
        <div className="flex gap-2">
          <button
            onClick={goPrev}
            disabled={safePage === 1}
            className="px-4 py-2 bg-[#0d1b34] rounded-lg border border-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          <button
            onClick={goNext}
            disabled={safePage === totalPages || filteredData.length === 0}
            className="px-4 py-2 bg-[#0d1b34] rounded-lg border border-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>

        <span>
          {filteredData.length === 0
            ? "Mostrando 0 proyectos"
            : `Mostrando ${startIndex + 1}–${endIndex} de ${filteredData.length} proyectos (Página ${safePage} de ${totalPages})`}
        </span>
      </div>
    </>
  );
};

export default TablaProyectos;