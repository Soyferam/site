'use client'

import Image from 'next/image'
import Link from 'next/link'

const ProductsSection = () => {
  const products = [
    {
      title: 'ГОРИЗОНТАЛЬНАЯ НАСОСНАЯ УСТАНОВКА (ГНУ)',
      description: 'Горизонтальная Насосная Установка предназначена для нефтяной жидкости водопроводной воды без загрязнения нефтяных скважин, углубления поступной воды.',
      image: 'https://ext.same-assets.com/3869708485/3306382390.png',
      link: '/catalog/gnu'
    },
    {
      title: 'БЛОЧНАЯ КУСТОВАЯ НАСОСНАЯ СТАНЦИЯ (БКНС)',
      description: 'БКНС представляет собой изготовленную по индивидуальному заказу здание на жесткой раме блок-бокса, включающую в себя технологические помещения, где располагаются операторы подающего и нагнетательного трубопровода.',
      image: 'https://ext.same-assets.com/3869708485/2032070514.jpeg',
      link: '/catalog/bkns'
    },
    {
      title: 'СТАНЦИЯ УПРАВЛЕНИЯ (СУ)',
      description: 'Изготавливаемые нами станции управления предназначены для управления насосным агрегатом, обработки сигналов контрольно-измерительных приборов, защиты электрооборудования насосного агрегата.',
      image: 'https://ext.same-assets.com/3869708485/2117200923.jpeg',
      link: '/catalog/su'
    },
    {
      title: 'УСТАНОВКА ВИНТОВАЯ НАСОСНАЯ ГОРИЗОНТАЛЬНАЯ (УВНГ)',
      description: 'Установка винтовая насосная горизонтальная (УВНГ) предназначена для нефти-водных жидкостей, пластовых и сточных вод в условиях нефтяных месторождений.',
      image: 'https://ext.same-assets.com/3869708485/4207122586.jpeg',
      link: '/catalog/uvng'
    }
  ]

  return (
    <section id="products" className="py-32 bg-gradient-to-br from-kuper-light-grey via-gray-50 to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30"></div>
      
      <div className="container-kuper lg:ml-64 px-6 relative z-10">
        {/* Section Number */}
        <div className="absolute left-0 top-0 section-number opacity-10 text-kuper-dark text-8xl font-black">04</div>

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-kuper-dark mb-6">Наша Продукция</h2>
          <p className="text-xl text-kuper-dark/80 max-w-3xl mx-auto leading-relaxed">
            Высококачественное насосное оборудование для различных отраслей промышленности
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12 mb-16">
          {products.map((product, index) => (
            <div key={index} className="group">
              <Link href={product.link}>
                <div className="bg-white/80 backdrop-blur-sm p-8 hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:border-kuper-yellow/50 rounded-2xl transform hover:-translate-y-2 relative overflow-hidden">
                  

                  
                  {/* Product Image - Much Larger */}
                  <div className="mb-8 flex justify-center relative">
                    <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100 group-hover:border-kuper-yellow/30 transition-all duration-500">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={400}
                        height={400}
                        className="w-auto h-auto max-w-full max-h-96 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
                      />
                      

                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-kuper-dark mb-4 group-hover:text-kuper-yellow transition-colors leading-tight">
                      {product.title}
                    </h3>
                    <p className="text-kuper-grey text-base leading-relaxed group-hover:text-kuper-dark/80 transition-colors">
                      {product.description}
                    </p>
                  </div>

                  {/* Enhanced Hover arrow */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <div className="flex items-center text-kuper-yellow font-semibold">
                      <span className="mr-2">Подробнее</span>
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

        {/* Enhanced Catalog Button */}
        <div className="text-center">
          <button className="btn-kuper text-lg px-12 py-4 transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
            КАТАЛОГ ПРОДУКЦИИ
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-16 -right-16 w-64 h-64 border-4 border-kuper-yellow/10 rotate-45 opacity-30"></div>
        <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-kuper-yellow/5 rounded-full blur-md"></div>
      </div>
    </section>
  )
}

export default ProductsSection
