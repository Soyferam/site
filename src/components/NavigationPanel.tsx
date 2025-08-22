'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NavigationPanel = () => {
  const [currentSection, setCurrentSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      // Проверяем только те секции, которые точно существуют
      if (scrollPosition < 800) {
        setCurrentSection('hero')
      } else if (scrollPosition < 900) {
        setCurrentSection('company')
      } else if (scrollPosition < 2200) {
        setCurrentSection('news')
      } else if (scrollPosition < 3000) {
        setCurrentSection('services')
      } else if (scrollPosition < 5200) {
        setCurrentSection('products')
      } else if (scrollPosition < 5800) {
        setCurrentSection('geography')
      } else if (scrollPosition < 6400) {
        setCurrentSection('partners')
      } else {
        setCurrentSection('contacts')
      }

      // Отладочная информация
      console.log('Scroll position:', scrollPosition, 'Current section:', currentSection, 'Text color:', getTextColor(currentSection))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { id: '01', label: 'КОМПАНИЯ', href: '#company', section: 'company' },
    { id: '02', label: 'СОБЫТИЯ', href: '#news', section: 'news' },
    { id: '03', label: 'УСЛУГИ', href: '#services', section: 'services' },
    { id: '04', label: 'ПРОДУКЦИЯ', href: '#products', section: 'products' },
    { id: '05', label: 'ГЕОГРАФИЯ', href: '#geography', section: 'geography' },
    { id: '06', label: 'ПАРТНЕРЫ', href: '#partners', section: 'partners' },
    { id: '07', label: 'КОНТАКТЫ', href: '#contacts', section: 'contacts' },
  ]

  // Упрощенная логика определения цвета
  const getTextColor = (section: string) => {
    switch (section) {
      case 'hero':
        return 'text-white'
      case 'news':
        return 'text-kuper-dark'
      case 'services':
        return 'text-kuper-dark'
      case 'products':
        return 'text-kuper-dark'
      default:
        return 'text-white'
    }
  }

  const textColor = getTextColor(currentSection)

  return (
    <div className="hidden lg:block fixed left-24 top-72 z-40">
      <nav className="flex flex-col space-y-8">
        {navigationItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`group flex items-center space-x-4 text-base ${textColor}`}
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 w-8 h-8 bg-kuper-yellow rounded-full opacity-60 -left-1"></div>
              <span className={`${textColor} font-semibold relative z-10 text-lg`}>{item.id}.</span>
            </div>
            <span className={`font-medium ${textColor} text-lg`}>
              {item.label}
            </span>
          </Link>
        ))}
      </nav>

      {/* Copyright */}
      <div className={`mt-20 text-sm ${textColor}`}>
        <p>© 2025 ООО</p>
        <p>«Купер»</p>
      </div>
    </div>
  )
}

export default NavigationPanel
