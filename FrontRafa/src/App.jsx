import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./Components/Test";
import HomePage from "./pages/HomePage";
import Index from "./pages/Index";
import Login from "./pages/Login";
import RecuperarContrasena from "./pages/RecuperarContrasena";
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/test" element={<Test />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/recuperar" element={<RecuperarContrasena/>} />
          <Route path="/homepage" element={<HomePage/>} />






        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
