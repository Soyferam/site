'use client'

import Image from 'next/image'
import Link from 'next/link'

const NewsSection = () => {
  const newsItems = [
    {
      date: '9 MAY 2025',
      title: 'ПОЗДРАВЛЯЕМ С ДНЕМ ПОБЕДЫ!',
      description: 'Коллектив «Купер» от всей души поздравляет с Днем Победы! 9 Мая — это день памяти героев, благодаря которым мы сегодня живем в свободе.',
      image: 'https://ext.same-assets.com/3869708485/3930060051.jpeg',
      link: '/news/pozdravlyaem-s-dnem-pobedyi'
    },
    {
      date: '7 MAR 2025',
      title: '8 МАРТА',
      description: 'Поздравляем дорогих девушек с Международным женским днем 8 Марта. Желаем здоровья, счастья, улыбок, позитива, цветов и улыбок. Пусть в работе вам всегда сопутствует успех.',
      image: 'https://ext.same-assets.com/3869708485/1431624813.jpeg',
      link: '/news/8-marta'
    },
    {
      date: '22 FEB 2025',
      title: 'С 23 ФЕВРАЛЯ',
      description: 'Поздравляем с Днем защитника Отечества и февральского здоровья. Пусть каждый ваш день будет наполнен событиями. Пусть вас не сломают жизненные железные препятствия, и пусть слава жизни будет благосклонна.',
      image: 'https://ext.same-assets.com/3869708485/87964722.jpeg',
      link: '/news/c-23-fevralya'
    },
    {
      date: '24 DEC 2024',
      title: 'С НОВЫМ ГОДОМ!',
      description: 'Желаем крепкого здоровья в новом году! Желаем Вам и Вашим близким благословенной энергии, крепкого здоровья, благополучия и больших побед в наступающем 2025-м году.',
      image: 'https://ext.same-assets.com/3869708485/2763876298.jpeg',
      link: '/news/s-novyim-godom'
    }
  ]

  return (
    <section id="news" className="py-32 bg-gradient-to-br from-white via-gray-50 to-kuper-light-grey relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-kuper-yellow/5 to-transparent opacity-30"></div>
      
      <div className="container-kuper lg:ml-64 px-6 relative z-10">
        {/* Section Number */}
        <div className="absolute left-0 top-0 section-number opacity-10 text-kuper-dark text-8xl font-black">02</div>

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-kuper-dark mb-6">События и Новости</h2>
          <p className="text-xl text-kuper-dark/80 max-w-3xl mx-auto leading-relaxed">
            Актуальные новости компании, поздравления и важные события
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {newsItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <Link href={item.link}>
                <div className="bg-white/80 backdrop-blur-sm border-l-4 border-kuper-yellow p-8 hover:shadow-2xl transition-all duration-500 rounded-r-lg transform hover:-translate-y-1 relative overflow-hidden">
                  
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-kuper-yellow/5 via-transparent to-kuper-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Date */}
                  <div className="bg-kuper-yellow text-kuper-dark px-4 py-2 text-sm font-bold uppercase tracking-wider inline-block mb-6 rounded-md">
                    {item.date}
                  </div>

                  <div className="flex gap-8 relative z-10">
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-kuper-dark mb-4 group-hover:text-kuper-yellow transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-kuper-grey text-base leading-relaxed group-hover:text-kuper-dark/80 transition-colors">
                        {item.description}
                      </p>
                    </div>

                    {/* Image */}
                    <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden border-2 border-kuper-yellow/20 group-hover:border-kuper-yellow/40 transition-colors">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Hover arrow */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <div className="flex items-center text-kuper-yellow font-semibold">
                      <span className="mr-2">Читать далее</span>
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-kuper-yellow to-amber-400 transition-all duration-500 group-hover:w-full"></div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Enhanced Archive Button */}
        <div className="text-center">
          <button className="btn-kuper text-lg px-12 py-4 transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
            АРХИВ СОБЫТИЙ
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-16 -right-16 w-64 h-64 border-4 border-kuper-yellow/10 rotate-45 opacity-30"></div>
        <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-kuper-yellow/5 rounded-full blur-md"></div>
      </div>
    </section>
  )
}

export default NewsSection
