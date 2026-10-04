# Security Policy - arto-landing

**Cakupan:** Landing website

## Melaporkan kerentanan

Jangan membuka issue publik untuk laporan kerentanan.

Gunakan GitHub **Security Advisories** pada repo ini
(*Security -> Report a vulnerability*), atau hubungi maintainer repo secara private.

Sertakan:

- Deskripsi kerentanan dan dampaknya.
- Langkah reproduksi, mulai dari environment yang dipakai.
- Indikasi dampak: data mana yang bisa dibaca, dan apakah butuh role tertentu.

Target waktu balas: **7 hari kerja**. Setelah perbaikan siap,
perbaikan dirilis lebih dulu; baru kemudian diproses permintaan disclosure.

## Apa yang dianggap kerentanan

| Kategori | Contoh |
| --- | --- |
| Phishing | Form yang mengarang kredensial ARTO. |
| Script pihak ketiga | Analytics atau font eksternal yang tidak disetujui. |
| SEO dan canonical | Domain yang terindeks tidak sesuai. |

> **Catatan khusus:** Landing tidak menangani data keuangan maupun autentikasi.

## Yang BUKAN kerentanan

- Laporan dari scanner otomatis tanpa bukti reproduksi.
- Saran best practice tanpa dampak nyata (ditangani sebagai issue biasa).
- Rate limit yang sudah aktif dan tidak bisa di-bypass.
- Aplikasi mobile yang sudah di-root atau di-jailbroken.

## Severitas dan penanganan

| Severitas | Contoh | Tindakan |
| --- | --- | --- |
| Critical | Akses data keuangan user lain, auth bypass | Perbaikan dan advisory segera |
| High | IDOR yang dapat dieksploitasi | Perbaikan dalam 1-2 minggu |
| Medium | Pengungkapan terbatas tanpa akses data | Perbaikan pada rilis berikutnya |
| Low | Hardening dan best practice | Backlog |

## Praktik yang wajib dijaga di repo ini

- Tidak ada secret di dalam kode. Satu-satunya konfigurasi adalah environment
  variable berawalan `VITE_`, dan hanya untuk URL publik.
- Nilai environment variable mengikuti `.env.example`: `VITE_WEB_APP_URL`,
  `VITE_MOBILE_APK_URL`, dan `VITE_EXPO_URL`. File `.env` tidak pernah di-commit.
- Analytics, font, atau script pihak ketiga hanya boleh ditambahkan setelah
  disetujui maintainer.
- Tidak boleh ada form atau deceptive UI yang mengatasnamakan ARTO untuk meminta
  kredensial pengguna.
- Domain dan canonical tag harus menunjuk ke domain resmi ARTO.
- Dependency kerentanan ditutup lewat Dependabot dan `npm audit`.
