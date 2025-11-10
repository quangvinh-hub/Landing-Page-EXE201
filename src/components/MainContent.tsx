import {
  BriefcaseIcon,
  ChartBarIcon,
  CheckBadgeIcon,
  ClockIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  LightBulbIcon,
  PaintBrushIcon,
  SparklesIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState } from "react";
import { Link } from "react-router-dom";

type ProjectDetail = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  gradient: string;
  context: string;
  challenge: string;
  solution: string[];
  results: string[];
  learnings: string[];
  tags: string[];
  tagColor: string;
};

export default function MainContent() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(
    null
  );
  const [flippingCard, setFlippingCard] = useState<string | null>(null);

  const handleCardClick = (project: ProjectDetail) => {
    setFlippingCard(project.id);
    // Wait for flip animation before showing modal
    setTimeout(() => {
      setSelectedProject(project);
      setFlippingCard(null);
    }, 400);
  };

  const projectDetails: ProjectDetail[] = [
    {
      id: "biboo",
      title: "Biboo Clothing",
      subtitle: "Tái Định Vị Thương Hiệu Thời Trang Sau Đại Dịch",
      category: "Thời Trang",
      gradient: "from-[#6B5CF6] to-[#8B7CF8]",
      context:
        "Biboo Clothing, một thương hiệu thời trang từng rất thành công, đã phải đối mặt với nhiều thách thức sau đại dịch COVID-19, bao gồm doanh thu sụt giảm và hình ảnh thương hiệu lỗi thời trong mắt khách hàng trẻ.",
      challenge:
        "Làm thế nào để Biboo Clothing có thể lấy lại vị thế, thu hút khách hàng mới và tăng cường tương tác trong bối cảnh thị trường cạnh tranh gay gắt?",
      solution: [
        "Chuyển đổi đối tượng mục tiêu từ giới trẻ sang 'Các bà mẹ thuộc thế hệ Millennials' (30-46 tuổi) mua sắm cho con gái (12-17 tuổi)",
        "Tập trung vào giá trị cốt lõi: chất lượng cao, độ bền và tính bền vững",
        "Kế hoạch truyền thông 3 tháng trên Facebook, TikTok Shop và Shopee",
        "Kết hợp với các hoạt động tại cửa hàng để tăng cường trải nghiệm khách hàng",
      ],
      results: [
        "Tạo được sự quan tâm từ phân khúc khách hàng mới",
        "Cải thiện nhận thức về chất lượng sản phẩm",
        "Tăng tương tác trên các nền tảng social media",
      ],
      learnings: [
        "Tầm quan trọng của nghiên cứu thị trường sâu rộng",
        "Sự linh hoạt trong việc điều chỉnh chiến lược phù hợp với bối cảnh kinh doanh thay đổi",
        "Xây dựng kế hoạch marketing toàn diện từ A-Z",
        "Quản lý ngân sách và phân bổ nguồn lực hiệu quả",
      ],
      tags: ["Tái định vị", "Social Media", "E-commerce"],
      tagColor: "bg-purple-100 text-[#6B5CF6]",
    },
    {
      id: "equiteach",
      title: "EquiTeach",
      subtitle: "Phá Vỡ Định Kiến Giới Tính Trong Giáo Dục Mầm Non",
      category: "Giáo Dục",
      gradient: "from-[#00A7E1] to-[#6B5CF6]",
      context:
        "Ngành giáo dục mầm non đang đối mặt với sự mất cân bằng giới tính nghiêm trọng, với rất ít giáo viên nam. Định kiến xã hội về vai trò của nam giới trong lĩnh vực này là một rào cản lớn.",
      challenge:
        "Làm thế nào để thay đổi nhận thức cộng đồng, khuyến khích nam giới theo đuổi nghề giáo viên mầm non và thúc đẩy sự bình đẳng giới trong giáo dục?",
      solution: [
        "Chiến dịch 'Breaking Stereotypes, Inspiring Careers' nhắm đến người trẻ 15-22 tuổi",
        "Sử dụng Facebook để đăng tải câu chuyện truyền cảm hứng và tài liệu tương tác",
        "Hội thảo 'SEED – MẦM XANH' với các buổi thực hành tương tác với trẻ nhỏ",
        "Tổ chức tham quan tại chỗ, trực tiếp tương tác với trẻ em và nhà giáo dục",
      ],
      results: [
        "Đạt hơn 100 người theo dõi trên Facebook trong giai đoạn đầu",
        "Nhận được phản hồi tích cực từ cộng đồng",
        "Tạo được sự quan tâm và thảo luận về vấn đề bình đẳng giới",
      ],
      learnings: [
        "Sử dụng marketing để tạo ra tác động xã hội tích cực",
        "Xây dựng chiến dịch truyền thông có ý nghĩa",
        "Tổ chức sự kiện tương tác để thay đổi nhận thức cộng đồng",
        "Kỹ năng storytelling cho social cause marketing",
      ],
      tags: ["Social Impact", "Community", "Events"],
      tagColor: "bg-cyan-100 text-[#00A7E1]",
    },
    {
      id: "asteria",
      title: "Asteria Comodo",
      subtitle: "Chiến Dịch Khuyến Mãi Mùa Thu Cho Khách Sạn Cao Cấp",
      category: "Hospitality",
      gradient: "from-[#8B7CF8] to-[#5A4DD5]",
      context:
        "Asteria Comodo, một khách sạn sang trọng tại Nha Trang, cần một chiến dịch marketing hiệu quả để thu hút khách hàng trong mùa thấp điểm (mùa mưa từ tháng 9 đến tháng 12).",
      challenge:
        "Làm thế nào để tăng công suất phòng, doanh thu và tương tác khách hàng trong giai đoạn du lịch trầm lắng, đồng thời duy trì hình ảnh thương hiệu cao cấp?",
      solution: [
        "Biến mùa mưa thành trải nghiệm độc đáo và lãng mạn",
        "5 gói Combo đặc biệt: Autumn of Love, Business Retreat, Family Fun, Relax & Heal, Single Combo",
        "Chương trình khách hàng thân thiết với quà tặng và email marketing",
        "Chiến dịch UGC với hashtag #AsteriaRainyDay trên Facebook và TikTok",
        "Hợp tác với Influencers để quảng bá trải nghiệm sang trọng",
        "Tập trung tăng điểm đánh giá trên Google Maps",
      ],
      results: [
        "Tạo được sự khác biệt trong mùa thấp điểm",
        "Xây dựng được các gói dịch vụ độc đáo và hấp dẫn",
        "Tăng nhận diện thương hiệu qua chiến dịch UGC",
      ],
      learnings: [
        "Marketing trong ngành dịch vụ khách sạn",
        "Phân tích thị trường và xác định đối tượng khách hàng",
        "Thiết kế gói dịch vụ hấp dẫn phù hợp với từng phân khúc",
        "Biến thách thức (mùa thấp điểm) thành cơ hội kinh doanh",
        "Triển khai chiến dịch truyền thông đa kênh",
      ],
      tags: ["Service Design", "Influencer", "UGC"],
      tagColor: "bg-purple-100 text-[#5A4DD5]",
    },
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section
        data-aos="fade-up"
        data-aos-duration="800"
        id="home"
        className="bg-transparent py-20 px-6 min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Side - Content */}
            <div
              className="flex-1 text-center lg:text-left"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-violet-300 via-[#6B5CF6] to-violet-300 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(107,92,246,0.3)]">
                  Biến việc học nghề thành
                </span>
                <br />
                <span className="bg-gradient-to-r from-indigo-500 via-[#8B7CF8] to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_6px_16px_rgba(107,92,246,0.5)] animate-pulse [-webkit-text-stroke:1px_rgba(107,92,246,0.3)]">
                  phiêu lưu
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                TryBes - Nền tảng trải nghiệm nghề nghiệp gamified đầu tiên tại
                Việt Nam. Học qua dự án thực tế, được cố vấn bởi chuyên gia, xây
                dựng portfolio chuyên nghiệp.
              </p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <Link
                  to="/download"
                  className="bg-[#6B5CF6] hover:bg-[#5A4DD5] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105 inline-block"
                >
                  Bắt đầu hành trình
                </Link>
                <a
                  href="https://www.facebook.com/profile.php?id=61583180806031"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-50 text-[#6B5CF6] px-8 py-4 rounded-lg text-lg font-semibold transition-all border-2 border-[#6B5CF6] hover:scale-105 inline-block"
                >
                  Tìm hiểu thêm
                </a>
              </div>

              {/* Stats */}
              <div
                className="mt-12 grid grid-cols-3 gap-6"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#6B5CF6]">100+</div>
                  <div className="text-sm text-gray-600 mt-1">Học viên</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#6B5CF6]">10+</div>
                  <div className="text-sm text-gray-600 mt-1">Mentor</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#6B5CF6]">20+</div>
                  <div className="text-sm text-gray-600 mt-1">Dự án</div>
                </div>
              </div>
            </div>

            {/* Right Side - Penguin Animation */}
            <div
              className="flex-1 flex items-center justify-center"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <div className="relative w-full max-w-lg">
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 to-violet-200/30 rounded-full blur-3xl"></div>

                {/* Penguin Animation */}
                <div className="relative z-10">
                  <DotLottieReact
                    src="https://lottie.host/10483284-7e5f-4dd0-9bff-d587413d77c6/H63Uky2JBA.lottie"
                    loop
                    autoplay
                    className="w-full h-auto"
                  />
                </div>

                {/* Floating badges around penguin */}

                <div
                  className="absolute top-1/3 -right-4 bg-white rounded-lg shadow-lg p-3 animate-bounce"
                  style={{ animationDelay: "1s", animationDuration: "3s" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-purple-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
                    />
                  </svg>
                </div>
                <div
                  className="absolute bottom-20 -left-6 bg-white rounded-lg shadow-lg p-3 animate-bounce"
                  style={{ animationDelay: "2s", animationDuration: "3s" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-yellow-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tại sao chọn TryBes?
            </h2>
            <p className="text-xl text-gray-600">
              Nền tảng kết hợp hoàn hảo giữa học tập, thực hành và gamification
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 - Dự án thực tế */}
            <div
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BriefcaseIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Dự án thực tế
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Làm việc trên các dự án thực tế từ doanh nghiệp, không chỉ lý
                thuyết suông
              </p>
            </div>

            {/* Feature 2 - Mentor Gen Z */}
            <div
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <div className="w-14 h-14 bg-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <UsersIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Mentor Gen Z
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Được hướng dẫn trực tiếp bởi các "Thủ Lĩnh" - chuyên gia trẻ đam
                mê
              </p>
            </div>

            {/* Feature 3 - Gamification */}
            <div
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="300"
            >
              <div className="w-14 h-14 bg-indigo-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <SparklesIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Gamification
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Kiếm XP, nhận huy hiệu, xây dựng portfolio qua các "Hành Trình"
                thú vị
              </p>
            </div>

            {/* Feature 4 - AI Trybie */}
            <div
              className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <SparklesIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                AI Trybie
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Trợ lý AI đồng hành 24/7, hỗ trợ học tập và giải đáp thắc mắc
              </p>
            </div>

            {/* Feature 5 - Portfolio xác thực */}
            <div
              className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <div className="w-14 h-14 bg-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <CheckBadgeIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Portfolio xác thực
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Xây dựng hồ sơ năng lực được Mentor xác nhận, tăng cơ hội nghề
                nghiệp
              </p>
            </div>

            {/* Feature 6 - Cộng đồng sôi nổi */}
            <div
              className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="300"
            >
              <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GlobeAltIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Cộng đồng sôi nổi
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Kết nối với "Bộ Lạc", học hỏi và cạnh tranh lành mạnh cùng bạn
                bè
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hành trình của bạn tại TryBes
            </h2>
            <p className="text-xl text-gray-600">
              Từ khám phá bản thân đến trở thành chuyên gia
            </p>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div
              className="flex flex-col lg:flex-row gap-8 items-center"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="lg:w-1/3">
                <div className="bg-[#6B5CF6] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 mx-auto lg:mx-0">
                  1
                </div>
              </div>
              <div className="lg:w-2/3 bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                  Khám phá & Định hướng
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Làm trắc nghiệm "Dấu Ấn Năng Lực", khám phá các "Vùng Đất Nghề
                  Nghiệp" và học kiến thức nền tảng với AI Trybie.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                    Trắc nghiệm tính cách
                  </span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                    Khám phá ngành nghề
                  </span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                    Học với AI
                  </span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div
              className="flex flex-col lg:flex-row-reverse gap-8 items-center"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div className="lg:w-1/3">
                <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 mx-auto lg:mx-0">
                  2
                </div>
              </div>
              <div className="lg:w-2/3 bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                    />
                  </svg>
                  Chọn Hành Trình
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Chọn dự án phù hợp với sở thích, gặp gỡ Thủ Lĩnh (Mentor) và
                  gia nhập "Bộ Lạc" của bạn.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    Chọn dự án
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    Gặp Mentor
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    Tham gia nhóm
                  </span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div
              className="flex flex-col lg:flex-row gap-8 items-center"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="lg:w-1/3">
                <div className="bg-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 mx-auto lg:mx-0">
                  3
                </div>
              </div>
              <div className="lg:w-2/3 bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                    />
                  </svg>
                  Thực chiến dự án
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Làm việc trên dự án thực tế trong 2-4 tuần, nhận phản hồi liên
                  tục từ Mentor và cộng đồng.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                    Kick-off meeting
                  </span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                    Thực hiện task
                  </span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                    Nhận feedback
                  </span>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div
              className="flex flex-col lg:flex-row-reverse gap-8 items-center"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div className="lg:w-1/3">
                <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 mx-auto lg:mx-0">
                  4
                </div>
              </div>
              <div className="lg:w-2/3 bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                    />
                  </svg>
                  Hoàn thành & Nhận thưởng
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nộp sản phẩm cuối, nhận huy hiệu, cập nhật portfolio và sẵn
                  sàng cho hành trình tiếp theo!
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                    Huy hiệu
                  </span>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                    Portfolio
                  </span>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                    Xác thực Mentor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Projects Showcase Section */}
      <section id="marketing-projects" className="py-20 px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trải Nghiệm Ngành Marketing
            </h2>
            <p className="text-xl text-gray-600">
              Các Dự Án Thực Tế Từ Sinh Viên Tài Năng
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project 1: Biboo Clothing */}
            <div
              className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-in-out overflow-hidden group cursor-pointer hover:-translate-y-3 ${
                flippingCard === "biboo"
                  ? "animate-[flip_0.6s_ease-in-out]"
                  : ""
              }`}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              onClick={() => handleCardClick(projectDetails[0])}
              style={
                flippingCard === "biboo"
                  ? {
                      animation: "flip 0.6s ease-in-out",
                    }
                  : undefined
              }
            >
              <div className="h-48 bg-gradient-to-br from-[#6B5CF6] to-[#8B7CF8] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-20">
                    BIBOO
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-[#6B5CF6] font-semibold text-sm">
                    Thời Trang
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#6B5CF6] transition-colors">
                  Biboo Clothing
                </h3>
                <p className="text-sm text-[#6B5CF6] font-semibold mb-3">
                  Tái Định Vị Thương Hiệu Thời Trang Sau Đại Dịch
                </p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Chuyển đổi đối tượng mục tiêu sang "Các bà mẹ thuộc thế hệ
                  Millennials" (30-46 tuổi) với chiến lược tập trung vào chất
                  lượng, độ bền và tính bền vững.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2">
                    <span className="text-[#6B5CF6] font-semibold text-xs flex items-center gap-1">
                      <ChartBarIcon className="w-3.5 h-3.5" />
                      Thách thức:
                    </span>
                    <span className="text-gray-700 text-xs">
                      Doanh thu sụt giảm, hình ảnh lỗi thời
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#6B5CF6] font-semibold text-xs flex items-center gap-1">
                      <LightBulbIcon className="w-3.5 h-3.5" />
                      Giải pháp:
                    </span>
                    <span className="text-gray-700 text-xs">
                      Chiến dịch 3 tháng trên Facebook, TikTok, Shopee
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#6B5CF6] font-semibold text-xs flex items-center gap-1">
                      <SparklesIcon className="w-3.5 h-3.5" />
                      Học hỏi:
                    </span>
                    <span className="text-gray-700 text-xs">
                      Nghiên cứu thị trường & linh hoạt điều chỉnh
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-[#6B5CF6] text-xs px-3 py-1 rounded-full">
                    Tái định vị
                  </span>
                  <span className="bg-purple-100 text-[#6B5CF6] text-xs px-3 py-1 rounded-full">
                    Social Media
                  </span>
                  <span className="bg-purple-100 text-[#6B5CF6] text-xs px-3 py-1 rounded-full">
                    E-commerce
                  </span>
                </div>
              </div>
            </div>

            {/* Project 2: EquiTeach */}
            <div
              className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-in-out overflow-hidden group cursor-pointer hover:-translate-y-3 ${
                flippingCard === "equiteach"
                  ? "animate-[flip_0.6s_ease-in-out]"
                  : ""
              }`}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              onClick={() => handleCardClick(projectDetails[1])}
              style={
                flippingCard === "equiteach"
                  ? {
                      animation: "flip 0.6s ease-in-out",
                    }
                  : undefined
              }
            >
              <div className="h-48 bg-gradient-to-br from-[#00A7E1] to-[#6B5CF6] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-5xl font-bold opacity-20">
                    EQUITEACH
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-[#6B5CF6] font-semibold text-sm">
                    Giáo Dục
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#6B5CF6] transition-colors">
                  EquiTeach
                </h3>
                <p className="text-sm text-[#6B5CF6] font-semibold mb-3">
                  Phá Vỡ Định Kiến Giới Tính Trong Giáo Dục Mầm Non
                </p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Chiến dịch "Breaking Stereotypes, Inspiring Careers" nhằm thay
                  đổi nhận thức cộng đồng và khuyến khích nam giới theo đuổi
                  nghề giáo viên mầm non.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2">
                    <span className="text-[#6B5CF6] font-semibold text-xs flex items-center gap-1">
                      <ChartBarIcon className="w-3.5 h-3.5" />
                      Thách thức:
                    </span>
                    <span className="text-gray-700 text-xs">
                      Định kiến giới tính, mất cân bằng nghề nghiệp
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#6B5CF6] font-semibold text-xs flex items-center gap-1">
                      <LightBulbIcon className="w-3.5 h-3.5" />
                      Giải pháp:
                    </span>
                    <span className="text-gray-700 text-xs">
                      Hội thảo SEED, Facebook stories, tham quan thực tế
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#6B5CF6] font-semibold text-xs flex items-center gap-1">
                      <SparklesIcon className="w-3.5 h-3.5" />
                      Học hỏi:
                    </span>
                    <span className="text-gray-700 text-xs">
                      Marketing cho tác động xã hội tích cực
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-cyan-100 text-[#00A7E1] text-xs px-3 py-1 rounded-full">
                    Social Impact
                  </span>
                  <span className="bg-cyan-100 text-[#00A7E1] text-xs px-3 py-1 rounded-full">
                    Community
                  </span>
                  <span className="bg-cyan-100 text-[#00A7E1] text-xs px-3 py-1 rounded-full">
                    Events
                  </span>
                </div>
              </div>
            </div>

            {/* Project 3: Asteria Comodo */}
            <div
              className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-in-out overflow-hidden group cursor-pointer hover:-translate-y-3 ${
                flippingCard === "asteria"
                  ? "animate-[flip_0.75s_ease-in-out]"
                  : ""
              }`}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              onClick={() => handleCardClick(projectDetails[2])}
              style={
                flippingCard === "asteria"
                  ? {
                      animation: "flip 0.75s ease-in-out",
                    }
                  : undefined
              }
            >
              <div className="h-48 bg-gradient-to-br from-[#8B7CF8] to-[#5A4DD5] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-5xl font-bold opacity-20">
                    ASTERIA
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-[#6B5CF6] font-semibold text-sm">
                    Hospitality
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#6B5CF6] transition-colors">
                  Asteria Comodo
                </h3>
                <p className="text-sm text-[#6B5CF6] font-semibold mb-3">
                  Chiến Dịch Khuyến Mãi Mùa Thu Cho Khách Sạn Cao Cấp
                </p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Biến mùa thấp điểm thành cơ hội với các gói combo độc đáo:
                  Autumn of Love, Business Retreat, Family Fun và Relax & Heal
                  in the Fall.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2">
                    <span className="text-[#6B5CF6] font-semibold text-xs flex items-center gap-1">
                      <ChartBarIcon className="w-3.5 h-3.5" />
                      Thách thức:
                    </span>
                    <span className="text-gray-700 text-xs">
                      Tăng công suất trong mùa thấp điểm (mùa mưa)
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#6B5CF6] font-semibold text-xs flex items-center gap-1">
                      <LightBulbIcon className="w-3.5 h-3.5" />
                      Giải pháp:
                    </span>
                    <span className="text-gray-700 text-xs">
                      5 gói combo đặc biệt, UGC #AsteriaRainyDay
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#6B5CF6] font-semibold text-xs flex items-center gap-1">
                      <SparklesIcon className="w-3.5 h-3.5" />
                      Học hỏi:
                    </span>
                    <span className="text-gray-700 text-xs">
                      Biến thách thức thành cơ hội sáng tạo
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-[#5A4DD5] text-xs px-3 py-1 rounded-full">
                    Service Design
                  </span>
                  <span className="bg-purple-100 text-[#5A4DD5] text-xs px-3 py-1 rounded-full">
                    Influencer
                  </span>
                  <span className="bg-purple-100 text-[#5A4DD5] text-xs px-3 py-1 rounded-full">
                    UGC
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div
            className="mt-16 text-center"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <p className="text-lg text-gray-700 mb-6">
              Đây là một số ví dụ về những gì sinh viên của chúng tôi có thể làm
              được.
              <br />
              <span className="text-[#6B5CF6] font-semibold">
                Bạn có sẵn sàng trở thành người tiếp theo tạo ra tác động?
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Học viên nói gì về TryBes
            </h2>
            <p className="text-xl text-gray-600">
              Những câu chuyện thành công từ cộng đồng
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div
              className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="0"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#6B5CF6] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Minh Anh</h4>
                  <p className="text-sm text-gray-600">Học sinh lớp 8</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 italic">
                "Mình từng rất bối rối không biết nên học ngành gì. Sau khi thử
                dự án Marketing trên TryBes, mình đã tìm thấy đam mê và tự tin
                hơn rất nhiều!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  H
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Hoàng Long</h4>
                  <p className="text-sm text-gray-600">Học sinh lớp 7</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 italic">
                "Mentor của mình siêu nhiệt tình! Mỗi lần nộp bài đều được
                feedback chi tiết. Giờ mình đã có portfolio để apply các chương
                trình mùa hè rồi."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div
              className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  L
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Lan Phương</h4>
                  <p className="text-sm text-gray-600">Học sinh lớp 9</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 italic">
                "Cơ chế gamification quá hay! Mỗi lần làm xong task được XP và
                huy hiệu thấy phấn khích lắm. Học mà như chơi game vậy."
              </p>
            </div>

            {/* Testimonial 4 */}
            <div
              className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="0"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  K
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Khánh Linh</h4>
                  <p className="text-sm text-gray-600">Học sinh lớp 5</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 italic">
                "AI Trybie giúp mình học kiến thức nền rất hiệu quả. Hỏi gì cũng
                trả lời ngay, rất tiện khi làm bài tập buổi tối."
              </p>
            </div>

            {/* Testimonial 5 */}
            <div
              className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  Q
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Quang Dũng</h4>
                  <p className="text-sm text-gray-600">Học sinh lớp 8</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 italic">
                "Làm việc nhóm trên TryBes vui lắm! Cả bộ lạc cùng nhau giải
                quyết dự án, vừa học được kỹ năng mềm vừa có thêm nhiều bạn
                mới."
              </p>
            </div>

            {/* Testimonial 6 */}
            <div
              className="bg-gradient-to-br from-violet-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-violet-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  T
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Thu Trang</h4>
                  <p className="text-sm text-gray-600">Học sinh lớp 7</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 italic">
                "Dự án thực tế giúp mình hiểu nghề nghiệp là như thế nào. Không
                chỉ lý thuyết mà còn được trải nghiệm ngay, rất thiết thực!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects/Courses Section */}
      <section id="projects" className="py-20 px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Các Hành Trình đang chờ bạn
            </h2>
            <p className="text-xl text-gray-600">
              Khám phá những dự án thú vị từ nhiều lĩnh vực
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="0"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <ChartBarIcon className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <div className="text-sm text-[#6B5CF6] font-semibold mb-2">
                  MARKETING
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Xây Dựng Chiến Dịch Social Media
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Học cách lập kế hoạch và triển khai chiến dịch marketing trên
                  mạng xã hội cho một thương hiệu startup.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <ClockIcon className="w-4 h-4" />3 tuần
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <UsersIcon className="w-4 h-4" />
                    1-3 học viên
                  </span>
                </div>
                <button className="w-full bg-[#6B5CF6] hover:bg-[#5A4DD5] text-white py-3 rounded-lg font-semibold transition-all">
                  Khám phá ngay
                </button>
              </div>
            </div>

            {/* Project 2 */}
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <ComputerDesktopIcon className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <div className="text-sm text-purple-600 font-semibold mb-2">
                  LẬP TRÌNH
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Phát Triển Ứng Dụng Web Đầu Tiên
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Xây dựng một trang web hoàn chỉnh từ A-Z với HTML, CSS,
                  JavaScript cùng Mentor lập trình viên.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <ClockIcon className="w-4 h-4" />4 tuần
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <UsersIcon className="w-4 h-4" />
                    1-3 học viên
                  </span>
                </div>
                <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg font-semibold transition-all">
                  Khám phá ngay
                </button>
              </div>
            </div>

            {/* Project 3 */}
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <div className="h-48 bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                <PaintBrushIcon className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <div className="text-sm text-pink-600 font-semibold mb-2">
                  THIẾT KẾ
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Thiết Kế Bộ Nhận Diện Thương Hiệu
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Tạo logo, bảng màu, typography và hệ thống nhận diện thương
                  hiệu chuyên nghiệp với Figma.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <ClockIcon className="w-4 h-4" />3 tuần
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <UsersIcon className="w-4 h-4" />
                    1-3 học viên
                  </span>
                </div>
                <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold transition-all">
                  Khám phá ngay
                </button>
              </div>
            </div>

            {/* Project 4 */}
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="0"
            >
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <ChartBarIcon className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <div className="text-sm text-orange-600 font-semibold mb-2">
                  KINH DOANH
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Lập Kế Hoạch Kinh Doanh Startup
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Nghiên cứu thị trường, xây dựng business model canvas và pitch
                  deck cho ý tưởng kinh doanh.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <ClockIcon className="w-4 h-4" />3 tuần
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <UsersIcon className="w-4 h-4" />
                    10-15 học viên
                  </span>
                </div>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-all">
                  Khám phá ngay
                </button>
              </div>
            </div>

            {/* Project 5 */}
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="h-48 bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center">
                <SparklesIcon className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <div className="text-sm text-violet-600 font-semibold mb-2">
                  CONTENT
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Sáng Tạo Nội Dung Storytelling
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Viết content hấp dẫn, tạo kịch bản video và học cách kể chuyện
                  thương hiệu chuyên nghiệp.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <ClockIcon className="w-4 h-4" />2 tuần
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <UsersIcon className="w-4 h-4" />
                    8-12 học viên
                  </span>
                </div>
                <button className="w-full bg-violet-500 hover:bg-violet-600 text-white py-3 rounded-lg font-semibold transition-all">
                  Khám phá ngay
                </button>
              </div>
            </div>

            {/* Project 6 */}
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <div className="h-48 bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center">
                <SparklesIcon className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <div className="text-sm text-indigo-600 font-semibold mb-2">
                  VIDEO
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Sản Xuất Video TikTok/Reels
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Học cách quay, dựng và tối ưu video ngắn cho các nền tảng mạng
                  xã hội phổ biến nhất.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <ClockIcon className="w-4 h-4" />2 tuần
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <UsersIcon className="w-4 h-4" />
                    10-15 học viên
                  </span>
                </div>
                <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg font-semibold transition-all">
                  Khám phá ngay
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all">
              Xem tất cả Hành Trình →
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Sẵn sàng bắt đầu hành trình của bạn?
          </h2>
          <p className="text-xl text-gray-800 mb-8 leading-relaxed">
            Tham gia cùng hàng nghìn học sinh đang khám phá đam mê và xây dựng
            tương lai nghề nghiệp của mình tại TryBes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/download"
              className="bg-[#6B5CF6] hover:bg-[#5A4DD5] text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl inline-block"
            >
              Đăng ký miễn phí
            </Link>
            <a
              href="https://www.facebook.com/profile.php?id=61583180806031"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-[#6B5CF6] px-10 py-4 rounded-lg text-lg font-semibold transition-all border-2 border-[#6B5CF6] inline-block"
            >
              Tư vấn 1-1
            </a>
          </div>
          <p className="text-gray-700 mt-6 text-sm flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
            Dùng thử miễn phí 7 ngày • Không cần thẻ tín dụng
          </p>
        </div>
      </section>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]"
          onClick={() => setSelectedProject(null)}
          style={{
            animation: "fadeIn 0.3s ease-out",
          }}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-[modalFadeIn_0.4s_ease-out]"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: "modalFadeIn 0.4s ease-out",
            }}
          >
            {/* Header with gradient */}
            <div
              className={`bg-gradient-to-br ${selectedProject.gradient} p-8 relative`}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-900 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl transition-all hover:scale-110"
              >
                ×
              </button>
              <div className="text-white">
                <div className="inline-block bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                  <span className="text-[#6B5CF6] font-semibold text-sm">
                    {selectedProject.category}
                  </span>
                </div>
                <h2 className="text-4xl font-bold mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-xl opacity-90">{selectedProject.subtitle}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-6">
              {/* Context */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-3xl">📖</span>
                  Bối Cảnh Dự Án
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedProject.context}
                </p>
              </div>

              {/* Challenge */}
              <div className="bg-red-50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-3xl">📊</span>
                  Thách Thức Marketing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedProject.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <LightBulbIcon className="w-8 h-8 text-blue-600" />
                  Giải Pháp & Chiến Lược
                </h3>
                <ul className="space-y-3">
                  {selectedProject.solution.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="text-[#6B5CF6] font-bold text-lg mt-0.5">
                        •
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <ChartBarIcon className="w-8 h-8 text-green-600" />
                  Kết Quả
                </h3>
                <ul className="space-y-3">
                  {selectedProject.results.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="text-green-600 font-bold text-lg mt-0.5">
                        ✓
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learnings */}
              <div className="bg-purple-50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <SparklesIcon className="w-8 h-8 text-purple-600" />
                  Bài Học & Trải Nghiệm
                </h3>
                <ul className="space-y-3">
                  {selectedProject.learnings.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="text-[#6B5CF6] font-bold text-lg mt-0.5">
                        →
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Kỹ năng & Công cụ:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`${selectedProject.tagColor} px-4 py-2 rounded-full text-sm font-semibold`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-[#6B5CF6] to-[#8B7CF8] rounded-2xl p-6 text-center text-white mt-8">
                <p className="text-lg mb-4">Bạn muốn tạo ra dự án tương tự?</p>
                <Link
                  to="/download"
                  className="bg-white text-[#6B5CF6] px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all inline-block"
                >
                  Bắt Đầu Hành Trình Ngay
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
