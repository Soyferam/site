import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kuper Company - Промышленное насосное оборудование',
  description: 'Купер - производство промышленного насосного оборудования на собственных мощностях. Более 300 реализованных проектов.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
