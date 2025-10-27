import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import MainContent from "./components/MainContent";
import Background from "./components/Background";

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
        <div className="relative z-10 pt-16">
          <Header />
          <MainContent />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
