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
    <section id="products" className="py-20 bg-kuper-light-grey relative">
      <div className="container-kuper">
        {/* Section Number */}
        <div className="absolute left-0 top-0 section-number opacity-5">04</div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {products.map((product, index) => (
            <div key={index} className="group">
              <Link href={product.link}>
                <div className="bg-white p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-kuper-yellow">

                  {/* Product Image */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-48 h-48 relative">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={200}
                        height={200}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div>
                    <h3 className="text-lg font-bold text-kuper-dark mb-4 group-hover:text-kuper-yellow transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-kuper-grey text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Hover arrow */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-6 h-6 text-kuper-yellow transform group-hover:translate-x-2 transition-transform"
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
              </Link>
            </div>
          ))}
        </div>

        {/* Catalog Button */}
        <div className="text-center">
          <button className="btn-kuper">
            КАТАЛОГ ПРОДУКЦИИ
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
