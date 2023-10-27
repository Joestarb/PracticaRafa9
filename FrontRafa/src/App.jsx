import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./Components/Test";
import Index from "./pages/Index";
import Loginp from "./pages/Loginp";
import Registrop from "./pages/Registrop";
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/test" element={<Test />} />
          <Route path="/login" element={<Loginp />} />
          <Route path="/registro" element={<Registrop />} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
