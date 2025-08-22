'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      // Плашка появляется только после HeroSection (примерно 100vh)
      setIsScrolled(scrollTop > window.innerHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Background overlay that appears on scroll */}
      <div 
        className={`absolute inset-0 bg-white/95 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      <div className="container-kuper h-full relative z-10">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center space-x-4">
              <Image 
                src="/images/logo.png" 
                alt="Купер - промышленное насосное оборудование" 
                width={160} 
                height={80} 
                className="h-16 w-auto"
              />
              <div className="flex flex-col justify-center space-y-0.5">
                <span className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                  isScrolled ? 'text-kuper-dark' : 'text-white'
                }`}>ПРОМЫШЛЕННОЕ</span>
                <span className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                  isScrolled ? 'text-kuper-dark' : 'text-white'
                }`}>НАСОСНОЕ ОБОРУДОВАНИЕ</span>
              </div>
            </div>
          </Link>

          {/* Right side - Phone Number */}
          <div className="flex items-center">
            <a
              href="tel:+78553318474"
              className="bg-kuper-yellow text-kuper-dark px-6 py-3 text-base font-semibold hover:bg-opacity-90 transition-all duration-300 rounded-md"
            >
              +7 (8553) 31-84-74
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
