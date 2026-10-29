// ==== SỬA FILE NÀY LÀ CẬP NHẬT TOÀN BỘ PORTFOLIO (thay cho CV cố định) ====
window.CONTENT = {
  name: "Yen Bui Thai Tuan",
  role: "Backend Developer",
  tagline: "Xây dựng hệ thống backend Java/Spring Boot nhanh, ổn định và dễ mở rộng.",
  location: "TP. Hồ Chí Minh",
  available: true, // hiện chấm xanh "Đang nhận việc"
  about: [
    "Backend Developer có kinh nghiệm thực tế trong phát triển và tối ưu hệ thống có khả năng mở rộng bằng Java 17 và Spring Boot: xây dựng RESTful API, xử lý bất đồng bộ với RabbitMQ, batch job và tối ưu cơ sở dữ liệu với MySQL, QueryDSL.",
    "Hiện làm Backend Developer tại VietBank, tập trung vào hệ thống thanh toán: đối soát giao dịch, tích hợp đối tác và tự động hóa vận hành. Nắm vững clean architecture, tối ưu hiệu năng và thiết kế hệ thống backend."
  ],
  skills: {
    "Ngôn ngữ": ["Java", "Python"],
    "Backend": ["Spring Boot", "RESTful API", "Microservices", "Event-Driven Architecture"],
    "Khác": ["MySQL", "RabbitMQ", "Docker", "Kubernetes", "SFTP"]
  },
  projects: [
    {
      title: "Job đối soát giao dịch với VNPay",
      desc: "Xây dựng job đối soát chạy định kỳ bằng Kubernetes CronJob, trao đổi file đối soát với đối tác qua SFTP.",
      tags: ["Java", "Kubernetes CronJob", "SFTP", "VNPay"],
      live: "",
      repo: ""
    },
    {
      title: "Tự động xử lý tài khoản thanh toán không hợp lệ",
      desc: "Xây dựng cơ chế tự động phát hiện và xử lý các tài khoản thanh toán không hợp lệ, giảm thao tác thủ công cho vận hành (dự án nội bộ công ty).",
      tags: ["Java", "Spring Boot", "Automation"],
      live: "",
      repo: ""
    },
    {
      title: "Hệ thống quản lý công ty — XperC",
      desc: "Tối ưu RESTful API với QueryDSL và MySQL, giảm thời gian phản hồi từ 2s xuống 600ms; duy trì API dưới 500ms nhờ tối ưu truy vấn và bộ nhớ.",
      tags: ["Java 17", "Spring Boot", "MySQL", "QueryDSL"],
      live: "",
      repo: ""
    },
    {
      title: "Xử lý bất đồng bộ & batch job",
      desc: "Triển khai xử lý bất đồng bộ với RabbitMQ, batch job chạy theo lịch, quản lý migration CSDL bằng Liquibase và xử lý các vấn đề request/transaction đồng thời.",
      tags: ["RabbitMQ", "Liquibase", "Batch"],
      live: "",
      repo: ""
    },
    {
      title: "Microservices tại HD Bank",
      desc: "Tham gia phát triển và triển khai microservices với Spring Cloud, Eureka, API Gateway; bảo mật bằng OAuth2 và JWT; cache Redis, đóng gói bằng Docker Compose.",
      tags: ["Spring Cloud", "OAuth2/JWT", "Redis", "Docker"],
      live: "",
      repo: ""
    }
  ],
  experience: [
    {
      period: "08/2026 – nay",
      title: "Backend Developer",
      org: "VietBank",
      points: [
        "Phát triển và vận hành các dịch vụ backend cho hệ thống thanh toán.",
        "Xây dựng job đối soát với VNPay bằng Kubernetes CronJob, trao đổi file qua SFTP.",
        "Xây dựng chức năng tự động xử lý tài khoản thanh toán không hợp lệ."
      ]
    },
    {
      period: "01/2026 – 07/2026",
      title: "Internship Backend Dev",
      org: "XperC",
      points: [
        "Phát triển hệ thống quản lý công ty bằng Java 17 và Spring Boot.",
        "Tối ưu RESTful API với QueryDSL và MySQL, giảm response time từ 2s xuống 600ms.",
        "Triển khai xử lý bất đồng bộ với RabbitMQ và batch job theo lịch; quản lý migration bằng Liquibase."
      ]
    },
    {
      period: "12/2024 – 03/2025",
      title: "Internship Backend Dev",
      org: "HD Bank",
      points: [
        "Tham gia code review, debug và tuning hiệu năng; làm việc với PostgreSQL, MySQL, thiết kế data model.",
        "Hỗ trợ phát triển microservices với Spring Cloud, Eureka, API Gateway; bảo mật OAuth2 và JWT.",
        "Thiết kế schema MongoDB/CSDL quan hệ, cache với Redis, chạy đa container bằng Docker Compose."
      ]
    }
  ],
  contact: {
    email: "yentuan130803@gmail.com",
    github: "https://github.com/Taun0813",
  }
};
