/**
 * Konfigurasi tautan eksternal landing page.
 * Nilai dapat dioverride lewat environment variables (lihat .env.example).
 */
function resolveUrl(value: string | undefined): string {
  return value && value.trim().length > 0 ? value : '#'
}

/** URL aplikasi web ARTO (tujuan CTA utama). */
export const WEB_APP_URL = resolveUrl(import.meta.env.VITE_WEB_APP_URL)

/** URL download APK Android ARTO Mobile. */
export const MOBILE_APK_URL = resolveUrl(import.meta.env.VITE_MOBILE_APK_URL)

/** URL Expo client ARTO Mobile (opsional). */
export const EXPO_URL = resolveUrl(import.meta.env.VITE_EXPO_URL)
