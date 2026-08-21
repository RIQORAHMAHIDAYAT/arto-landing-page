import { useEffect, useState } from 'react'
import { WEB_APP_URL } from '@/config'
import { useTheme } from '@/context/ThemeContext'
import { ButtonLink } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

const NAV_LINKS = [
  { label: 'Fitur Utama', target: 'fitur' },
  { label: 'Daily Limit', target: 'daily-limit' },
  { label: 'Cara Pakai', target: 'cara-pakai' },
  { label: 'Platform', target: 'platform' },
  { label: 'FAQ', target: 'faq' },
] as const

function scrollToTarget(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
    >
      {isDark ? (
        <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.36 6.36-.7-.7M6.34 6.34l-.7-.7m12.72 0-.7.7M6.34 17.66l-.7.7M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
          />
        </svg>
      ) : (
        <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
          />
        </svg>
      )}
    </button>
  )
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  const handleNavClick = (target: string) => {
    setMenuOpen(false)
    scrollToTarget(target)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <a href="#" className="flex shrink-0 items-center gap-2.5" aria-label="ARTO — kembali ke atas">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-lg font-extrabold text-white shadow-md shadow-primary/25">
            A
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-lg font-extrabold tracking-tight">ARTO</span>
            <span className="mt-0.5 hidden text-[10px] font-medium text-muted sm:block">
              Ngerti artone, ngerti uripe
            </span>
          </span>
        </a>

        {/* Navigasi desktop */}
        <nav aria-label="Navigasi utama" className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.target}
              type="button"
              onClick={() => scrollToTarget(link.target)}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Aksi desktop */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <ThemeToggle />
          <ButtonLink variant="ghost" size="sm" href="#platform">
            <span aria-hidden="true">📱</span> ARTO Mobile
          </ButtonLink>
          <ButtonLink size="sm" href={WEB_APP_URL}>
            Gunakan Web
          </ButtonLink>
        </div>

        {/* Aksi mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:bg-surface-hover"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={cn(
          'overflow-hidden border-border bg-background transition-[max-height] duration-300 ease-in-out lg:hidden',
          menuOpen ? 'max-h-96 border-t' : 'max-h-0',
        )}
      >
        <nav aria-label="Navigasi seluler" className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.target}
              type="button"
              onClick={() => handleNavClick(link.target)}
              className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
          <div className="mt-3 flex flex-col gap-2 border-t border-border pt-4">
            <ButtonLink variant="ghost" href="#platform" className="w-full" onClick={() => setMenuOpen(false)}>
              <span aria-hidden="true">📱</span> Download ARTO Mobile
            </ButtonLink>
            <ButtonLink href={WEB_APP_URL} className="w-full">
              Gunakan ARTO Web
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  )
}
