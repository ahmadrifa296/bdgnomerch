# BDG BOYS MERCH - Official Merchandise & Streetwear

Website company profile dan katalog merchandise resmi **BDG BOYS MERCH** (Bandung Boys Merchandise). Dibangun sebagai frontend static SPA yang cepat, responsif, dan siap di-deploy langsung ke Vercel melalui GitHub.

---

## 🛠️ Technology Stack

- **Framework & Core:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4 (Streetwear Dark Mode & Responsive Layout)
- **Routing:** React Router DOM (v7)
- **Icons:** Lucide React & Custom SVG
- **Animations:** Framer Motion & CSS Micro-interactions
- **Integrasi Pemesanan:** WhatsApp Direct Ordering with Dynamic Template URL Generator

---

## 📁 Struktur Project

```text
bdgnomerch/
├── public/
│   ├── favicon.svg             # Favicon SVG resmi BDG BOYS
│   └── icons.svg
├── src/
│   ├── assets/                 # Asset gambar dan icon
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Navigasi responsif desktop & mobile
│   │   │   ├── Footer.tsx      # Info studio, alamat, link medsos, & legalitas
│   │   │   └── ScrollToTop.tsx # Auto reset scroll posisi pada pergantian route
│   │   └── ui/
│   │       ├── FloatingWhatsApp.tsx # Floating badge & popup quick chat
│   │       ├── Icons.tsx       # Custom SVG brand icons (Instagram, dll.)
│   │       ├── ProductCard.tsx # Kartu produk dengan rating, tags, & tombol WA
│   │       └── SizeChartModal.tsx # Panduan ukuran (size chart) distro
│   ├── data/
│   │   └── products.ts         # Dataset katalog, review konsumen, & FAQ
│   ├── pages/
│   │   ├── HomePage.tsx        # Hero banner, best sellers, cerita brand, ulasan
│   │   ├── CatalogPage.tsx     # Filter kategori, live search, & sorting produk
│   │   ├── ProductDetailPage.tsx # Detail produk, galeri, size picker, order WA
│   │   ├── AboutPage.tsx       # Sejarah brand, nilai kualitas, workshop Bandung
│   │   ├── OrderGuidePage.tsx  # 4 langkah order via WA & copy format pesan
│   │   ├── ContactPage.tsx     # Formulir interaktif WA & lokasi offline studio
│   │   └── NotFoundPage.tsx    # Halaman 404 client-side fallback
│   ├── types/
│   │   └── index.ts            # Definisi tipe TypeScript
│   ├── utils/
│   │   └── whatsapp.ts         # Utility WhatsApp order URL generator & format harga
│   ├── App.tsx                 # Routing utama React Router
│   ├── index.css               # Setup Tailwind CSS v4
│   └── main.tsx                # Entry point aplikasi
├── .env.example                # Template variabel lingkungan
├── .gitignore                  # Rule ignore git (node_modules, dist, .env, dll.)
├── package.json
├── tsconfig.json
├── vercel.json                 # Konfigurasi routing rewrite SPA untuk Vercel
└── vite.config.ts              # Konfigurasi Vite + React + Tailwind
```

---

## 🚀 Fitur Utama

1. **Direct WhatsApp Ordering:**
   - Pemesanan satu klik dari setiap produk.
   - Otomatis membuat draf pesan berisi: Nama Produk, Ukuran (Size), Jumlah (Qty), dan Catatan ke nomor WhatsApp admin.
2. **Katalog Produk Dinamis:**
   - Filter kategori (T-Shirt, Hoodie & Sweatshirt, Jersey, Headwear, Aksesoris).
   - Live Search produk berdasarkan nama, tag, atau material.
   - Sorting berdasarkan popularitas, harga termurah, harga tertinggi, dan rilisan terbaru.
3. **Detail Produk & Size Chart Modal:**
   - Galeri foto produk berkualitas tinggi.
   - Pilihan ukuran interaktif (S, M, L, XL, XXL).
   - Modal tabel panduan ukuran (Size Chart).
   - Penghitung kuantitas (Qty counter) otomatis.
4. **Floating WhatsApp Chat Widget:**
   - Tombol mengambang di pojok kanan bawah dengan efek pulsasi online status.
   - Popup cepat untuk langsung chat dengan customer care.
5. **Panduan Pemesanan & Copy Template:**
   - Panduan 4 tahap mudah tanpa registrasi.
   - Tombol copy-to-clipboard untuk format pemesanan instan.
6. **Desain Modern Streetwear & Mobile-First:**
   - Palet warna dark mode sleek (`#090d16`), aksen biru elektrik dan gold amber.
   - 100% responsif di desktop, tablet, dan smartphone.

---

## 💻 Cara Menjalankan Secara Lokal

1. **Clone repository atau buka direktori project:**
   ```bash
   cd d:/JASA/bdgnomerch
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Salin file environment variables:**
   ```bash
   cp .env.example .env
   ```
   *(Sesuaikan nomor WhatsApp dan informasi brand jika diperlukan di file `.env`)*

4. **Jalankan development server:**
   ```bash
   npm run dev
   ```
   Buka browser di `http://localhost:5173/`.

---

## 📦 Cara Melakukan Build

Untuk menguji kompilasi kode dan menghasilkan bundle siap produksi:

```bash
npm run build
```

Bundle produksi akan dibuat di direktori `dist/`.

Untuk melihat preview hasil build secara lokal:
```bash
npm run preview
```

---

## ☁️ Cara Deploy ke Vercel

Project ini 100% kompatibel dan siap di-deploy ke Vercel tanpa backend tambahan.

### Konfigurasi Vercel (`vercel.json`)
File `vercel.json` pada root direktori telah dikonfigurasi untuk mendukung React Router DOM:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}
```
*Konfigurasi ini memastikan bahwa saat pengguna merefresh halaman selain homepage (seperti `/catalog` atau `/product/bdg-001`), server tidak mengembalikan error 404, melainkan mengarahkan ke `index.html` agar ditangani oleh React Router DOM.*

### Langkah Deploy via GitHub ke Vercel:

1. **Commit & Push kode ke GitHub:**
   ```bash
   git add .
   git commit -m "feat: complete BDG BOYS MERCH with Vercel deployment configuration"
   git branch -M main
   git remote add origin https://github.com/<username-kamu>/bdgnomerch.git
   git push -u origin main
   ```

2. **Login ke Dashboard Vercel ([vercel.com](https://vercel.com)):**
   - Klik **"Add New..."** -> **"Project"**.
   - Pilih repository GitHub `bdgnomerch` dan klik **"Import"**.

3. **Pengaturan Project di Vercel (Auto-detected):**
   - **Framework Preset:** `Vite`
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. **Environment Variables (Opsional):**
   Tambahkan variabel berikut di menu **Environment Variables** Vercel jika ingin mengubah nomor WA atau URL Instagram resmi:
   - `VITE_BRAND_NAME` = `BDG BOYS MERCH`
   - `VITE_WHATSAPP_NUMBER` = `6281234567890`
   - `VITE_INSTAGRAM_URL` = `https://instagram.com/bdgboysmerch`
   - `VITE_STORE_LOCATION` = `Bandung, Jawa Barat, Indonesia`

5. **Klik "Deploy":**
   Vercel akan secara otomatis membangun aplikasi dalam waktu kurang dari 1 menit dan memberikan domain publik gratis (misalnya `https://bdgboysmerch.vercel.app/`). Setiap kali kamu melakukan `git push` ke branch `main`, Vercel akan otomatis melakukan auto-deploy update terbaru.
