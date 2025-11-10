import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Background from "../components/Background";
import Header from "../layout/Header";

export default function Download() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen relative">
      <Background />

      <div className="relative z-10">
        <div className="pt-16">
          <Header />
        </div>

        <div className="flex items-center justify-center px-6 py-20 min-h-[calc(100vh-80px)]">
          <div className="max-w-7xl w-full mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
              {/* Left Side - Penguin/Character Animation */}
              <div
                className="flex-1 flex items-center justify-center"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="relative w-full max-w-lg">
                  {/* Penguin Animation */}
                  <div className="relative z-10">
                    <DotLottieReact
                      src="https://lottie.host/10483284-7e5f-4dd0-9bff-d587413d77c6/H63Uky2JBA.lottie"
                      loop
                      autoplay
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - Download Content */}
              <div
                className="flex-1 text-center lg:text-left"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <h1
                  className="text-5xl lg:text-6xl font-bold mb-6"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <span className="bg-gradient-to-r from-violet-600 via-[#6B5CF6] to-violet-600 bg-clip-text text-transparent">
                    TẢI{" "}
                  </span>
                  <span className="bg-gradient-to-r from-[#6B5CF6] via-[#8B7CF8] to-[#6B5CF6] bg-clip-text text-transparent">
                    TRYBES
                  </span>
                </h1>

                <p
                  className="text-xl text-gray-800 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  Khám phá nghề nghiệp qua dự án thực tế. Học cùng mentor Gen Z,
                  xây dựng portfolio chuyên nghiệp và kiếm XP như chơi game.
                </p>

                {/* Download Buttons */}
                <div
                  className="space-y-4 mb-8 flex flex-col items-center lg:items-start"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="400"
                >
                  {/* APK Download Button */}
                  <a
                    href="#"
                    className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 w-full max-w-md border-2 border-gray-900"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 9l-7 7-7-7"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                      />
                    </svg>
                    <span className="text-base">Tải APK (Android)</span>
                  </a>

                  {/* Store Buttons Row */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                    {/* App Store Button - Coming Soon */}
                    <button
                      disabled
                      className="relative flex items-center justify-center gap-2 bg-white/80 text-gray-800 px-4 py-3 rounded-xl font-semibold transition-all shadow-md w-full cursor-not-allowed"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      <div className="flex flex-col items-start">
                        <span className="text-xs leading-tight">
                          Đang ra mắt
                        </span>
                        <span className="text-sm font-bold leading-tight">
                          App Store
                        </span>
                      </div>
                      <span className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-0.5 rounded-full">
                        Coming Soon
                      </span>
                    </button>

                    {/* Google Play Button */}
                    <a
                      href="https://play.google.com/store"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg hover:scale-105 w-full"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                      <div className="flex flex-col items-start">
                        <span className="text-xs leading-tight">Có trên</span>
                        <span className="text-sm font-bold leading-tight">
                          Google Play
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Info Notes */}
                <div
                  className="space-y-2 flex flex-col items-center lg:items-start"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="500"
                >
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-medium">iOS Coming soon</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-medium">
                      Hỗ trợ Android 8.0 trở lên
                    </span>
                  </div>
                </div>

                {/* Social Media Follow Section */}
                <div
                  className="mt-8 pt-6 border-t border-gray-200 flex flex-col items-center lg:items-start"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="600"
                >
                  <p className="text-gray-800 font-semibold mb-3 text-sm">
                    📱 Theo dõi để cập nhật phiên bản mới!
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/profile.php?id=61583180806031"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#1877F2] hover:bg-[#166FE5] text-white px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105 shadow-md"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      <span className="text-sm">Facebook</span>
                    </a>
                    <a
                      href="https://www.instagram.com/trybes.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F56040] hover:opacity-90 text-white px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105 shadow-md"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      <span className="text-sm">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
