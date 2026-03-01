import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './paginas/Home'
import Proyectos from './paginas/Proyectos'
import Encuestas from './paginas/Encuestas'
import Dashboard from './paginas/Dashboard'
import Usuarios from './paginas/Usuarios'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/encuestas" element={<Encuestas />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/usuarios" element={<Usuarios />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App