import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import ContactPage from "./components/pages/ContactPage/ContactPage";
import PortefolioPage from "./components/pages/PortefolioPage/PortefolioPage";
import ConceptArtPage from "./components/pages/PortefolioPage/ConceptArt/ConceptArtPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portefolio" element={<PortefolioPage />} />
        <Route path="/portefolio/conceptArt" element={<ConceptArtPage />} />
      </Routes>
    </div>
  );
}

export default App;
