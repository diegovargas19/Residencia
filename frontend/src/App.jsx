import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";
import Proyectos from "./paginas/Proyectos";
import Encuestas from "./paginas/Encuestas";
import Dashboard from "./paginas/Dashboard";
import Login from "./paginas/Login";
import Administracion from "./paginas/Administracion";
import Reportes from "./paginas/Reportes";

/* PÁGINAS DE PROYECTO */
import LayoutProyecto from "./layouts/LayoutProyecto";
import Resumen from "./paginas/proyecto/Resumen";
import Investigacion from "./paginas/proyecto/Investigacion";
import Archivos from "./paginas/proyecto/Archivos";
import Actividad from "./paginas/proyecto/Actividad";
import Configuracion from "./paginas/proyecto/Configuracion";

function App() {
  return (
    <Router>
      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Sistema interno */}
        <Route path="/app" element={<Layout />}>

          {/* Página principal */}
          <Route index element={<Proyectos />} />

          <Route path="encuestas" element={<Encuestas />} />
          <Route path="administracion" element={<Administracion />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="reportes" element={<Reportes />} />

          {/* ========================= */}
          {/* MÓDULO PROYECTO */}
          {/* ========================= */}

          <Route path="proyectos/:id" element={<LayoutProyecto />}>

            <Route index element={<Resumen />} />
            <Route path="resumen" element={<Resumen />} />
            <Route path="investigacion" element={<Investigacion />} />
            <Route path="archivos" element={<Archivos />} />
            <Route path="actividad" element={<Actividad />} />
            <Route path="configuracion" element={<Configuracion />} />

          </Route>

        </Route>

      </Routes>
    </Router>
  );
}

export default App;