import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import "./index.css";
import Homepage from "./Pages/Homepage";
import Infopage from "./Pages/Infopage";
import MyWorkPage from "./Pages/MyWorkPage";
import WorkWithMe from "./Pages/WorkWithMe";
import ConnectWithMe from "./Pages/ConnectWithMe";

// import SpaceBackground from "./Components/SpaceBackground";

// ScrollToTop component that will handle scrolling to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

const AppContent = () => {
  return (
    <>
      {/* <SpaceBackground /> */}

      {/* Main Navigation ------------------------------------*/}
      {/* ---------------------------------------------------*/}
      {/* ---------------------------------------------------*/}
      <Navigation />

      {/* Main Content Area ---------------------------------*/}
      {/* ---------------------------------------------------*/}
      {/* ---------------------------------------------------*/}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/info" element={<Infopage />} />
          <Route path="/my-work" element={<MyWorkPage />} />
          <Route path="/work-with-me" element={<WorkWithMe />} />
          <Route path="/connect-with-me" element={<ConnectWithMe />} />

          {/* Optional: 404 page - you can create a NotFound component later */}
          <Route path="*" element={<Homepage />} />
        </Routes>
      </main>

      {/* Footer --------------------------------------------*/}
      {/* ---------------------------------------------------*/}
      {/* ---------------------------------------------------*/}
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;
