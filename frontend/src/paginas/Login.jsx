import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/app");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#070f1f] overflow-hidden">

      {/* Background waves */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/waves.jpg"
          alt="background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Card */}
      <div className="relative z-10 w-[950px] h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/5 backdrop-blur-2xl flex">

        {/* LEFT PANEL */}
        <div className="w-1/2 p-12 flex flex-col justify-between backdrop-blur-xl bg-white/10 border-r border-white/20">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/img/tecmm.png"
              alt="TECMM"
              className="w-18 h-14 object-contain"
            />
            <div>
              <h1 className="font-semibold text-lg text-white">
                TECMM
              </h1>
              <p className="text-sm text-white/70">
                Sistema de Encuestas y Proyectos
              </p>
            </div>
          </div>

          {/* Texto */}
          <div>
            <h2 className="text-4xl font-bold leading-tight mb-4 text-white">
              Plataforma institucional
              <br />
              de investigación
            </h2>

            <p className="text-white/70 text-lg">
              Gestiona proyectos académicos, encuestas y reportes desde un solo lugar.
            </p>
          </div>

          {/* Footer */}
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} TECMM · Todos los derechos reservados
          </p>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-1/2 bg-white text-gray-800 flex items-center justify-center">

          <div className="w-[75%]">

            <h2 className="text-2xl font-semibold mb-2 text-center">
              Bienvenido
            </h2>

            <p className="text-gray-500 text-center mb-8">
              Ingresa tus credenciales para acceder al sistema
            </p>

           <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Email */}
              <div>
                <label className="text-sm text-gray-600">
                  Correo institucional
                </label>
                <input
                  type="email"
                  placeholder="usuario@tecmm.edu.mx"
                  className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              {/* Password */}
              <div>
                <label className="text-sm text-gray-600">
                  Contraseña
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              {/* Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-medium text-white bg-red-700 hover:opacity-90 transition"
              >
                Iniciar sesión
              </button>
            </form>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;