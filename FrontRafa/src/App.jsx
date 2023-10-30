import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Catalogo from './pages/Catalogo'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="Catalogo" element={<Catalogo/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
