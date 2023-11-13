import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import ContactPage from "./components/pages/ContactPage/ContactPage";
import PortefolioPage from "./components/pages/PortefolioPage/PortefolioPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portefolio" element={<PortefolioPage />} />
      </Routes>
    </div>
  );
}

export default App;
