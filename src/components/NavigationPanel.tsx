'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NavigationPanel = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { id: '01', label: 'КОМПАНИЯ', href: '#company' },
    { id: '02', label: 'СОБЫТИЯ', href: '#news' },
    { id: '03', label: 'УСЛУГИ', href: '#services' },
    { id: '04', label: 'ПРОДУКЦИЯ', href: '#products' },
    { id: '05', label: 'ГЕОГРАФИЯ', href: '#geography' },
    { id: '06', label: 'ПАРТНЕРЫ', href: '#partners' },
    { id: '07', label: 'КОНТАКТЫ', href: '#contacts' },
  ]

  return (
    <div 
      className="hidden lg:block fixed left-24 top-72 z-40"
      style={{
        transform: `translateY(${Math.max(0, Math.min(scrollY - 200, typeof window !== 'undefined' ? window.innerHeight - 400 : 0))}px)`,
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <nav className="flex flex-col space-y-8">
        {navigationItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="group flex items-center space-x-4 text-base text-white"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 w-8 h-8 bg-kuper-yellow rounded-full opacity-60 -left-1"></div>
              <span className="text-white font-semibold relative z-10 text-lg">{item.id}.</span>
            </div>
            <span className="font-medium text-white text-lg">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>

      {/* Copyright */}
      <div className="mt-20 text-sm text-white">
        <p>© 2025 ООО</p>
        <p>«Купер»</p>
      </div>
    </div>
  )
}

export default NavigationPanel
