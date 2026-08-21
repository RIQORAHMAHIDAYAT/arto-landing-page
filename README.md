# ARTO — Landing Page

Landing website resmi **ARTO**, personal financial tracker.

> Ngerti artone, ngerti uripe.

ARTO membantu pengguna mencatat, memahami, dan mengatur keuangan sehari-hari dengan cara sederhana — lengkap dengan **batas pengeluaran harian dinamis** yang dihitung ulang otomatis setiap transaksi tercatat.

## Fitur Halaman

- **Hero** dengan headline besar dan pratinjau dashboard (data contoh untuk presentasi)
- **Metrik keunggulan** produk dalam angka
- **5 Pilar ARTO**: Nyatet · Ngerti · Ngatur · Nyimpen · Ngembangke
- **Simulator interaktif** batas pengeluaran harian (`daily_limit = remaining_budget / remaining_days`)
- **Panduan 3 langkah** memulai menggunakan ARTO
- **Platform hub**: unduh ARTO Mobile (Android APK) atau buka ARTO Web
- **FAQ** akordeon yang dapat diakses keyboard
- Mode terang/gelap mengikuti preferensi sistem, dapat ditoggle manual

## Teknologi

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com)

Tanpa library UI eksternal — ringan, cepat, dan mudah dipelihara.

## Menjalankan Proyek

```bash
# 1. Instal dependensi
npm install

# 2. Jalankan server pengembangan
npm run dev

# 3. Build produksi
npm run build

# 4. Pratinjau hasil build
npm run preview
```

## Konfigurasi Tautan CTA

Salin `.env.example` menjadi `.env`, lalu isi URL tujuan tombol:

```env
VITE_WEB_APP_URL=https://app.arto.example     # tujuan tombol "Gunakan ARTO Web"
VITE_MOBILE_APK_URL=https://dl.arto.example/arto.apk   # tujuan tombol download APK
VITE_EXPO_URL=                                 # opsional: link Expo client
```

Jika tidak diisi, tombol terkait menunjuk ke `#` (aman untuk demo).

> Catatan: QR code pada section Platform adalah placeholder dekoratif. Ganti dengan QR resmi sebelum rilis publik.

## Struktur Proyek

```
src/
├── components/
│   ├── landing/        # Section halaman (Navbar, Hero, FAQ, dll.)
│   └── ui/             # Komponen dasar (Button)
├── hooks/              # useTheme, useScrollReveal
├── lib/                # cn, formatRupiah
├── config.ts           # Konfigurasi tautan eksternal
├── App.tsx
├── index.css           # Design token ARTO (light/dark)
└── main.tsx
```

## Desain

Menggunakan design system ARTO:

| Token | Light | Dark |
| --- | --- | --- |
| Primary | `#16A34A` | `#22C55E` |
| Secondary | `#2563EB` | `#3B82F6` |
| Background | `#F8FAFC` | `#09090B` |
| Surface | `#FFFFFF` | `#18181B` |

Font utama: **Plus Jakarta Sans**.

---

© ARTO Financial Tracker. Seluruh hak cipta dilindungi.
