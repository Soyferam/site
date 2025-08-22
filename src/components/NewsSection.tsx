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
    <section id="news" className="py-20 bg-white relative">
      <div className="container-kuper lg:ml-64">
        {/* Section Number */}
        <div className="absolute left-0 top-0 section-number opacity-5">02</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <Link href={item.link}>
                <div className="bg-white border-l-4 border-kuper-yellow p-6 hover:shadow-lg transition-shadow duration-300">

                  {/* Date */}
                  <div className="bg-kuper-yellow text-kuper-dark px-3 py-1 text-xs font-semibold uppercase tracking-wider inline-block mb-4">
                    {item.date}
                  </div>

                  <div className="flex gap-6">
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-kuper-dark mb-3 group-hover:text-kuper-yellow transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-kuper-grey text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Image */}
                    <div className="w-24 h-24 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Archive Button */}
        <div className="text-center">
          <button className="btn-kuper">
            АРХИВ СОБЫТИЙ
          </button>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
