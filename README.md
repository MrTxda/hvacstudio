# HVAC Studio — Bộ công cụ tính toán HVAC trực tuyến

Dự án sao chép đầy đủ từ [HVAC Studio](https://hvacstudio.vn/) — Không gian tính toán kỹ thuật cho kỹ sư HVAC, chạy 100% Client-side (HTML5, CSS3, JavaScript thuần), không cần backend.

---

## 🌟 Giới thiệu

HVAC Studio cung cấp **15 công cụ tính toán kỹ thuật** trực quan, nhanh chóng và chính xác:

### 1. Tải lạnh & lưu lượng
- **Tính tải lạnh & chọn AC**: Ước tính tải nhiệt hiện, tải nhiệt ẩn và công suất điều hòa (kW, BTU/h).
- **Quy đổi tải & lưu lượng**: Chuyển đổi tải lạnh sang lưu lượng gió hoặc nước theo $\Delta T$.

### 2. Hệ thống gió
- **Tính thông gió & gió tươi**: Tính gió tươi theo người, diện tích, ACH hoặc phương pháp phối hợp.
- **Tải xử lý gió tươi & AHU/FAHU**: Tính hòa trộn không khí, tải dàn lạnh, lượng nước ngưng và lưu lượng nước lạnh.
- **Tính chọn ống gió**: So sánh ống gió tròn / chữ nhật theo giới hạn vận tốc và ma sát.
- **Quy cách chế tạo & vật tư ống gió**: Tính diện tích tôn, phụ kiện, mặt bích và vật tư theo tiêu chuẩn.
- **Tính giá đỡ & ty treo ống gió**: Kiểm tra tải trọng, quy cách thanh ngang và kích thước ty treo.
- **Tính chọn miệng gió**: Kiểm tra vận tốc qua diện tích hữu dụng (Ak), độ ồn và tầm thổi.
- **Tính áp suất & chọn quạt**: Tính tổng tổn thất áp suất trên tuyến ống và công suất quạt.

### 3. Hệ thống nước
- **Tính chọn ống nước**: Tính thủy lực ống Chiller, ống nước làm mát, cấp nước và thoát nước.
- **Tính cột áp & chọn bơm**: Tính tổn thất cột áp tĩnh, cột áp ma sát, phụ kiện và công suất bơm.
- **Tính bình giãn nở**: Ước tính dung tích bình giãn nở màng cho hệ kín Chiller/Boiler.

### 4. Kiểm tra chi tiết
- **Tổn thất phụ kiện**: Tính tổn thất áp suất cục bộ cho co, cút, tê, van theo hệ số $K$.
- **Tính cách nhiệt & chống đọng sương**: Kiểm tra bề dày cách nhiệt ống nước, ống gió và ống đồng gas.
- **Biểu đồ không khí ẩm (Psychrometric Chart)**: Tra cứu trạng thái không khí, điểm sương, độ ẩm tương đối và hòa trộn dòng khí.

---

## 🚀 Hướng dẫn chạy cục bộ (Local)

Dự án hoàn toàn tĩnh (static), bạn có thể chạy bằng bất kỳ web server nào:

### Cách 1: Sử dụng Python (đã có sẵn)
```bash
# Di chuyển vào thư mục dự án
cd hvacstudio

# Chạy server
python -m http.server 8000
```
Truy cập: `http://localhost:8000/` hoặc `http://localhost:8000/vi/`

### Cách 2: Sử dụng Node.js / npx
```bash
npx serve .
```

### Cách 3: Sử dụng tiện ích mở rộng VS Code Live Server
Mở thư mục trong VS Code, nhấp chuột phải vào `index.html` và chọn **Open with Live Server**.

---

## 🌐 Triển khai lên GitHub Pages / Vercel / Cloudflare Pages

### Triển khai GitHub Pages:
1. Đẩy code lên repository trên GitHub:
   ```bash
   git add .
   git commit -m "feat: initial commit hvacstudio clone"
   git remote add origin https://github.com/<username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
2. Vào **Settings** > **Pages** trên GitHub repo.
3. Chọn Branch `main` và thư mục `/ (root)`. Nhấn **Save**.

### Triển khai Vercel / Cloudflare Pages / Netlify:
- Kết nối kho mã nguồn GitHub với Vercel / Cloudflare Pages.
- Cấu hình Build Command để trống, Output Directory là `./` (root).
- Nhấn **Deploy**.

---

## 📄 Bản quyền & Ghi công
- Nội dung gốc thuộc về [HVAC Studio](https://hvacstudio.vn/).
- Dự án này phục vụ mục đích nghiên cứu, học tập và lưu trữ kỹ thuật HVAC.
