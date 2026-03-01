import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Proyectos from "./paginas/Proyectos";
import Encuestas from "./paginas/Encuestas";
import Dashboard from "./paginas/Dashboard";
import Login from "./paginas/Login";
import Administracion from "./paginas/Administracion";
import Reportes from "./paginas/Reportes";

function App() {
  return (
    <Router>
      <Routes>

        {/* Login como página principal */}
        <Route path="/" element={<Login />} />

        {/* Páginas internas con layout */}
        <Route path="/app" element={<Layout />}>
          <Route index element={<Proyectos />} />
          <Route path="encuestas" element={<Encuestas />} />
          <Route path="administracion" element={<Administracion />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="reportes" element={<Reportes />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;