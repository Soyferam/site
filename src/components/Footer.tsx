'use client'

import { useState } from 'react'
import Image from 'next/image'

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isPrivacyAccepted) {
      alert('Необходимо согласие на обработку персональных данных')
      return
    }
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
  }

  return (
    <footer id="contacts" className="bg-kuper-dark-grey text-white relative">
      {/* Additional top spacing with dark background */}
      <div className="h-32 bg-kuper-dark-grey"></div>
      
      <div className="container-kuper py-40 lg:ml-64">
        
        {/* Section Header - Added more space at top */}
        <div className="text-center mb-20">
          <div className="absolute left-0 top-0 section-number opacity-10 text-white text-8xl font-black">07</div>
          <h2 className="text-5xl font-bold text-kuper-yellow mb-6">Контакты</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Свяжитесь с нами для получения консультации и заказа оборудования
          </p>
        </div>

        {/* Contact Information - Moved to top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-kuper-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-kuper-yellow" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="font-semibold text-kuper-yellow mb-2">АДРЕС</h4>
            <p className="text-white/80 text-sm">
              423450, Россия, Республика Татарстан,<br />
              Альметьевск, ул.Р.Фахретдина, 60НА
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-kuper-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-kuper-yellow" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <h4 className="font-semibold text-kuper-yellow mb-2">ТЕЛЕФОН</h4>
            <a
              href="tel:+78553318474"
              className="text-white/80 hover:text-kuper-yellow transition-colors text-lg font-medium"
            >
              +7 (8553) 31-84-74
            </a>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-kuper-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-kuper-yellow" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h4 className="font-semibold text-kuper-yellow mb-2">ЭЛ. ПОЧТА</h4>
            <a
              href="mailto:info@kupercompany.com"
              className="text-white/80 hover:text-kuper-yellow transition-colors break-all text-lg font-medium"
            >
              info@kupercompany.com
            </a>
          </div>
        </div>

        {/* Form and Map Section - Moved below */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-kuper-yellow">
              ОСТАВИТЬ СООБЩЕНИЕ
            </h3>
            <p className="text-white/80 mb-6">
              МЫ В СОЦСЕТЯХ
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-kuper-yellow">ИМЯ</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white text-kuper-dark border-2 border-kuper-grey focus:border-kuper-yellow focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-kuper-yellow">ТЕЛЕФОН</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white text-kuper-dark border-2 border-kuper-grey focus:border-kuper-yellow focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-kuper-yellow">ЭЛ. ПОЧТА</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white text-kuper-dark border-2 border-kuper-grey focus:border-kuper-yellow focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-kuper-yellow">СООБЩЕНИЕ</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white text-kuper-dark border-2 border-kuper-grey focus:border-kuper-yellow focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={isPrivacyAccepted}
                  onChange={(e) => setIsPrivacyAccepted(e.target.checked)}
                  className="mt-1 w-4 h-4 text-kuper-yellow bg-white border-kuper-grey focus:ring-kuper-yellow"
                />
                <label htmlFor="privacy" className="text-sm text-white/80">
                  СОГЛАСЕН НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ
                  <br />
                  <span className="text-xs">
                    Ознакомиться с документом обработка персональных данных можно на странице{' '}
                    <a href="/privacy" className="text-kuper-yellow hover:underline">
                      Политика конфиденциальности
                    </a>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="btn-kuper w-full md:w-auto"
              >
                ОСТАВИТЬ СООБЩЕНИЕ
              </button>
            </form>
          </div>

          {/* Map and Social Media */}
          <div>
            {/* Map Placeholder */}
            <div className="bg-kuper-grey h-80 mb-8 relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-kuper-yellow mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-white text-lg font-medium">Интерактивная карта</p>
                  <p className="text-white/60 text-sm mt-2">Нажмите для просмотра</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center">
              <h4 className="font-semibold text-kuper-yellow mb-4">МЫ В СОЦИАЛЬНЫХ СЕТЯХ</h4>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.youtube.com/user/kupercompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-kuper-yellow hover:text-white transition-colors p-3 rounded-lg hover:bg-kuper-yellow/10"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="font-medium">YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-kuper-grey py-6 mt-20">
        <div className="container-kuper">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Kuper Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white/60 text-sm">
                © 2025 ООО «Купер» — промышленное насосное оборудование
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
