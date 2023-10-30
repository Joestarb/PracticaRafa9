
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnadirTrabajadores from "./pages/AnadirTrabajadores";
import Catalogo from './pages/Catalogo';
import Homepage from "./pages/HomePage";
import Index from "./pages/Index";
import Login from "./pages/Login";
import QuesoyReceta from "./pages/QuesoyReceta";
import RecuperarContrasena from "./pages/RecuperarContrasena";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/Catalogo" element={<Catalogo/>} />
          <Route path="/homepage" element={<Homepage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Recuperar" element={<RecuperarContrasena/>} />
          <Route path="/Anadir" element={<AnadirTrabajadores/>} />
          <Route path="/anadirReceta" element={<QuesoyReceta/>} />




          


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
