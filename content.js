// ==== SỬA FILE NÀY LÀ CẬP NHẬT TOÀN BỘ PORTFOLIO (thay cho CV cố định) ====
window.CONTENT = {
  name: "Yen Bui Thai Tuan",
  role: "Backend Developer",
  location: "TP. Hồ Chí Minh",
  available: true, // hiện chấm xanh "Sẵn sàng trao đổi cơ hội mới"
  headline: "Xin chào, mình là Thái Tuấn, một Backend Developer tại VietBank",
  intro: "Mình viết dịch vụ bằng Java và Spring Boot, và đang cùng nhóm xây các job đối soát và quy trình tự động.",
  cv: "", // ví dụ "cv.pdf" nếu bạn đặt file CV vào thư mục này (nhớ cân nhắc số điện thoại trong CV)
  snapshot: [
    ["hiện tại", "VietBank"],
    ["lĩnh vực", "Fullstack"],
    ["công nghệ", "Java · Spring Boot"],
    ["hạ tầng", "K8s · Docker"]
  ],
  about: {
    paragraphs: [
      "Mình bắt đầu làm backend từ kỳ thực tập tại HD Bank cuối năm 2024, sau đó làm tiếp ở XperC và hiện ở VietBank. Mỗi nơi giúp mình học thêm một mảng: microservices và bảo mật, tối ưu truy vấn và xử lý bất đồng bộ.",
      "Mình thích những việc có kết quả nhìn thấy được, như rút ngắn thời gian phản hồi của API hay bớt một thao tác thủ công cho đội vận hành. Mình vẫn đang học hỏi từng ngày và rất mong được làm việc cùng những người giỏi hơn mình."
    ],
    facts: [
      ["Vị trí", "Backend Developer"],
      ["Học vấn", "Sai Gon University, 2021 – 2026"],
      ["Khu vực", "TP. Hồ Chí Minh"],
      ["Ngôn ngữ", "Java, Python"]
    ]
  },
  experience: [
    {
      period: "08/2026 – nay",
      title: "Backend Developer",
      org: "VietBank",
      desc: "Làm việc trong hệ thống thanh toán: viết job đối soát với VNPay bằng K8s CronJob và SFTP, xây quy trình tự động xử lý tài khoản thanh toán không hợp lệ."
    },
    {
      period: "01/2026 – 07/2026",
      title: "Backend Intern",
      org: "XperC",
      desc: "Phát triển hệ thống quản lý công ty bằng Java 17 và Spring Boot; tối ưu API, xử lý bất đồng bộ với RabbitMQ, batch job và migration bằng Liquibase."
    },
    {
      period: "12/2024 – 03/2025",
      title: "Backend Intern",
      org: "HD Bank",
      desc: "Tham gia code review, debug và tuning hiệu năng; hỗ trợ phát triển microservices với Spring Cloud, Eureka, API Gateway, bảo mật OAuth2 và JWT, cache Redis."
    }
  ],
  // Dự án nhóm theo nơi làm
  projects: [
    {
      place: "VietBank",
      period: "08/2026 – nay",
      items: [
        {
          title: "Job đối soát giao dịch với VNPay",
          flow: ["Trao đổi file qua SFTP", "K8s CronJob chạy định kỳ", "Đối soát giao dịch"],
          points: [
            "Viết job đối soát chạy theo lịch bằng Kubernetes CronJob.",
            "Dùng SFTP làm nơi trao đổi file đối soát với đối tác."
          ],
          tags: ["Java", "Kubernetes CronJob", "SFTP"]
        },
        {
          title: "Tự động xử lý tài khoản thanh toán không hợp lệ",
          note: "Dự án nội bộ của công ty nên mình chỉ mô tả ở mức tổng quan.",
          points: [
            "Xây quy trình tự động phát hiện và xử lý các tài khoản thanh toán không hợp lệ.",
            "Giúp đội vận hành đỡ phải xử lý thủ công."
          ],
          tags: ["Java", "Spring Boot", "Automation"]
        }
      ]
    },
    {
      place: "XperC",
      period: "01/2026 – 07/2026",
      items: [
        {
          title: "Tối ưu API cho hệ thống quản lý công ty",
          desc: "Mình tối ưu truy vấn bằng QueryDSL và MySQL, kết hợp xử lý bất đồng bộ với RabbitMQ và batch job theo lịch, quản lý migration bằng Liquibase.",
          bars: [["Thời gian phản hồi trước", "2s", 100], ["Sau khi tối ưu", "600ms", 30]],
          tags: ["Java 17", "Spring Boot", "QueryDSL", "RabbitMQ", "Liquibase"],
          wide: true
        }
      ]
    },
    {
      place: "HD Bank",
      period: "12/2024 – 03/2025",
      items: [
        {
          title: "Hỗ trợ phát triển microservices",
          desc: "Mình tham gia xây dựng và triển khai các dịch vụ với Spring Cloud, Eureka và API Gateway; làm việc với OAuth2 và JWT để bảo mật API, dùng Redis để cache và Docker Compose để chạy nhiều container.",
          tags: ["Spring Cloud", "OAuth2 / JWT", "Redis", "Docker Compose"],
          wide: true
        }
      ]
    }
  ],
  skills: {
    "Ngôn ngữ": ["Java", "Python"],
    "Backend": ["Spring Boot", "RESTful API", "Microservices", "Event-Driven"],
    "Dữ liệu & Messaging": ["MySQL", "RabbitMQ"],
    "Hạ tầng": ["Docker", "Kubernetes", "SFTP"]
  },
  contact: {
    email: "yentuan130803@gmail.com",
    github: "https://github.com/Taun0813",   // điền link GitHub nếu có
  }
};
