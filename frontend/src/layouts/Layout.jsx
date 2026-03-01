import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/encuestas', label: 'Encuestas' },
  { to: '/usuarios', label: 'Usuarios' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/reportes', label: 'Reportes' },
];

const linkBase = 'transition';
const desktopLink = ({ isActive }) =>
  `${linkBase} ${isActive ? 'text-black font-semibold' : 'text-gray-700 hover:text-black'}`;

const mobileLink = ({ isActive }) =>
  `block px-4 py-3 rounded-lg ${isActive ? 'bg-gray-100 text-black font-semibold' : 'text-gray-700 hover:bg-gray-50'}`;

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo + título */}
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
                <img
                  src="/img/tecmm.png"
                  alt="Logo TECMM"
                  className="w-12 h-12 object-contain"
                />
                <span className="text-xl font-semibold text-gray-900">TECMM</span>
              </Link>

              <span className="hidden lg:block text-gray-500 text-xs font-medium">
                Sistema de Encuestas y Proyectos
              </span>
            </div>

            {/* Nav desktop */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className={desktopLink}>
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Acciones derecha */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="text-gray-600 hover:text-black transition p-2"
                aria-label="Buscar"
              >
                <FiSearch size={20} />
              </button>

              {/* Botón hamburguesa (móvil/tablet) */}
              <button
                type="button"
                className="md:hidden text-gray-700 hover:text-black transition p-2"
                aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Menú móvil */}
        {menuOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-gray-200 bg-white">
            <nav className="max-w-7xl mx-auto px-4 py-3 space-y-1 text-sm">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={mobileLink}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
  <div className="max-w-7xl mx-auto px-6 py-14">

    <div className="grid md:grid-cols-4 gap-10">

      {/* LOGO + INFO */}
      <div>
        <div className="flex items-center gap-3">
          <img src="/img/tecmm.png" className="w-10" />
          <span className="font-semibold text-gray-900 text-lg">
            TECMM
          </span>
        </div>

        <p className="text-sm text-gray-500 mt-4 leading-relaxed">
          Plataforma académica para gestión de proyectos de investigación,
          encuestas y análisis de resultados institucionales.
        </p>
      </div>

      {/* NAVEGACIÓN */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-4">
          Navegación
        </h4>

        <ul className="space-y-2 text-sm text-gray-600">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/proyectos">Proyectos</Link></li>
          <li><Link to="/encuestas">Encuestas</Link></li>
          <li><Link to="/usuarios">Usuarios</Link></li>
        </ul>
      </div>

      {/* SISTEMA */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-4">
          Plataforma
        </h4>

        <ul className="space-y-2 text-sm text-gray-600">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/reportes">Reportes</Link></li>
          <li>Documentación</li>
          <li>Soporte técnico</li>
        </ul>
      </div>

      {/* CONTACTO */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-4">
          Contacto
        </h4>

        <ul className="space-y-2 text-sm text-gray-600">
          <li>soporte@tecmm.edu</li>
          <li>+52 33 0000 0000</li>
          <li>Zapopan, Jalisco</li>
        </ul>
      </div>

    </div>

    {/* BOTTOM */}
    <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} TECMM — Sistema de Proyectos y Encuestas Académicas
    </div>

  </div>
</footer>
    </>
  );
};

export default Layout;