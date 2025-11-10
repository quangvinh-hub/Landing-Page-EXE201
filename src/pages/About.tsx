import {
  HeartIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  SparklesIcon,
  TrophyIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Về Chúng Tôi
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              TryBes - Nền tảng giáo dục nghề nghiệp tiên phong, giúp Gen Z khám
              phá đam mê và xây dựng tương lai qua trải nghiệm thực tế
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Mission */}
            <div
              className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <RocketLaunchIcon className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sứ Mệnh</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Trao quyền cho thế hệ trẻ Việt Nam khám phá nghề nghiệp lý tưởng
                thông qua trải nghiệm thực tế, kết nối với mentor chuyên nghiệp
                và xây dựng portfolio xác thực ngay từ khi còn đi học.
              </p>
            </div>

            {/* Vision */}
            <div
              className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <LightBulbIcon className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tầm Nhìn
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Trở thành nền tảng giáo dục nghề nghiệp số 1 Việt Nam, nơi mỗi
                học sinh đều có cơ hội khám phá tiềm năng, phát triển kỹ năng và
                tự tin bước vào thế giới nghề nghiệp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Câu Chuyện Của Chúng Tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hành trình từ ý tưởng đến hiện thực
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-duration="800">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-300 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full blur-3xl opacity-30"></div>
                <div className="relative z-10 text-center">
                  <div className="text-6xl font-bold text-purple-600 mb-4">
                    2025
                  </div>
                  <p className="text-2xl font-semibold text-gray-800">
                    Năm Thành Lập
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="800">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Khởi Đầu Từ Một Ý Tưởng
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  TryBes được sinh ra từ một quan sát đơn giản: Quá nhiều học
                  sinh Việt Nam chọn ngành học không phù hợp vì thiếu cơ hội
                  trải nghiệm thực tế trước khi đưa ra quyết định.
                </p>
                <p>
                  Chúng tôi tin rằng mỗi bạn trẻ đều xứng đáng có cơ hội "thử"
                  trước khi "chọn" - thử làm một dự án marketing thực tế, thử
                  code một app, thử thiết kế một thương hiệu... Tất cả đều có
                  mentor đồng hành và được xác nhận qua portfolio chuyên nghiệp.
                </p>
                <p>
                  Với sự kết hợp độc đáo giữa gamification, AI và mentorship,
                  TryBes biến hành trình khám phá nghề nghiệp thành một cuộc
                  phiêu lưu thú vị, đầy cảm hứng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Giá Trị Cốt Lõi
            </h2>
            <p className="text-xl text-gray-600">
              Những nguyên tắc định hình cách chúng tôi làm việc
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="0"
            >
              <div className="w-14 h-14 bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <UserGroupIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Học Viên Là Trung Tâm
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Mọi quyết định đều hướng đến việc tạo ra trải nghiệm học tập tốt
                nhất, giúp học viên phát triển toàn diện và đạt được mục tiêu.
              </p>
            </div>

            {/* Value 2 */}
            <div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <SparklesIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Đổi Mới Sáng Tạo
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Không ngừng cải tiến và ứng dụng công nghệ mới để mang đến
                phương pháp học tập hiện đại, hiệu quả và thú vị nhất.
              </p>
            </div>

            {/* Value 3 */}
            <div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <div className="w-14 h-14 bg-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <HeartIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Cộng Đồng Hỗ Trợ
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Xây dựng môi trường học tập tích cực, nơi mọi người cùng nhau
                phát triển, chia sẻ kinh nghiệm và động viên lẫn nhau.
              </p>
            </div>

            {/* Value 4 */}
            <div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="0"
            >
              <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <TrophyIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Chất Lượng Tuyệt Đối
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Cam kết cung cấp nội dung chất lượng cao, mentor chuyên nghiệp
                và dự án thực tế có giá trị, đảm bảo đầu ra rõ ràng.
              </p>
            </div>

            {/* Value 5 */}
            <div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
                <RocketLaunchIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Thực Hành Thực Tế
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Tin vào sức mạnh của "learning by doing" - học thông qua làm,
                không chỉ dừng lại ở lý thuyết mà phải ứng dụng vào thực tế.
              </p>
            </div>

            {/* Value 6 */}
            <div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <div className="w-14 h-14 bg-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                <LightBulbIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Minh Bạch & Tin Cậy
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Luôn minh bạch trong mọi hoạt động, xây dựng lòng tin với học
                viên, phụ huynh và đối tác thông qua chất lượng và uy tín.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Đội Ngũ Của Chúng Tôi
            </h2>
            <p className="text-xl text-gray-600">
              Những người đam mê giáo dục và công nghệ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Team Member 1 - Nguyễn Trần Huy Hoàng */}
            <div
              className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="0"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">HH</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Nguyễn Trần Huy Hoàng
              </h3>
              <p className="text-purple-600 font-semibold mb-4">
                Business Analyst
              </p>
              <p className="text-gray-700 leading-relaxed text-sm">
                Chuyên gia phân tích kinh doanh, đảm nhiệm việc nghiên cứu thị
                trường và chiến lược phát triển sản phẩm
              </p>
            </div>

            {/* Team Member 2 - Nguyễn Bình Long */}
            <div
              className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">NL</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Nguyễn Bình Long
              </h3>
              <p className="text-pink-600 font-semibold mb-4">
                Graphic Designer
              </p>
              <p className="text-gray-700 leading-relaxed text-sm">
                Nhà thiết kế đồ họa sáng tạo, chịu trách nhiệm về mọi khía cạnh
                visual và trải nghiệm thị giác của TryBes
              </p>
            </div>

            {/* Team Member 3 - Nguyễn Thành Danh */}
            <div
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">ND</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Nguyễn Thành Danh
              </h3>
              <p className="text-blue-600 font-semibold mb-4">
                Backend Developer
              </p>
              <p className="text-gray-700 leading-relaxed text-sm">
                Kỹ sư phát triển backend, xây dựng hệ thống server mạnh mẽ và
                API cho nền tảng TryBes
              </p>
            </div>

            {/* Team Member 4 - Hồ Hữu Phước */}
            <div
              className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="300"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">HP</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Hồ Hữu Phước
              </h3>
              <p className="text-indigo-600 font-semibold mb-4">
                Frontend Developer
              </p>
              <p className="text-gray-700 leading-relaxed text-sm">
                Lập trình viên frontend, tạo ra giao diện người dùng mượt mà và
                trải nghiệm tương tác tuyệt vời
              </p>
            </div>

            {/* Team Member 5 - Bùi Quang Vinh */}
            <div
              className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="400"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">BV</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Bùi Quang Vinh
              </h3>
              <p className="text-green-600 font-semibold mb-4">
                Frontend Developer
              </p>
              <p className="text-gray-700 leading-relaxed text-sm">
                Lập trình viên frontend, chuyên xây dựng các tính năng tương tác
                và tối ưu hiệu suất ứng dụng
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-12 shadow-2xl"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-5xl font-bold mb-2">100+</div>
                <p className="text-purple-100 text-lg">Học viên</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">10+</div>
                <p className="text-purple-100 text-lg">Mentor chuyên nghiệp</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">20+</div>
                <p className="text-purple-100 text-lg">Dự án thực tế</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">95%</div>
                <p className="text-purple-100 text-lg">Hài lòng</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div data-aos="fade-up" data-aos-duration="800">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sẵn sàng khám phá nghề nghiệp của bạn?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Tham gia TryBes ngay hôm nay và bắt đầu hành trình khám phá đam mê
              của bạn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/download"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Tải App Ngay
              </Link>
              <a
                href="https://www.facebook.com/profile.php?id=61583180806031"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all"
              >
                Tìm Hiểu Thêm
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
