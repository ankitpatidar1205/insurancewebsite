import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import Header from "./Components/Layout/Header";
import Contact from "./Components/Pages/Contact/Contact";
import Footer from "./Components/Pages/Footer/Footer";
import About from "./Components/Pages/About/About";
import PrivacyPolicy from "./Components/Policy/PrivacyPolicy";
import TermsConditions from "./Components/Policy/TermsConditions";
import { useEffect } from "react";
import RequestDemo from "./Components/Pages/RequestDemo/RequestDemo";
import Login from "./Components/Auth/Login";
import Dispatch from "./Components/Pages/Dispatch/Dispatch";

// ScrollToTop कंपोनेंट जो हर रूट बदलने पर पेज को ऊपर ले जाएगा
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <ScrollToTop /> {/* यह कंपोनेंट हर रूट बदलने पर स्क्रॉल टू टॉप करेगा */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
         <Route path="/dispatch" element={<Dispatch />} />
        <Route path="/request-demo" element={<RequestDemo />} />
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