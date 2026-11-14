# Trương Huy Thịnh — Engineering Portfolio

Portfolio tĩnh bằng HTML/CSS/JavaScript, hỗ trợ VI/EN, bàn phím, mobile và in PDF. Mở `index.html` để xem. Không cần build hoặc thư viện ngoài.

## Cấu trúc và triển khai

`../index.html` và `../i18n.js` ở root là bản phục vụ GitHub Pages. `portfolio-v2/` giữ bản tương ứng; cập nhật hai bản cùng nhau. GitHub Actions trong `.github/workflows/deploy.yml` triển khai root khi push lên `main`.

## Bố cục case study

Cả Mail Station, Data Warehouse và Customer Setting dùng cùng sáu phần:

1. Bối cảnh & khó khăn hiện tại
2. Hệ thống cũ
3. Giải pháp cải tiến
4. Vai trò cá nhân
5. Hệ thống mới ra đời
6. Outcome

Phần giải pháp giải thích hướng thay đổi; phần hệ thống mới trình bày thành phần và luồng thực tế sau triển khai. Giữ rõ đóng góp cá nhân và kết quả phối hợp toàn dự án. Số đo hiệu năng là xấp xỉ theo thông tin người dùng xác nhận.

## Mail Station

Client khởi động: clear message cũ của cron/Run/Stop/Cancel, rồi lấy job info và cron mới nhất qua Request/Response. Admin phải sẵn sàng trước để phản hồi. Pub/Sub dùng cho đổi cron, Run, Stop/Cancel và heartbeat. JobTask kiểm tra `cancellationToken` và truyền vào async method hỗ trợ hủy. Client publish heartbeat mỗi phút; Admin lưu thời điểm nhận theo Job ID. Job List hiển thị Not Available khi heartbeat quá 5 phút. Không đồng nhất trạng thái này với xác nhận process đã chết.

Các sequence diagram mô tả luồng logic, không phải đặc tả message contract. Không suy diễn TTL, replay, queue durability hoặc cơ chế tự phục hồi chưa được xác nhận. Luồng báo kết quả không gán pattern cụ thể.

## Ngôn ngữ và chỉnh sửa

Nội dung, SVG và logic tab nằm trong `index.html`; bản dịch trong `i18n.js`. Khi thêm nội dung, thêm nguyên văn text node tiếng Việt làm khóa trong `portfolioTranslations`. Nút VI/EN giữ nguyên tab và luồng đang xem; lựa chọn ngôn ngữ được lưu trong localStorage nếu có thể. Mặc định khi chưa lưu lựa chọn là tiếng Anh.

Customer Setting giữ component và sequence diagram cũ/mới ở mức logic. Các ID là ví dụ; không suy ra schema hoặc topology vật lý. Data Warehouse thể hiện ranh giới web/service và phần database do team DB phụ trách.

## In PDF

Chọn In / Lưu PDF hoặc Ctrl+P. Print stylesheet mở toàn bộ case study và luồng Mail Station; bật background graphics để giữ màu sơ đồ.
