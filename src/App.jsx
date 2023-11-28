import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import ContactPage from "./components/pages/ContactPage/ContactPage";
import PortefolioPage from "./components/pages/PortefolioPage/PortefolioPage";
import ConceptArtPage from "./components/pages/PortefolioPage/ConceptArt/ConceptArtPage";
import ServicesPage from "./components/pages/ServicesPage/ServicesPage";
import EntreprisePage from "./components/pages/ServicesPage/Categorie/Entreprise/EntreprisePage";
import InfluenceurPage from "./components/pages/ServicesPage/Categorie/Influenceur/InfluenceurPage";
import ParticulierPage from "./components/pages/ServicesPage/Categorie/Particulier/ParticulierPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portefolio" element={<PortefolioPage />} />
        <Route path="/portefolio/conceptArt" element={<ConceptArtPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/entreprise" element={<EntreprisePage />} />
        <Route path="/services/influenceur" element={<InfluenceurPage />} />
        <Route path="/services/particulier" element={<ParticulierPage />} />
      </Routes>
    </div>
  );
}

export default App;
