import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import ContactPage from "./components/pages/ContactPage/ContactPage";
import PortefolioPage from "./components/pages/PortefolioPage/PortefolioPage";
import ConceptArtPage from "./components/pages/PortefolioPage/ConceptArt/ConceptArtPage";
import ServicesPage from "./components/pages/ServicesPage/ServicesPage";
import ServicesEntreprisePage from "./components/pages/ServicesPage/Categorie/EntreprisePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portefolio" element={<PortefolioPage />} />
        <Route path="/portefolio/conceptArt" element={<ConceptArtPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route
          path="/services/entreprise"
          element={<ServicesEntreprisePage />}
        />
      </Routes>
    </div>
  );
}

export default App;
