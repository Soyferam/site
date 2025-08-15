'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    <header className="bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="container-kuper">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-kuper-dark flex items-center justify-center">
                <span className="text-kuper-yellow font-bold text-xl">K</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-light text-kuper-grey uppercase tracking-wider">ПРОМЫШЛЕННОЕ</span>
                <span className="text-xs font-light text-kuper-grey uppercase tracking-wider">НАСОСНОЕ</span>
                <span className="text-xs font-light text-kuper-grey uppercase tracking-wider">ОБОРУДОВАНИЕ</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="nav-item text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side - Language and Phone */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="hidden md:flex items-center space-x-2">
              <button className="bg-kuper-yellow px-3 py-1 text-sm font-semibold text-kuper-dark">
                RU
              </button>
              <span className="text-kuper-grey text-sm">|</span>
              <button className="text-kuper-grey text-sm font-medium hover:text-kuper-dark transition-colors">
                EN
              </button>
            </div>

            {/* Phone Number */}
            <a
              href="tel:+78553318474"
              className="bg-kuper-yellow text-kuper-dark px-4 py-2 text-sm font-semibold hover:bg-opacity-90 transition-all duration-300"
            >
              +7 (8553) 31-84-74
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-kuper-dark hover:text-kuper-yellow transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-sm font-medium text-kuper-dark hover:text-kuper-yellow transition-colors px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-kuper-yellow text-xs mr-3">{item.id}.</span>
                  {item.label}
                </Link>
              ))}

              {/* Mobile Language Switcher */}
              <div className="flex items-center space-x-4 px-4 py-2">
                <button className="bg-kuper-yellow px-3 py-1 text-sm font-semibold text-kuper-dark">
                  RU
                </button>
                <button className="text-kuper-grey text-sm font-medium">
                  EN
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
