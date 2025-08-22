'use client'

import Image from 'next/image'

const StatsPartnersSection = () => {
  const partnerLogos = [
    'https://ext.same-assets.com/3869708485/2032706687.svg',
    'https://ext.same-assets.com/3869708485/1905618359.svg',
    'https://ext.same-assets.com/3869708485/3267619246.svg',
    'https://ext.same-assets.com/3869708485/224524296.svg',
    'https://ext.same-assets.com/3869708485/2745298959.svg',
    'https://ext.same-assets.com/3869708485/851902324.svg',
    'https://ext.same-assets.com/3869708485/1381545821.svg',
    'https://ext.same-assets.com/3869708485/2512117063.svg'
  ]

  return (
    <section id="partners" className="py-20 bg-kuper-dark relative overflow-hidden">
      <div className="container-kuper lg:ml-64">
        {/* Section Number */}
        <div className="absolute left-0 top-0 section-number opacity-10 text-white">05</div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Stats Section */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
              <div className="flex items-start space-x-3">
                {/* Kuper Logo */}
                <div className="w-24 h-24 flex items-center justify-center -mt-2">
                  <Image
                    src="/images/logo.png"
                    alt="Kuper Logo"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-kuper-yellow text-3xl font-bold mt-4">+</span>
              </div>

              <div className="text-kuper-yellow">
                <span className="text-6xl lg:text-8xl font-bold">300</span>
                <span className="text-2xl font-light ml-2">РЕАЛИЗОВАННЫХ ПРОЕКТОВ</span>
              </div>
            </div>

            <p className="text-white/80 text-lg max-w-md mx-auto lg:mx-0">
              Более 300 реализованных проектов по всей России и странам СНГ
            </p>
          </div>

          {/* Partners Logos */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-8 text-center">
              НАШИ ПАРТНЕРЫ
            </h3>

            <div className="grid grid-cols-4 gap-6">
              {partnerLogos.map((logo, index) => (
                <div
                  key={index}
                  className="bg-white/10 p-4 hover:bg-white/20 transition-all duration-300 flex items-center justify-center min-h-[80px] group"
                >
                  <Image
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    width={80}
                    height={40}
                    className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center space-x-2 mt-8">
              <div className="w-2 h-2 bg-kuper-yellow rounded-full"></div>
              <div className="w-2 h-2 bg-white/30 rounded-full"></div>
              <div className="w-2 h-2 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 right-10 w-32 h-32 border border-kuper-yellow/20 rotate-12 opacity-30"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-kuper-yellow/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-white/10 rotate-45"></div>
      </div>
    </section>
  )
}

export default StatsPartnersSection
