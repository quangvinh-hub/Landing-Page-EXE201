import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logoden2.png";

const navItems = [
  { id: "home", label: "Trang chủ" },
  { id: "features", label: "Tính năng" },
  { id: "how-it-works", label: "Cách hoạt động" },
  { id: "testimonials", label: "Đánh giá" },
  { id: "projects", label: "Hành trình" },
  { id: "about", label: "Về chúng tôi", isRoute: true, path: "/about" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  // Track scroll and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Only track sections on home page
      if (location.pathname === "/") {
        // Find active section
        const sections = navItems
          .filter((item) => !item.isRoute) // Only track non-route items
          .map((item) => {
            const section = document.getElementById(item.id);
            if (section) {
              return {
                id: item.id,
                offset: section.offsetTop - 100,
                height: section.offsetHeight,
              };
            }
            return null;
          })
          .filter(Boolean);

        const currentPosition = window.scrollY;
        const active = sections.find(
          (section) =>
            section &&
            currentPosition >= section.offset &&
            currentPosition < section.offset + section.height
        );

        if (active) {
          setActiveSection(active.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);

    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation and DOM to update before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80; // Header height offset
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80; // Header height offset
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <nav
        className={`max-w-7xl mx-auto px-8 py-4 rounded-full transition-all duration-500 border ${
          isMenuOpen
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-gray-200"
            : scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-md border-gray-200"
            : "bg-white/80 backdrop-blur-md border-gray-200"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo - Left */}
          <motion.div
            className="flex items-center shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-2 cursor-pointer"
            >
              <motion.img
                src={logo}
                alt="Trybes Logo"
                className="h-16 w-auto"
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </button>
          </motion.div>

          {/* Desktop Nav - Right aligned */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-end">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  if (item.isRoute && item.path) {
                    navigate(item.path);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    scrollToSection(item.id);
                  }
                }}
                className="group relative px-1 py-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className={`relative z-10 text-sm font-medium transition-all duration-300 ${
                    (item.isRoute && location.pathname === item.path) ||
                    (!item.isRoute &&
                      location.pathname === "/" &&
                      activeSection === item.id)
                      ? "text-[#6B5CF6] font-semibold"
                      : "text-gray-700 group-hover:text-[#6B5CF6]"
                  }`}
                >
                  {item.label}
                </span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[#6B5CF6]"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX:
                      (item.isRoute && location.pathname === item.path) ||
                      (!item.isRoute &&
                        location.pathname === "/" &&
                        activeSection === item.id)
                        ? 1
                        : 0,
                  }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ originX: 0 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Desktop CTA Button - Right */}
          <motion.div
            className="hidden md:flex items-center gap-3 shrink-0 ml-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.button
              onClick={() => scrollToSection("cta")}
              className="bg-[#6B5CF6] hover:bg-[#5A4DD5] text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-purple-500/20"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(107, 92, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Bắt đầu ngay
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#6B5CF6] focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden mt-4 bg-white/95 backdrop-blur-md rounded-3xl border border-gray-200 shadow-xl overflow-hidden"
            >
              <div className="px-6 py-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      if (item.isRoute && item.path) {
                        navigate(item.path);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setIsMenuOpen(false);
                      } else {
                        scrollToSection(item.id);
                      }
                    }}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium ${
                      (item.isRoute && location.pathname === item.path) ||
                      (!item.isRoute &&
                        location.pathname === "/" &&
                        activeSection === item.id)
                        ? "text-[#6B5CF6] bg-purple-50 font-semibold"
                        : "text-gray-700 hover:text-[#6B5CF6] hover:bg-gray-50"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.button
                  onClick={() => scrollToSection("cta")}
                  className="w-full bg-[#6B5CF6] hover:bg-[#5A4DD5] text-white px-5 py-3 rounded-lg text-base font-medium mt-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Bắt đầu ngay
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
