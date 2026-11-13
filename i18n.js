// Vietnamese source text and English translations; technical names remain unchanged.
const portfolioTranslations = {
  "Trương Huy Thịnh · Engineering Portfolio": "Trương Huy Thịnh · Engineering Portfolio",
  "Trương Huy Thịnh": "Trương Huy Thịnh",
  "01 — Hồ sơ": "01 — Profile",
  "In / Lưu PDF ↗": "Print / Save PDF ↗",
  "Trương Huy Thịnh.": "Trương Huy Thịnh.",
  "Chuyên môn": "Specialization",
  "Địa điểm": "Location",
  "Liên hệ": "Contact",
  "Kinh nghiệm": "Work",
  "làm việc": "experience",
  "2020 — Hiện tại": "2020 — Present",
  "Đảm nhiệm vai trò Key Member trong nhóm phát triển backend .NET; tham gia phân tích, thiết kế, triển khai các chức năng cốt lõi và hỗ trợ các thành viên trong nhóm.": "Served as a key member of the .NET backend team, contributing to analysis, design, core implementation, and support for other team members.",
  "Làm quen với các dự án và nghiệp vụ trong công ty; chủ yếu phát triển các trang báo cáo và chức năng nghiệp vụ trên nền tảng .NET.": "Built familiarity with the company's projects and business domain, primarily developing reports and business features on .NET.",
  "Bắt đầu sự nghiệp ở vị trí fresher sau khi tốt nghiệp; chủ yếu phát triển các chức năng theo yêu cầu và đặc tả của dự án.": "Started my career as a graduate engineer, primarily implementing features according to project requirements and specifications.",
  "Hệ thống nghiệp vụ lõi của công ty, phục vụ phần lớn hoạt động vận hành hằng ngày. Các chức năng chính gồm quản lý khách hàng, hoa hồng, báo cáo và thêm hoặc cập nhật dữ liệu hàng loạt.": "A core business system supporting most day-to-day operations, including customer management, commissions, reporting, and bulk data inserts and updates.",
  "Hệ thống báo cáo dành riêng cho các Super VIP customers, cung cấp báo cáo tổng hợp cấp cao và hỗ trợ các yêu cầu phát sinh liên quan đến dữ liệu khách hàng nhạy cảm.": "A dedicated reporting system for Super VIP customers, providing high-level consolidated reports and handling ad hoc requests involving sensitive customer data.",
  "Các dự án tiêu biểu": "Selected projects",
  "Role: Technical Lead — Web & Database · 01/2014 — 12/2015 · Team 5 người": "Role: Technical Lead — Web & Database · 01/2014 — 12/2015 · Team of 5",
  "Nền tảng tập trung jobs/tasks nội bộ, hỗ trợ quản lý lịch, Run/Stop/Cancel và tự động gửi email thông báo cho người phụ trách khi hoàn tất.": "A centralized platform for internal jobs and tasks, with scheduling, Run/Stop/Cancel controls, and automatic completion emails to the person in charge.",
  "Đóng góp:": "Contributions:",
  "Khám phá thiết kế ↗": "Explore the design ↗",
  "Role: Technical Lead — Web & Database · 01/2020 — Hiện tại · Team 5 người": "Role: Technical Lead — Web & Database · 01/2020 — Present · Team of 5",
  "Dẫn dắt quá trình chuyển frontend từ Angular sang React và backend từ .NET Framework 4 sang .NET 8 Minimal APIs.": "Led the frontend migration from Angular to React and the backend migration from .NET Framework 4 to .NET 8 Minimal APIs.",
  "Đóng góp": "Contributions",
  "— Tích hợp khoảng": "— Integrated around",
  "20 sản phẩm mới": "20 new products",
  "Role: Technical Lead — Web & Database · 01/2012 — 12/2014 · Team 4 người": "Role: Technical Lead — Web & Database · 01/2012 — 12/2014 · Team of 4",
  "Học vấn &": "Education &",
  "chứng chỉ": "Certifications",
  "Cử nhân Công nghệ Thông tin": "Bachelor of Information Technology",
  "Trường Đại học Khoa học Tự nhiên — ĐHQG TP. Hồ Chí Minh": "University of Science — Vietnam National University, Ho Chi Minh City",
  "Amazon · Cấp 10/2023": "Amazon · Issued 10/2023",
  "Tiếng Anh · TOEIC 820": "English · TOEIC 820",
  "Giải thưởng": "Awards",
  "Quản trị tập trung.": "Centralized management.",
  "Thực thi phân tán theo từng team.": "Distributed execution by team.",
  "01/2014 — 12/2015 · Role: Technical Lead — Web & Database · Team 5 người": "01/2014 — 12/2015 · Role: Technical Lead — Web & Database · Team of 5",
  "Phần 01 / Overview & objective": "Part 01 / Overview & objective",
  "Một nơi quản trị. Nhiều dịch vụ thực thi.": "One management hub. Multiple execution services.",
  "Mail Station cung cấp một hệ thống Admin chung để quản lý định nghĩa jobs, lịch chạy, cấu hình email, quyền theo team và trạng thái vận hành. Logic nghiệp vụ của từng job nằm trong Client Services/Apps do chính các team phát triển và quản lý.": "Mail Station provides a shared Admin system for job definitions, schedules, email settings, team permissions, and operational status. Each job's business logic lives in Client Services/Apps developed and managed by the respective teams.",
  "Quản lý tập trung": "Centralized management",
  "Thêm, sửa, xóa jobs; cấu hình cron và email; phân quyền theo team.": "Create, edit, and delete jobs; configure cron schedules and email; manage team permissions.",
  "Team tự chủ": "Team autonomy",
  "Client sở hữu job implementation, đăng ký cron trigger và thực thi nghiệp vụ.": "Clients own job implementations, register cron triggers, and execute business logic.",
  "Kiểm soát vận hành": "Operational visibility",
  "Control panel hỗ trợ start/stop và theo dõi jobs; kết quả thực thi được báo về Admin và lưu DB.": "The control panel supports starting, stopping, and monitoring jobs; execution results are reported to Admin and stored in the database.",
  "Vai trò & đóng góp cá nhân": "Role & individual contributions",
  "Technical Lead — Web & Database: khởi tạo dự án và nghiên cứu công nghệ; triển khai chức năng cốt lõi; thiết kế đặc tả các trang và chức năng; hỗ trợ thành viên triển khai và cập nhật tiến độ cho Manager.": "Technical Lead — Web & Database: initiated the project and researched technologies; implemented core features; specified pages and functionality; supported team members and reported progress to the Manager.",
  "Công nghệ:": "Technologies:",
  "Kết quả chức năng:": "Functional outcomes:",
  "Tập trung quản lý jobs/tasks nội bộ, hỗ trợ Run/Stop/Cancel và thông báo email cho PIC khi hoàn tất.": "Centralized internal job/task management, with Run/Stop/Cancel controls and completion emails to the person in charge.",
  "Phần 02 / Component UML": "Part 02 / Component UML",
  "Ranh giới trách nhiệm rõ ràng": "Clear responsibility boundaries",
  "Admin là nguồn cấu hình lịch chạy. Cron trigger được cài và kích hoạt ở Client; broker làm trung gian truyền thông.": "Admin is the source of schedule configuration. Cron triggers are registered and fired on Clients; the broker mediates communication.",
  "Admin quản lý cấu hình và DB. RabbitMQ kết nối Admin và Client qua request response và publish subscribe. Client chứa cron scheduler và job implementation do team quản lý. Vị trí gửi email chưa xác định.": "Admin manages configuration and the database. RabbitMQ connects Admin and Clients through request/response and publish/subscribe. Clients contain the cron scheduler and team-owned job implementations. The email sender has not been confirmed.",
  "EasyNetQ: messaging adapter ở cả Admin và Client.": "EasyNetQ: messaging adapter on both Admin and Clients.",
  "* Kênh lệnh start/stop và cách dừng job đang chạy: cần xác nhận.": "* The start/stop command channel and how running jobs are stopped require confirmation.",
  "Email transport / bên thực sự gửi email: cần xác nhận.": "Email transport / actual email sender: to be confirmed.",
  "Mũi tên hai chiều: trao đổi Request/Response qua broker. Mũi tên một chiều: Admin publish cấu hình, Client subscribe. Các message name bên dưới là tên minh họa để diễn giải, không phải contract đã xác nhận.": "Two-way arrows: Request/Response via the broker. One-way arrows: Admin publishes configuration and Clients subscribe. Message names below are illustrative, rather than confirmed contracts.",
  "Phần 03 / Runtime & recovery": "Part 03 / Runtime & recovery",
  "Ba luồng vận hành chính": "Three main operational flows",
  "01 · Lấy cấu hình": "01 · Fetch configuration",
  "02 · Chạy & báo kết quả": "02 · Run & report results",
  "03 · Khởi động sau UM": "03 · Restart after UM",
  "Luồng lấy cấu hình và đăng ký cron trigger": "Configuration retrieval and cron trigger registration flow",
  "1. Request: lấy cấu hình jobs": "1. Request: job configuration",
  "2. Chuyển request": "2. Forward request",
  "3. Đọc jobs thuộc Client": "3. Read Client's jobs",
  "4. Jobs + cron + cấu hình": "4. Jobs + cron + configuration",
  "5. Response: cấu hình jobs": "5. Response: job configuration",
  "6. Trả response cho Client": "6. Return response to Client",
  "7. Đăng ký local cron triggers": "7. Register local cron triggers",
  "Client yêu cầu": "Client requests",
  "Client gửi GetJobConfiguration qua RabbitMQ / EasyNetQ để lấy jobs thuộc phạm vi của mình.": "Client sends GetJobConfiguration through RabbitMQ / EasyNetQ to retrieve its assigned jobs.",
  "Admin xử lý": "Admin processes",
  "Admin nhận request, đọc cấu hình từ DB và trả response qua broker.": "Admin receives the request, reads configuration from the database, and responds through the broker.",
  "Client nhận cấu hình": "Client receives configuration",
  "Response chứa thông tin job, cron expression và cấu hình liên quan.": "The response contains job details, cron expressions, and related configuration.",
  "Đăng ký trigger": "Register triggers",
  "Client tạo cron trigger cho job implementation tương ứng và chờ lịch chạy.": "Client creates cron triggers for the corresponding job implementations and waits for the scheduled time.",
  "Luồng chạy job và ghi nhận kết quả": "Job execution and result recording flow",
  "1. Cron đến hạn → chạy job": "1. Cron fires → run job",
  "2. Job hoàn tất": "2. Job completes",
  "3. Request: báo kết quả": "3. Request: report results",
  "4. Chuyển request hoàn tất": "4. Forward completion request",
  "5. Ghi nhận kết quả vào DB": "5. Record results in DB",
  "6. Ghi nhận thành công": "6. Write succeeds",
  "7. Response: xác nhận": "7. Response: acknowledgment",
  "8. Trả xác nhận cho Client": "8. Return acknowledgment",
  "Cron đến hạn": "Cron fires",
  "Local scheduler tại Client kích hoạt job dựa trên lịch do Admin quản lý.": "The Client's local scheduler triggers the job according to the Admin-managed schedule.",
  "Thực thi nghiệp vụ": "Execute business logic",
  "Client chạy implementation do team sở hữu; thu thập kết quả thực thi.": "Client runs the team-owned implementation and collects execution results.",
  "Báo hoàn tất": "Report completion",
  "Client gửi ReportJobCompletion request qua broker tới Admin.": "Client sends a ReportJobCompletion request to Admin through the broker.",
  "Lưu & phản hồi": "Save & respond",
  "Admin ghi nhận kết quả xuống DB, sau đó trả response cho Client. Control panel dùng dữ liệu này để theo dõi.": "Admin records results in the database, then responds to Client. The control panel uses this data for monitoring.",
  "Luồng khởi động sau UM với Admin khởi động trước": "Post-UM startup flow with Admin starting first",
  "1. Admin khởi động trước": "1. Admin starts first",
  "2. Đọc toàn bộ jobs": "2. Read all jobs",
  "3. Trả cấu hình jobs": "3. Return job configuration",
  "4. Publish cấu hình jobs (Pub/Sub)": "4. Publish job config (Pub/Sub)",
  "5. Queue giữ messages (*)": "5. Queue retains messages (*)",
  "6. Client khởi động sau": "6. Client starts later",
  "7. Subscribe jobs của Client": "7. Subscribe to Client's jobs",
  "8. Deliver cấu hình đã publish": "8. Deliver published config",
  "9. Đăng ký lại cron triggers": "9. Re-register cron triggers",
  "Admin khởi động trước": "Admin starts first",
  "Sau đợt UM restart servers, Mail Station Admin đọc toàn bộ jobs từ DB.": "After servers restart during UM, Mail Station Admin reads all jobs from the database.",
  "Publish cấu hình": "Publish configuration",
  "Admin publish các job configuration messages qua RabbitMQ theo Pub/Sub.": "Admin publishes job configuration messages through RabbitMQ using Pub/Sub.",
  "Client khởi động sau": "Client starts later",
  "Client Services/Apps subscribe và nhận cấu hình jobs thuộc phạm vi của mình.": "Client Services/Apps subscribe and receive configuration for their assigned jobs.",
  "Khôi phục lịch chạy": "Restore schedules",
  "Client đăng ký lại cron triggers và tiếp tục chạy jobs theo lịch.": "Clients re-register cron triggers and resume scheduled job execution.",
  "(*) Điều kiện giữ messages: queue và binding phải tồn tại trước lúc publish để giữ message cho Client chưa online; nếu cần chịu được broker restart, cần durable queues và persistent messages. Nếu chưa bảo đảm topology này, đề xuất Client chủ động lấy lại snapshot qua Request/Response khi khởi động. Đây là khuyến nghị, chưa khẳng định đã triển khai.": "(*) Message retention requires queues and bindings to exist before publishing so messages can be retained for offline Clients. Surviving broker restarts also requires durable queues and persistent messages. If this topology is not guaranteed, Clients should retrieve a fresh snapshot via Request/Response at startup. This is a recommendation, not a confirmed implementation.",
  "Tổng hợp dữ liệu kế toán.": "Consolidated accounting data.",
  "Xuất Excel qua hàng đợi.": "Queue-based Excel exports.",
  "Role: Technical Lead — Web & Database · Team 4 người": "Role: Technical Lead — Web & Database · Team of 4",
  "Dữ liệu cho bộ phận kế toán": "Data for the accounting team",
  "Data Warehouse tổng hợp dữ liệu quy mô vài triệu dòng và cho phép người dùng truy vấn khoảng thời gian lên tới một năm. File Excel là đầu ra chính cho công việc kế toán. Website cung cấp bản xem trước 100 dòng mỗi trang.": "Data Warehouse consolidates several million rows and lets users query periods of up to one year. Excel files are the main output for accounting work. The website provides previews of 100 rows per page.",
  "Phân tích giới hạn hệ thống cũ, đề xuất và dẫn dắt nâng cấp. Thiết kế cơ chế điều phối tác vụ xuất dữ liệu để giảm ảnh hưởng lên website, đồng thời cho phép triển khai thêm tiến trình xử lý khi tải tăng.": "Analyzed legacy limitations, proposed and led the upgrade. Designed export task orchestration to reduce website load and allow additional processing instances as demand grows.",
  "Phần 02 / Problems": "Part 02 / Problems",
  "Vấn đề của hệ thống cũ": "Legacy system problems",
  "Người dùng kế toán thường xuyên phản ánh truy vấn chậm và yêu cầu xuất dữ liệu bị lỗi, đặc biệt khi chọn kỳ báo cáo dài.": "Accounting users frequently reported slow queries and failed exports, especially for long reporting periods.",
  "Truy vấn dài bị treo": "Long queries stall",
  "Khoảng ngày trên ba tháng có thể mất hơn 10 phút. Khi gặp lỗi hết bộ nhớ, người dùng phải gửi lại yêu cầu, đôi khi nhiều lần.": "Date ranges exceeding three months could take more than 10 minutes. Memory failures required users to resubmit requests, sometimes repeatedly.",
  "Lỗi OutOfMemoryException": "OutOfMemoryException errors",
  "Trước khi ghi file Excel, hệ thống cũ dùng": "Before writing Excel files, the legacy system used",
  "để nạp toàn bộ các dòng dữ liệu từ truy vấn vào bộ nhớ. Khi báo cáo có quá nhiều dòng, tiến trình trên Windows 32-bit có thể không đủ bộ nhớ, dẫn đến lỗi": "to load every query result row into memory. Large reports could exhaust the memory available to a Windows 32-bit process, causing",
  "và làm gián đoạn việc xuất file.": "and interrupting the export.",
  "Thiếu người nắm hệ thống cũ": "Limited legacy system knowledge",
  "Các lập trình viên ban đầu đã nghỉ. PM gặp khó khi giải thích nguyên nhân và thống nhất phương án xử lý với người dùng kế toán.": "The original developers had left. The PM struggled to explain the causes and agree on a solution with accounting users.",
  "Phần 03 / Component UML": "Part 03 / Component UML",
  "Website tiếp nhận. Hai service xử lý.": "The website accepts requests. Two services process them.",
  "Kế toán dùng website để đưa yêu cầu vào bảng hàng đợi SQLite. Hai export service trên hai máy chủ lấy việc từ cùng hàng đợi, gọi stored procedure trên các database phù hợp, lưu Excel và gửi liên kết qua email.": "Accounting users submit requests through the website to a SQLite queue table. Two export services on separate servers consume the shared queue, call stored procedures on the relevant databases, save Excel files, and email download links.",
  "Người dùng kế toán": "Accounting users",
  "«database» DB 7 ngày": "«database» 7-day DB",
  "Ngày 1–7": "Days 1–7",
  "Ngày 8–14": "Days 8–14",
  "Từ ngày 15": "From day 15",
  "Đăng nhập / xem báo cáo": "Sign in / view reports",
  "Ghi yêu cầu export": "Enqueue export request",
  "Poll / nhận việc": "Poll / claim request",
  "Soạn và gửi email kèm link tải": "Compose & email download link",
  "«component» Máy chủ A": "«component» Server A",
  "«component» Máy chủ B": "«component» Server B",
  "Gọi đồng thời các stored procedure cần thiết": "Call required stored procedures concurrently",
  "Hai service dùng chung hàng đợi SQLite. Các đường nối tới ba database biểu thị những đích truy vấn có thể chọn theo khoảng ngày.": "Both services share a SQLite queue. Connections to the three databases indicate query targets selected according to the requested date range.",
  "Phần 04 / Runtime": "Part 04 / Runtime",
  "Từ yêu cầu đến file Excel": "From request to Excel files",
  "Tiếp nhận yêu cầu": "Accept a request",
  "Người dùng đăng nhập website, chọn kỳ báo cáo và gửi yêu cầu xuất. Website ASP.NET cũ được nâng cấp lên .NET Framework 4 (x64), giữ nghiệp vụ cũ, làm mới UI/UX và ghi một record vào bảng queue SQLite.": "Users sign in, choose a reporting period, and submit an export request. The legacy ASP.NET website was upgraded to .NET Framework 4 (x64), preserving business behavior, refreshing the UI/UX, and inserting a record into the SQLite queue table.",
  "Nhận việc và truy vấn": "Claim work and query",
  "Hai service định kỳ kiểm tra queue. Mỗi service xử lý từng yêu cầu một, còn hai service có thể chạy hai yêu cầu khác nhau cùng lúc. Với một yêu cầu, service xác định các database liên quan, gọi đồng thời các stored procedure và ghép kết quả.": "Two services periodically poll the queue. Each processes one request at a time, allowing two different requests to run concurrently. For each request, the service identifies the relevant databases, calls their stored procedures concurrently, and combines the results.",
  "Paging khi xuất Excel": "Batch Excel output",
  "DataReader đọc tuần tự từng dòng và ghi ngay vào file Excel hiện tại. Khi đủ 5.000 dòng, service lưu và đóng file, sau đó tạo file mới nếu còn dữ liệu. File cuối được lưu kể cả khi có ít hơn 5.000 dòng. Mỗi lần chỉ giữ một workbook tối đa 5.000 dòng trong bộ nhớ, giúp tránh lỗi OutOfMemoryException do dồn toàn bộ kết quả vào một workbook. Các tiến trình chạy trên .NET Framework 4 (x64).": "DataReader reads rows sequentially and writes them directly to the current Excel file. At 5,000 rows, the service saves and closes the file, then creates another if data remains. The final file is saved even with fewer than 5,000 rows. Only one workbook of up to 5,000 rows stays in memory at a time, avoiding OutOfMemoryException from accumulating all results in one workbook. Processes run on .NET Framework 4 (x64).",
  "Giao kết quả": "Deliver results",
  "Khi các file Excel đã sẵn sàng, Export Service xử lý yêu cầu tự soạn và gửi email kèm liên kết tải. Người dùng có thể tiếp tục thao tác trên website trong thời gian xử lý. Bản xem trực tiếp dùng phân trang 100 dòng.": "Once Excel files are ready, the Export Service handling the request composes and sends an email with download links. Users can continue using the website during processing. On-screen previews use 100-row pagination.",
  "Phần 05 / Design decisions": "Part 05 / Design decisions",
  "Phân tách dữ liệu và tải xử lý": "Separate data and processing load",
  "Tách database theo khoảng thời gian": "Partition databases by time range",
  "Dữ liệu trước đây nằm trong một SQL database trung tâm. Khi nâng cấp, dữ liệu được chuyển sang ba SQL database vật lý riêng biệt theo tuổi dữ liệu. Database 7 ngày chứa dữ liệu từ ngày 1 đến ngày 7, DB14 chứa dữ liệu từ ngày 8 đến ngày 14, và DBArchive chứa dữ liệu từ ngày 15 trở đi. Dựa trên khoảng ngày người dùng chọn, Export Service gọi song song các stored procedure trên những database liên quan rồi ghép kết quả.": "Data previously resided in one central SQL database. The upgrade moved it into three physically separate SQL databases by data age: the 7-day database holds days 1–7, DB14 holds days 8–14, and DBArchive holds day 15 onward. Based on the user's selected date range, Export Service calls stored procedures concurrently on the relevant databases and combines their results.",
  "Cô lập tác vụ nặng": "Isolate heavy workloads",
  "Export chạy trong process riêng trên hai máy chủ. Khi một service dừng, service còn lại có thể tiếp tục nhận yêu cầu đang chờ. Website vẫn tiếp nhận yêu cầu qua bảng queue.": "Exports run in separate processes on two servers. If one service stops, the other can continue claiming pending requests. The website continues accepting requests through the queue table.",
  "Mở rộng theo tải": "Scale with demand",
  "Có thể tăng hoặc giảm số instance cùng đọc queue. Việc tự động điều chỉnh số instance phụ thuộc vào cơ chế triển khai và tín hiệu tải. Hai service cần nhận việc nguyên tử để cùng đọc queue mà vẫn giao mỗi request cho một service tại một thời điểm.": "The number of instances consuming the queue can increase or decrease. Automatic scaling depends on deployment mechanisms and load signals. The two services require atomic request claiming to ensure each request is assigned to only one service at a time.",
  "Giám sát yêu cầu bị kẹt ở trạng thái Running": "Monitor requests stuck in Running",
  "Nếu một Export Service dừng đột ngột trong lúc xử lý, yêu cầu đã nhận vẫn giữ trạng thái": "If an Export Service stops unexpectedly while processing, its claimed request remains in the",
  "trong bảng queue. Service còn lại tiếp tục nhận các yêu cầu đang chờ.": "state in the queue table. The other service continues claiming pending requests.",
  "Một job giám sát riêng kiểm tra bảng queue. Khi phát hiện yêu cầu ở trạng thái": "A separate monitoring job checks the queue table. If a request remains in the",
  "quá 24 giờ, job gửi cảnh báo vào room của đội dev để họ kiểm tra và xử lý thủ công.": "state for more than 24 hours, the job alerts the development team's room for investigation and manual resolution.",
  "Trương Huy Thịnh / Staff Software Engineer": "Trương Huy Thịnh / Staff Software Engineer",
  "Phát triển phần mềm từ năm 2010, chuyên .NET/C# và hệ thống backend. Dẫn dắt thiết kế kiến trúc, trực tiếp triển khai chức năng cốt lõi và hướng dẫn đội ngũ trong các dự án hiện đại hóa hệ thống nghiệp vụ.": "Software engineer since 2010, specializing in .NET/C# and backend systems. Leads architectural design, builds core backend functionality, and provides technical guidance to teams modernizing business systems.",
  "— Thiết kế lại ứng dụng web, trực tiếp xây dựng toàn bộ backend C# bằng .NET 8 Minimal APIs; chọn React, khởi tạo frontend và hướng dẫn junior developers xây dựng giao diện từ API.": "— Redesigned the web application and personally built the entire C# backend with .NET 8 Minimal APIs; selected React, set up the frontend, and guided junior developers in building the API-driven UI.",
  "bằng cấu hình thay vì clone code cho từng sản phẩm. Các sản phẩm dùng chung business logic chỉ cần thêm config; code mới dành cho nghiệp vụ riêng chưa được hỗ trợ.": "through configuration instead of cloning code for each product. Products sharing business logic only need new configuration; new code is reserved for unsupported product-specific behavior.",
  "Khởi tạo dự án, chọn công nghệ và triển khai chức năng cốt lõi; dẫn dắt đội 5 người.": "Initiated the project, selected technologies, and implemented core features; led a team of 5.",
  "Đề xuất và dẫn dắt nâng cấp; tách xử lý export khỏi website, dùng DataReader và chia file 5.000 dòng để giảm tải bộ nhớ.": "Proposed and led the upgrade; moved export processing out of the website and used DataReader with 5,000-row files to reduce memory usage.",
  "Tổng hợp dữ liệu cho kế toán, hỗ trợ truy vấn đến một năm và xuất Excel lên tới 1 triệu dòng qua hàng đợi SQLite.": "Consolidates accounting data, supports queries spanning up to one year, and exports up to 1 million rows to Excel through a SQLite queue.",
  "Phối hợp với PM/BA làm rõ yêu cầu, thống nhất phạm vi và review phần web trong đặc tả do BA viết. Hướng dẫn junior/senior developers khi bắt đầu task, review code và phụ trách triển khai production.": "Works with PMs and BAs to clarify requirements and agree on scope, then reviews the web-related sections of specifications written by BAs. Provides technical guidance to junior/senior developers as they start tasks, reviews code, and handles production deployment.",
  "Làm rõ yêu cầu với PM/BA và review nội dung liên quan đến web trong đặc tả của BA; hướng dẫn junior/senior developers, review code và phụ trách triển khai production.": "Clarifies requirements with PMs and BAs and reviews the web-related content in BA-written specifications; provides technical guidance to junior/senior developers, reviews code, and handles production deployment.",
  "Thiết kế hệ thống và phối hợp với PM/BA để thống nhất giải pháp kỹ thuật. Trực tiếp xây dựng nền tảng ban đầu và các chức năng cốt lõi; hướng dẫn kỹ thuật, review code của các thành viên và phụ trách triển khai production, trực hỗ trợ sau phát hành.": "Designs systems and works with PMs and BAs to align on technical solutions. Builds the initial application foundation and core functionality, provides technical guidance and code reviews for team members, and handles production deployments and post-release standby support.",
  "Kỹ năng chính": "Core skills",
  "Kỹ năng bổ sung": "Additional skills"
};
Object.assign(portfolioTranslations, {
  "Trước: mỗi product có một nhánh triển khai riêng": "Before: a separate implementation for each product",
  "1. Chọn product có nghiệp vụ gần giống": "1. Select the closest existing product",
  "2. Clone tables, procedures, functions, triggers": "2. Clone tables, procedures, functions, triggers",
  "3. Clone Angular frontend và .NET 4 backend": "3. Clone Angular frontend and .NET 4 backend",
  "4. Implement các khác biệt nghiệp vụ": "4. Implement business differences",
  "5. Kiểm tra và triển khai nhánh product mới": "5. Verify and deploy the new product branch",
  "1. Xác định các Setting Type cần dùng": "1. Identify required Setting Types",
  "2. Đối chiếu với các type đã có": "2. Check existing types",
  "3. Nếu thiếu: cấp ID và implement type mới": "3. If missing: assign an ID and implement a new type",
  "4. Thêm Product 20 → [1, 3, 9, 12]": "4. Add Product 20 → [1, 3, 9, 12]",
  "5. Tái sử dụng implementation của các type đã có": "5. Reuse implementations of existing types",
  "Từ clone từng product sang tái sử dụng theo Setting Type.": "From per-product cloning to reusable Setting Types.",
  "Hiện tại": "Present",
  "Thay đổi đơn vị tái sử dụng": "Redefine the unit of reuse",
  "Hệ thống cũ mở rộng bằng cách sao chép một product gần giống. Thiết kế mới tách nghiệp vụ thành các Setting Type có định danh, rồi cấu hình tập Setting Type cho từng Product ID.": "The legacy system grew by copying a similar product. The new design separates behavior into identified Setting Types and configures a set of types for each Product ID.",
  "Vai trò cá nhân": "Personal contribution",
  "Thiết kế lại ứng dụng, trực tiếp xây dựng toàn bộ backend bằng .NET 8 Minimal APIs; chọn React, khởi tạo frontend và hướng dẫn junior developers triển khai giao diện từ API.": "Redesigned the application and built the entire backend with .NET 8 Minimal APIs; selected React, initialized the frontend, and guided junior developers in implementing the API-driven UI.",
  "Một product mới kéo theo nhiều lớp sao chép": "A new product duplicated multiple layers",
  "Với Angular và .NET Framework 4, đội chọn một product có nghiệp vụ gần giống nhất, clone các DB objects và code frontend/backend, rồi bổ sung phần khác biệt.": "With Angular and .NET Framework 4, the team selected the closest existing product, cloned its database objects and frontend/backend code, then implemented the differences.",
  "Các cột thể hiện các nhánh code và DB objects theo product; không hàm ý mỗi product có database hoặc máy chủ riêng.": "Columns represent product-specific code and database objects; they do not imply separate databases or servers.",
  "Lặp lại nhiều tầng": "Duplication across layers",
  "Một lần tích hợp chạm tới Angular, backend, tables, stored procedures, functions và triggers.": "One integration involved Angular, backend code, tables, stored procedures, functions, and triggers.",
  "Bảo trì phân tán": "Fragmented maintenance",
  "Logic giống nhau tồn tại ở nhiều bản sao, làm tăng số nơi phải kiểm tra khi cập nhật nghiệp vụ chung.": "The same behavior lived in multiple copies, increasing the number of places to check when shared business rules changed.",
  "Khó phân biệt phần dùng chung": "Unclear reuse boundaries",
  "Phần nghiệp vụ riêng của product bị trộn với phần có thể dùng lại, khiến mỗi nhánh mới tiếp tục mang theo code cũ.": "Product-specific behavior was mixed with reusable behavior, so each new branch carried another copy of the existing code.",
  "Luồng cũ: chọn, clone, sửa": "Legacy flow: select, clone, modify",
  "Một product, nhiều Setting Type": "One product, multiple Setting Types",
  "Mỗi product và mỗi Setting Type có ID riêng. Commission, Position Taking và Max per Games là các ví dụ về Setting Type; một product kết hợp nhiều type tùy nghiệp vụ.": "Each product and Setting Type has its own ID. Commission, Position Taking, and Max per Games are examples of Setting Types; a product combines multiple types according to its business needs.",
  "Sơ đồ thành phần ở mức logic, thể hiện trách nhiệm và quan hệ cấu hình; không mô tả topology triển khai hay schema vật lý. Các ID 1, 3, 9, 12 chỉ là ví dụ, không gán với tên Setting Type cụ thể.": "This logical component diagram shows responsibilities and configuration relationships, not deployment topology or a physical schema. IDs 1, 3, 9, and 12 are illustrative and are not mapped to specific type names.",
  "Luồng mới: tái sử dụng trước, mở rộng khi cần": "New flow: reuse first, extend when needed",
  "Đây là luồng tích hợp product của đội phát triển, không phải API runtime. Nếu tất cả Setting Type đã có thì bỏ qua bước implement type mới.": "This is the development team’s product-onboarding flow, not an API runtime trace. If all required Setting Types already exist, the new-type implementation step is skipped.",
  "Product ID": "Product ID",
  "Định danh product độc lập với tổ hợp Setting Type mà product sử dụng.": "Identifies the product independently of the combination of Setting Types it uses.",
  "Setting Type ID": "Setting Type ID",
  "Định danh một loại nghiệp vụ có thể tái sử dụng giữa nhiều product. Type mới cần được tạo và implement một lần.": "Identifies a type of behavior reusable across products. A new type needs to be created and implemented once.",
  "Cấu hình ánh xạ": "Mapping configuration",
  "Ví dụ Product 20 sử dụng [1, 3, 9, 12]. Với các type đã được hỗ trợ, thêm product bằng config thay vì clone lại toàn bộ các lớp.": "For example, Product 20 uses [1, 3, 9, 12]. For supported types, onboarding adds configuration instead of cloning every layer.",
  "Khoảng 20 sản phẩm mới được tích hợp": "Around 20 new products integrated",
  "Các sản phẩm dùng chung nghiệp vụ được tích hợp bằng cấu hình. Code mới dành cho Setting Type hoặc nghiệp vụ riêng chưa được hỗ trợ, thay vì sao chép toàn bộ một product khác.": "Products sharing supported business behavior were integrated through configuration. New code was reserved for unsupported Setting Types or product-specific behavior, rather than copying an entire existing product."
});
Object.assign(portfolioTranslations, {
  "Giảm nguồn lực và thời gian tích hợp một product mới: từ 3 dev, 2 QC và 2 Database Developer trong 3 tháng xuống còn 1 dev, 1 QC và 1 Database Developer trong 2 tuần.": "Reduced the staffing and delivery time required to integrate a new product: from 3 developers, 2 QC engineers, and 2 Database Developers over 3 months to 1 developer, 1 QC engineer, and 1 Database Developer over 2 weeks.",
  "Trước cải tiến": "Before modernization",
  "Sau cải tiến": "After modernization",
  "3 tháng / product mới": "3 months / new product",
  "2 tuần / product mới": "2 weeks / new product",
  "Kết quả": "Outcome",
  "Tinh gọn nguồn lực, rút ngắn triển khai": "Leaner staffing, faster delivery"
});
Object.assign(portfolioTranslations, {
  "Với cách cũ, dù clone từ product gần giống, đội vẫn phải kiểm thử lại toàn bộ code cũ đã sao chép. Với cách mới, khi tất cả Setting Type cần dùng đã được hỗ trợ, chỉ cần thêm mapping config cho product mới; không cần sửa code hay kiểm thử lại toàn bộ code dùng chung như một nhánh clone riêng.": "With the legacy approach, even cloning a similar product required retesting all copied code. With the new approach, when all required Setting Types are already supported, onboarding only adds product mapping configuration; it requires no code changes or full retesting of the shared code as a separate cloned branch."
});
Object.assign(portfolioTranslations, {
  "Dẫn dắt hiện đại hóa Customer Setting từ Angular/.NET Framework 4 sang React/.NET 8; thay clone code bằng cấu hình Product và Setting Type, tích hợp khoảng 20 sản phẩm mới.": "Led Customer Setting modernization from Angular/.NET Framework 4 to React/.NET 8; replaced code cloning with Product and Setting Type configuration, integrating around 20 new products.",
  "Tích hợp một product mới: từ 7 người trong 3 tháng xuống 3 người trong 2 tuần.": "New product integration: from 7 people over 3 months to 3 people over 2 weeks."
});
Object.assign(portfolioTranslations, {
  "Tích hợp product: từ 7 người trong 3 tháng xuống 3 người trong khoảng 2 tuần, kể cả khi bổ sung một Setting Type mới đơn giản.": "Product integration: from 7 people over 3 months to 3 people over approximately 2 weeks, including one simple new Setting Type.",
  "3 tháng · full-time / product mới": "3 months · full-time / new product",
  "Có một Setting Type mới đơn giản": "One simple new Setting Type",
  "Khoảng 2 tuần / product mới": "Approximately 2 weeks / new product",
  "Tái sử dụng toàn bộ Setting Type": "All Setting Types reused",
  "1 QC · Dev hỗ trợ deployment": "1 QC engineer · Developer supports deployment",
  "Khoảng 1 tuần / product mới": "Approximately 1 week / new product",
  "Chỉ thêm mapping config và kiểm thử nhẹ; không cần implement Setting Type mới.": "Only mapping configuration and light testing are needed; no new Setting Type implementation is required."
});
Object.assign(portfolioTranslations, {
  "Role: Web Technical Lead · 01/2020 — Hiện tại": "Role: Web Technical Lead · 01/2020 — Present",
  "Phụ trách kỹ thuật phía web trong chương trình hiện đại hóa do ban giám đốc định hướng; chuyển Angular/.NET Framework 4 sang React/.NET 8, phối hợp với các team Database, QC và PM/BA.": "Led web development within a management-directed modernization initiative; migrated Angular/.NET Framework 4 to React/.NET 8 in collaboration with the Database, QC, and PM/BA teams.",
  "Kết quả chung của dự án:": "Overall project results:",
  "Phụ trách kỹ thuật phía web trong chương trình hiện đại hóa Customer Setting theo định hướng của ban giám đốc. Thiết kế lại ứng dụng web, trực tiếp xây dựng backend .NET 8 Minimal APIs, khởi tạo frontend React và hướng dẫn web developers triển khai; phối hợp với các team Database, QC và PM/BA.": "Led web development for the Customer Setting modernization initiative directed by company management. Redesigned the web application, built the .NET 8 Minimal APIs backend, initialized the React frontend, and provided technical guidance to web developers; collaborated with the Database, QC, and PM/BA teams.",
  "Web Dev, Database, QC và PM/BA là các team riêng biệt. Vai trò cá nhân tập trung vào kỹ thuật và triển khai phía web; kết quả bên dưới phản ánh sự phối hợp của toàn dự án.": "Web Development, Database, QC, and PM/BA are separate teams. Personal responsibility focused on web technical design and implementation; the results below reflect the combined project effort."
});
(() => {
  const textEntries = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return node.parentElement.closest('script, style, [data-language-switch]')
        ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    }
  });
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const source = node.nodeValue;
    const translated = portfolioTranslations[source.trim()];
    if (translated !== undefined) textEntries.push({node, source, translated});
  }
  const image = document.querySelector('img[alt]');
  const originalAlt = image?.alt;
  const description = document.querySelector('meta[name="description"]');
  const originalDescription = description.content;
  const switcher = document.querySelector('[data-language-switch]');
  function setLanguage(language) {
    const english = language === 'en';
    document.documentElement.lang = english ? 'en' : 'vi';
    textEntries.forEach(({node, source, translated}) => {
      node.nodeValue = english ? source.replace(source.trim(), () => translated) : source;
    });
    if (image) image.alt = english
      ? 'Angular to React and .NET Framework 4 to .NET 8 Minimal APIs modernization, integrating around 20 new products.' : originalAlt;
    description.content = english
      ? 'Trương Huy Thịnh — .NET, distributed systems and enterprise architecture. Portfolio and Customer Setting, Mail Station, and Data Warehouse case studies.' : originalDescription;
    switcher.setAttribute('aria-label', english ? 'Language' : 'Ngôn ngữ');
    switcher.querySelectorAll('button').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    });
    try { localStorage.setItem('portfolio-language', language); } catch {}
  }
  switcher.addEventListener('click', event => {
    const button = event.target.closest('[data-language]');
    if (button) setLanguage(button.dataset.language);
  });
  let language = 'en';
  try {
    const savedLanguage = localStorage.getItem('portfolio-language');
    if (savedLanguage === 'vi' || savedLanguage === 'en') language = savedLanguage;
  } catch {}
  setLanguage(language);
})();
