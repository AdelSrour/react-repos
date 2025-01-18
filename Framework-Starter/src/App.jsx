import { BrowserRouter, Route, Routes } from "react-router-dom";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

//Fontawesome
import "@fortawesome/fontawesome-free/css/all.min.css";

//Components
import Header from "./componets/header/Header";
import Footer from "./componets/footer/Footer";

//Pages
import Home from "./pages/home/Home";
import Portfoilo from "./pages/portfoilo/Portfoilo";
import Contact from "./pages/contact/Contact";

export default function App() {
  return (
    <>
      <BrowserRouter basename="/etc/react-starter">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfoilo" element={<Portfoilo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
