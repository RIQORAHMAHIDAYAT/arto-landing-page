import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { ThemeProvider } from '@/context/ThemeContext'
import { useTheme } from '@/context/theme'

function Probe() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button type="button" data-theme={theme} onClick={toggleTheme}>
      {theme}
    </button>
  )
}

describe('ThemeProvider', () => {
  it('melempar error saat useTheme dipakai di luar provider', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => undefined)
    expect(() => render(<Probe />)).toThrow()
    errorSpy.mockRestore()
  })

  it('toggleTheme mengubah tema dan menyimpannya ke localStorage', () => {
    window.localStorage.clear()
    render(
      <ThemeProvider>
        <Probe />
      </ThemeProvider>,
    )

    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('data-theme', 'light')
    fireEvent.click(button)
    expect(screen.getByRole('button')).toHaveAttribute('data-theme', 'dark')
    expect(window.localStorage.getItem('arto-theme')).toBe('dark')
  })
})
