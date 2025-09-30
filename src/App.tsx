import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import "./index.css";
import Homepage from "./Pages/Homepage";

const App = () => {
  return (
    <>
      {/* Main Navigation ------------------------------------*/}
      {/* ---------------------------------------------------*/}
      {/* ---------------------------------------------------*/}
      <Navigation />

      {/* Main Content Area ---------------------------------*/}
      {/* ---------------------------------------------------*/}
      {/* ---------------------------------------------------*/}
      <main className="main-content">{/* Page content will go here */}</main>
      <Homepage />
      {/* Footer --------------------------------------------*/}
      {/* ---------------------------------------------------*/}
      {/* ---------------------------------------------------*/}
      <Footer />
    </>
  );
};

export default App;
