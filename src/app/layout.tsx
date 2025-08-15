import type { Metadata } from 'next'
import './globals.css'
import ClientBody from './ClientBody'

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
      <body>
        <ClientBody>
          {children}
        </ClientBody>
      </body>
    </html>
  )
}
