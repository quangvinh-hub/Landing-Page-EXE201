import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Background from "./components/Background";
import MainContent from "./components/MainContent";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import About from "./pages/About";
import Download from "./pages/Download";

function App() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false, // Animations sẽ lặp lại mỗi khi scroll
      mirror: true, // Animation chạy cả khi scroll lên
      offset: 100,
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen relative">
        <Background />
        <div className="relative z-10">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="pt-16">
                    <Header />
                    <MainContent />
                    <Footer />
                  </div>
                </>
              }
            />
            <Route path="/download" element={<Download />} />
            <Route
              path="/about"
              element={
                <>
                  <Header />
                  <About />
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
