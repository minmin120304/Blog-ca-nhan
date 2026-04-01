# Lab Guideline: Xây dựng Blog Cá Nhân (Mèo Blog)

Tài liệu này hướng dẫn chi tiết các bước để xây dựng một ứng dụng Blog hiện đại sử dụng **Next.js 16**, **Tailwind CSS 4**, và **TypeScript**.

---

## Các bước thực hiện chi tiết

### B1: Khởi tạo Project Next.js
*   **Mô tả:** Tạo dự án mới với cấu trúc App Router và hỗ trợ TypeScript.
*   **Chạy lệnh:** 
    ```bash
    npx create-next-app@latest blog-ca-nhan --typescript --tailwind --eslint
    ```
*   **File cấu hình:** `package.json`, `tsconfig.json`, `next.config.ts`.

### B2: Cài đặt các Thư viện bổ trợ (Dependencies)
*   **Mô tả:** Cài đặt các công cụ để xử lý Icon, Form, Validation và CSS.
*   **Chạy lệnh:**
    ```bash
    npm install lucide-react react-hot-toast zod react-hook-form @hookform/resolvers clsx tailwind-merge date-fns
    ```
*   **File cấu hình:** `package.json`.

### B3: Cấu hình Hệ thống Design (Tailwind CSS 4)
*   **Mô tả:** Thiết lập màu sắc, font chữ và các animation tùy chỉnh cho thương hiệu "Mèo Blog".
*   **Thực hiện:** Cập nhật file `app/globals.css` với các biến CSS và utility classes.
*   **File:** `app/globals.css`, `postcss.config.mjs`.

### B4: Xây dựng Thư viện Tiện ích (Utils)
*   **Mô tả:** Tạo các hàm helper để xử lý class name động và format dữ liệu.
*   **Thực hiện:** Sử dụng `clsx` và `tailwind-merge`.
*   **File:** `lib/utils.ts`.

### B5: Thiết lập Cấu trúc Dữ liệu (Mock Data)
*   **Mô tả:** Tạo file JSON chứa danh sách bài viết, tác giả và danh mục để làm dữ liệu mẫu.
*   **Thực hiện:** Tạo thư mục `data/` và file `posts.json`.
*   **File:** `data/posts.json`.

### B6: Xây dựng Tầng xử lý Dữ liệu (API Layer)
*   **Mô tả:** Viết các hàm async để fetch dữ liệu từ file JSON hoặc API server.
*   **Thực hiện:** Tạo các hàm `getPosts`, `getPostBySlug`.
*   **File:** `lib/api.ts`.

### B7: Thiết kế Layout chung cho Ứng dụng
*   **Mô tả:** Xây dựng Header, Footer và cấu trúc bao bọc (Wrapper) cho toàn bộ trang web.
*   **Thực hiện:** Chỉnh sửa file `app/layout.tsx`. Tận dụng Font `Outfit` hoặc `Inter` từ Google Fonts.
*   **File:** `app/layout.tsx`, `components/layout/Header.tsx`, `components/layout/Footer.tsx`.

### B8: Xây dựng Trang chủ (Home Page)
*   **Mô tả:** Thiết kế Hero Section rực rỡ và danh sách các bài viết mới nhất.
*   **Thực hiện:** Sử dụng `lucide-react` cho icons và `next/image` để tối ưu ảnh.
*   **File:** `app/page.tsx`, `components/blog/PostCard.tsx`, `components/blog/PostList.tsx`.

### B9: Xây dựng Trang Chi tiết Bài viết (Dynamic Routes)
*   **Mô tả:** Sử dụng Dynamic Routing `[slug]` để hiển thị nội dung bài viết chi tiết.
*   **Thực hiện:** Cấu hình `generateStaticParams` để tối ưu SEO và tốc độ tải trang (SSG).
*   **File:** `app/blog/[slug]/page.tsx`, `components/blog/PostContent.tsx`.

### B10: Xử lý Chức năng Bình luận & Liên hệ
*   **Mô tả:** Sử dụng `react-hook-form` và `zod` để validate form nhập liệu của người dùng.
*   **Thực hiện:** Tạo Schema validation và UI phản hồi (Toast notifications).
*   **File:** `app/blog/[slug]/@comments/page.tsx` (nếu dùng Parallel Routes) hoặc components form.

### B11: Xử lý Lỗi & Trang 404
*   **Mô tả:** Tạo giao diện thân thiện khi người dùng truy cập sai đường dẫn hoặc gặp lỗi server.
*   **File:** `app/not-found.tsx`, `app/error.tsx`.

### B12: Khởi chạy và Kiểm tra
*   **Chạy lệnh:**
    ```bash
    npm run dev
    ```
*   **Địa chỉ:** Truy cập `http://localhost:3000` để xem kết quả.

---

## Các công nghệ chính sử dụng
1.  **Next.js 16 (App Router):** Framework mạnh mẽ nhất cho React hiện nay.
2.  **Tailwind CSS 4:** Engine CSS thế hệ mới, tối ưu hiệu năng và linh hoạt.
3.  **Lucide React:** Bộ icons vector sắc nét, dễ tùy biến.
4.  **Zod & React Hook Form:** Bộ đôi hoàn hảo để xử lý form và dữ liệu an toàn (Type-safe).
5.  **Date-fns:** Thư viện xử lý thời gian gọn nhẹ.

