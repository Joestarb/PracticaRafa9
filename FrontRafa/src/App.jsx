import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
