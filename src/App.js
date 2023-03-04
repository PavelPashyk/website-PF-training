import "./styles/main.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Contacts } from "./pages/Contacts";
import { ProjectOne } from "./pages/ProjectOne";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <ScrollToTop />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project-one/:idd" element={<ProjectOne />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
