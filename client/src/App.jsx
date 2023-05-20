import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Rent from "./pages/Rent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sewa" element={<Rent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
