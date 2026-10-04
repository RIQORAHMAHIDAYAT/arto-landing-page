import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '@/App'

describe('App', () => {
  it('render tanpa error dan menampilkan skip-link', () => {
    render(<App />)
    expect(screen.getByText('Lewati ke konten utama')).toBeInTheDocument()
  })
})
