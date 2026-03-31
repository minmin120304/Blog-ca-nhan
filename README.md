# 🐾 Mèo Blog - Next.js Learning Platform

Mèo Blog là một ứng dụng web hiện đại được xây dựng để chia sẻ kiến thức, kinh nghiệm chăm sóc và những câu chuyện thú vị về loài mèo. Dự án được phát triển dựa trên **Next.js 15+ (App Router)** với mục tiêu tối ưu hiệu năng và trải nghiệm người dùng cao cấp.

## 🚀 Tính năng nổi bật

- **Kiến trúc App Router**: Sử dụng Server Components, Parallel Routes và Dynamic Routing.
- **Thiết kế Hiện đại**: UI/UX đậm chất "boss", sử dụng Tailwind CSS 4, hiệu ứng Glassmorphism và tối ưu hóa Typography.
- **Hệ thống Blog**:
  - Tìm kiếm bài viết thời gian thực (Debounced Search).
  - Lọc bài viết theo chuyên mục.
  - Trang chi tiết với Typography chuẩn SEO.
- **Hệ thống Bình luận**: Tích hợp Parallel Routing (`@comments`) với tính năng Optimistic Updates.
- **Form Liên hệ**: Validation phía Client & Server với React Hook Form và Zod.
- **Tối ưu UX**: Hiệu ứng Skeleton Loading cho mọi trang fetch dữ liệu.
- **SEO Ready**: Tự động tạo Metadata, hỗ trợ OpenGraph và tối ưu hóa hình ảnh.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Validation**: Zod + React Hook Form
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Date Formatting**: date-fns

## 📦 Cài đặt & Chạy ứng dụng

1. **Clone dự án**:
   ```bash
   git clone <repo-url>
   cd Blog-ca-nhan
   ```

2. **Cài đặt dependencies**:
   ```bash
   npm install
   ```

3. **Chạy chế độ development**:
   ```bash
   npm run dev
   ```

4. **Build sản phẩm**:
   ```bash
   npm run build
   npm start
   ```

## 📂 Cấu trúc thư mục

- `app/`: Routing và Pages.
- `components/`: Thư viện Component (Layout, Blog, Forms, UI).
- `lib/`: Các hàm tiện ích, API logic và Validation schemas.
- `types/`: Định nghĩa kiểu dữ liệu TypeScript.
- `data/`: Dữ liệu mẫu (JSON).
- `hooks/`: Custom React hooks.

---
*Chúc các Sen có những giây phút thư giãn cùng Mèo Blog!* 🐱✨
