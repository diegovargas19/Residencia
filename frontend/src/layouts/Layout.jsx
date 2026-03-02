import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { to: "/app", label: "Proyectos" },
  { to: "/app/encuestas", label: "Encuestas" },
  { to: "/app/administracion", label: "Administración" },
  { to: "/app/dashboard", label: "Dashboard" },
  { to: "/app/reportes", label: "Reportes" },
];

const linkBase = "transition";

const desktopLink = ({ isActive }) =>
  `${linkBase} ${
    isActive ? "text-white font-semibold" : "text-gray-400 hover:text-white"
  }`;

const mobileLink = ({ isActive }) =>
  `block px-4 py-3 rounded-lg ${
    isActive
      ? "bg-white/10 text-white font-semibold"
      : "text-gray-400 hover:bg-white/5 hover:text-white"
  }`;

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#070f1f] text-white">
      {/* HEADER */}
      <header className="w-full bg-[#070f1f] border-b border-white/10 sticky top-0 z-50 backdrop-blur">
        <div className="max-w-400 mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <Link
                to="/app"
                className="flex items-center gap-2"
                onClick={closeMenu}
              >
                <img
                  src="/img/tecmm.png"
                  alt="Logo TECMM"
                  className="w-12 h-12 object-contain"
                />
                <span className="text-xl font-semibold text-white">TECMM</span>
              </Link>

              <span className="hidden lg:block text-gray-400 text-xs font-medium">
                Sistema de Encuestas y Proyectos
              </span>
            </div>

            {/* NAV DESKTOP */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/app"}
                  className={desktopLink}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-2">
              <Link
                to="/"
                className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-red-800 hover:bg-red-700 text-white transition"
              >
                Iniciar sesión
              </Link>

              <button className="text-gray-400 hover:text-white transition p-2">
                <FiSearch size={20} />
              </button>

              {/* HAMBURGER */}
              <button
                className="md:hidden text-gray-400 hover:text-white transition p-2"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#070f1f]">
            <nav className="max-w-400 mx-auto px-6 lg:px-10 py-3 space-y-1 text-sm">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/app"}
                  className={mobileLink}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              ))}

              <Link
                to="/iniciar-sesion"
                onClick={closeMenu}
                className="block mt-3 px-4 py-3 rounded-lg text-center font-medium bg-red-500 text-white transition"
              >
                Iniciar sesión
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 w-full px-10 py-4">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 mt-2 mb-6 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TECMM — Sistema de Proyectos y Encuestas
        Académicas
      </footer>
    </div>
  );
};

export default Layout;