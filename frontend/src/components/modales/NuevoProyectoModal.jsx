import React from "react";
import Modal from "react-modal";
import { User, ClipboardList } from "lucide-react";

Modal.setAppElement("#root");

const usuarios = [
  { id: 1, nombre: "Sofia Vargas", departamento: "Ingeniería de Software" },
  { id: 2, nombre: "Andres Pérez", departamento: "Ciencias Computacionales" },
  { id: 3, nombre: "David Martínez", departamento: "Algoritmos" },
  { id: 4, nombre: "Orlando Gómez", departamento: "Lenguajes de Programación" },
];

const estados = ["En progreso", "Completado", "Pendiente"];
const prioridades = ["Alta", "Media", "Baja"];

const inputStyle =
  "w-full bg-[#0f1c38]/80 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-white/40 outline-none transition-all duration-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/40";

const labelStyle = "block text-xs text-white/70 mb-1 tracking-wide";

const NuevoProyectoModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      closeTimeoutMS={200}
      overlayClassName="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
      className="relative bg-gradient-to-br from-[#0b162c] to-[#0a1330] border border-white/10 rounded-2xl p-8 w-full max-w-lg shadow-[0_0_40px_rgba(0,0,0,0.6)] outline-none animate-[fadeIn_.25s_ease]"
    >
      {/* HEADER */}
      <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
        <div className="bg-red-700/20 p-2 rounded-lg">
          <ClipboardList className="text-red-500" size={22} />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white tracking-wide">
            Nuevo Proyecto
          </h2>
          <p className="text-xs text-white/50">
            Completa la información requerida
          </p>
        </div>
      </div>

      {/* FORM */}
      <form className="space-y-4">

        {/* TITULO */}
        <div>
          <label className={labelStyle}>Título</label>
          <input
            placeholder="Ej. Sistema de detección de vulnerabilidades con IA"
            className={inputStyle}
          />
        </div>

        {/* AREA */}
        <div>
          <label className={labelStyle}>Área de investigación</label>
          <input
            placeholder="Ej. Ingeniería de Software Inteligente"
            className={inputStyle}
          />
        </div>

        {/* INVESTIGADOR */}
        <div>
          <label className={labelStyle}>Investigador</label>
          <div className="relative">
            <User
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
            />
            <select className={`${inputStyle} pl-9 appearance-none`}>
              <option value="">Selecciona investigador</option>
              {usuarios.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.nombre} ({u.departamento})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* DEPARTAMENTO */}
        <div>
          <label className={labelStyle}>Departamento</label>
          <input
            disabled
            placeholder="Se asigna automáticamente"
            className={`${inputStyle} opacity-60 cursor-not-allowed`}
          />
        </div>

        {/* ESTADO + PRIORIDAD */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelStyle}>Estado</label>
            <select className={inputStyle}>
              {estados.map((e) => (
                <option key={e}>{e}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelStyle}>Prioridad</label>
            <select className={inputStyle}>
              {prioridades.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>
        </div>

        {/* FECHA */}
        <div>
          <label className={labelStyle}>Fecha límite</label>
          <input type="date" className={inputStyle} />
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-3 pt-6 border-t border-white/10">
          <button
            type="button"
            onClick={onRequestClose}
            className="px-4 py-2 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-all"
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-semibold tracking-wide shadow-lg shadow-red-900/40 transition-all active:scale-95"
          >
            Guardar Proyecto
          </button>
        </div>
      </form>

      {/* ANIMACION */}
      <style>
        {`
        @keyframes fadeIn {
          from { opacity:0; transform:scale(.96) }
          to { opacity:1; transform:scale(1) }
        }
        `}
      </style>
    </Modal>
  );
};

export default NuevoProyectoModal;