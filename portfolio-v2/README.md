# Thinh Truong — CV & Mail Station case study

Website tĩnh, không cần build hoặc thư viện ngoài. Mở `index.html` bằng trình duyệt. Bốn tab hỗ trợ bàn phím, URL hash, mobile và in PDF. Sơ đồ UML là SVG inline, chạy offline.

Tab Customer Setting (`#customer-setting-case`) trình bày component và sequence diagram cho cả luồng cũ clone DB/FE/BE lẫn luồng mới cấu hình Product ID → Setting Type IDs. Nội dung và nhãn sơ đồ hỗ trợ VI/EN. Các sơ đồ ở mức logic; ID trong ví dụ không ánh xạ tới tên Setting Type cụ thể.

## Nội dung

Thông tin cá nhân, kinh nghiệm, dự án, học vấn, chứng chỉ và giải thưởng cập nhật theo CV PDF do người dùng cung cấp. Không đưa ngày sinh lên portfolio công việc. Chứng chỉ AWS được ghi ngày cấp 10/2023, không khẳng định hiệu lực hiện tại. Phần kiến trúc Mail Station dựa trên mô tả bổ sung của người dùng.

## Đưa lên GitHub Pages

Cách đơn giản: đưa nội dung thư mục này vào root một repository riêng, commit và push. Trong Settings → Pages chọn Deploy from a branch, branch chứa code và thư mục `/ (root)`.

Nếu giữ trong repository MyCV hiện tại và Pages đang phục vụ root, bản này nằm dưới đường dẫn `/portfolio-v2/`. Không thay đổi workflow hoặc website cũ trong lần chỉnh sửa này.

## Biên tập

HTML, CSS và logic tab nằm trong `index.html`. Bản dịch và logic chuyển ngôn ngữ nằm trong `i18n.js`; cần triển khai cả file này cùng website. Tab hồ sơ dùng thông tin từ CV có sẵn; không kế thừa các con số hiệu quả chưa được xác nhận. Mail Station được tổ chức thành overview, component UML và ba luồng runtime. Các message names là tên minh họa. Các cơ chế chưa xác nhận được ghi rõ trong case study.

Request/Response: Client hỏi, Admin xử lý và trả lời qua broker. Pub/Sub: Admin phát cấu hình, Client nhận và đăng ký local cron. Không diễn giải broker thành nơi lưu cấu hình nghiệp vụ hoặc scheduler.

Tham khảo về queue / binding và message durability: https://www.rabbitmq.com/tutorials/amqp-concepts và https://www.rabbitmq.com/docs/queues.

## Ngôn ngữ

Nút VI / EN ở đầu trang chuyển ngôn ngữ hồ sơ, hai case study và nhãn SVG mà không đổi tab hoặc luồng đang xem. Mặc định là tiếng Việt; lựa chọn được lưu trong localStorage khi trình duyệt cho phép. Khi bổ sung nội dung, cập nhật từ điển `portfolioTranslations` trong `i18n.js`, dùng nguyên văn tiếng Việt làm khóa. Tên riêng và tên công nghệ được giữ nguyên. Ảnh Customer Setting là ảnh tĩnh gốc; alt text có bản dịch.
