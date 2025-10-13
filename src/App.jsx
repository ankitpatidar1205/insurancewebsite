import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import AuthPage from "./Authorization/WebsiteAuth/AuthPage";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Home from "./Website/Home/Home";
import BookingPage from "./Website/Home/SearchCar/BookingPage";
import Navbar from "./Layout/Navbar";
import Sidebar from "./Layout/Sidebar";
import Dashboard from "./Booking-Dashboard/Dashboard/Dashboard";
import Bookings from "./Booking-Dashboard/MyBooking/Bookings";
import Triphistory from "./Booking-Dashboard/MyProfile/MyProfile.jsx";
import SearchCarOutstation from "./Website/Home/SearchCar/SearchCarOutstation.jsx";
import SearchCarLocal from "./Website/Home/SearchCar/SearchCarLocal.jsx";
import Register from "./Authorization/WebsiteAuth/Register.jsx";
import ForgotPassword from "./Authorization/WebsiteAuth/ForgotPassword.jsx";
import ResetPassword from "./Authorization/WebsiteAuth/ResetPassword.jsx";
import MyProfile from "./Booking-Dashboard/MyProfile/MyProfile.jsx";
import SearchCarTransfer from "./Website/Home/SearchCar/SearchCarTransfer.jsx";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => window.innerWidth <= 768;
    if (checkIfMobile()) {
      setIsSidebarCollapsed(true);
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  const location = useLocation();

  // ===== Check for Auth Pages =====
const hideLayout =
  location.pathname === "/sign-in" ||
  location.pathname === "/register" ||
  location.pathname === "/forgot-password" ||
 location.pathname.startsWith("/reset-password");


  return (
    <>
      {hideLayout ? (
        // ================= AUTH LAYOUT (No header/footer/navbar/sidebar) =================
        <Routes>
          <Route path="/sign-in" element={<AuthPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/" element={<Navigate to="/website" />} />
        </Routes>
      ) : (
        <Routes>
          {/* ================= WEBSITE LAYOUT (Header + Footer + Pages) ================= */}
          <Route
            path="/website/*"
            element={
              <>
                <Header />
                <div className="website-content">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="searchcar" element={<SearchCarOutstation />} />
                    <Route path="searchcarlocal" element={<SearchCarLocal />} />
                      <Route path="searchcartransfer" element={<SearchCarTransfer />} />
                    <Route path="booking" element={<BookingPage />} />
                  </Routes>
                </div>
                <Footer />
              </>
            }
          />

          {/* Redirect `/` to `/website` so default is Home page */}
          <Route path="/" element={<Navigate to="/website" />} />

          {/* ================= DASHBOARD LAYOUT (Navbar + Sidebar + Pages) ================= */}
          <Route
            path="/dashboard/*"
            element={
              <>
                <Navbar toggleSidebar={toggleSidebar} />
                <div className="main-content">
                  <Sidebar
                    collapsed={isSidebarCollapsed}
                    setCollapsed={setIsSidebarCollapsed}
                  />
                  <div
                    className={`right-side-content ${
                      isSidebarCollapsed ? "collapsed" : ""
                    }`}
                  >
                    <Routes>
                      <Route path="dashboard" element={<Dashboard />} />
                      <Route path="bookings" element={<Bookings />} />
                      <Route path="my-profile" element={<MyProfile />} />
                    </Routes>
                  </div>
                </div>
              </>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
