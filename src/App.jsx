import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import ContactPage from "./components/pages/ContactPage/ContactPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
