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
      <div className="container-kuper py-20 lg:ml-64">
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
                  <label className="block text-sm font-medium mb-2 text-kuper-yellow">ТЕЛЕФ</label>
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

          {/* Map and Contact Info */}
          <div>
            {/* Map Placeholder */}
            <div className="bg-kuper-grey h-64 mb-8 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 text-kuper-yellow mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-white text-sm">Интерактивная карта</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-kuper-yellow mb-2">АДРЕС</h4>
                <p className="text-white/80 text-sm">
                  423450,<br />
                  Россия,<br />
                  Республика Татарстан,<br />
                  Альметьевск,<br />
                  ул.Р.Фахретдина, 60НА
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-kuper-yellow mb-2">ТЕЛЕФОН</h4>
                <a
                  href="tel:+78553318474"
                  className="text-white/80 hover:text-kuper-yellow transition-colors"
                >
                  +7 (8553) 31-84-74
                </a>
              </div>

              <div>
                <h4 className="font-semibold text-kuper-yellow mb-2">ЭЛ. ПОЧТА</h4>
                <a
                  href="mailto:info@kupercompany.com"
                  className="text-white/80 hover:text-kuper-yellow transition-colors break-all"
                >
                  info@kupercompany.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <a
                href="https://www.youtube.com/user/kupercompany"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-kuper-yellow hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-kuper-grey py-6">
        <div className="container-kuper">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-kuper-yellow flex items-center justify-center">
                <span className="text-kuper-dark font-bold text-sm">K</span>
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
