import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import Header from "./Components/Layout/Header";
import Contact from "./Components/Pages/Contact/Contact";
import Footer from "./Components/Pages/Footer/Footer";
import About from "./Components/Pages/About/About";
import PrivacyPolicy from "./Components/Policy/PrivacyPolicy";
import TermsConditions from "./Components/Policy/TermsConditions";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;