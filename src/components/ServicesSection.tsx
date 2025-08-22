'use client'

import Image from 'next/image'
import Link from 'next/link'

const ServicesSection = () => {
  const services = [
    {
      title: 'ПРОКАТ ОБОРУДОВАНИЯ',
      image: 'https://ext.same-assets.com/3869708485/3844692661.jpeg',
      description: 'Компания "Купер" предоставляет в аренду (прокат) насосное оборудование для временного использования.',
      link: '/prokat-oborudovaniya'
    },
    {
      title: 'СЕРВИС НПО',
      image: 'https://ext.same-assets.com/3869708485/2786724984.jpeg',
      description: 'Полный спектр сервисных услуг для промышленного насосного оборудования.',
      link: '/lizing-oborudovaniya'
    },
    {
      title: 'РЕМОНТ ОБОРУДОВАНИЯ',
      image: 'https://ext.same-assets.com/3869708485/3069421081.jpeg',
      description: 'Профессиональный ремонт и восстановление насосного оборудования любой сложности.',
      link: '/remont-oborudovaniya'
    }
  ]

  return (
    <section id="services" className="py-32 bg-gradient-to-br from-kuper-yellow via-yellow-400 to-amber-300 relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30"></div>
      
      <div className="container-kuper lg:ml-64 px-6 relative z-10">
        {/* Section Number */}
        <div className="absolute left-0 top-0 section-number opacity-20 text-kuper-dark text-8xl font-black">03</div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-kuper-dark mb-6">Наши Услуги</h2>
          <p className="text-xl text-kuper-dark/80 max-w-3xl mx-auto leading-relaxed">
            Профессиональные решения для вашего бизнеса с использованием современного оборудования и передовых технологий
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {services.map((service, index) => (
            <div key={index} className="group">
              <Link href={service.link}>
                <div className="relative overflow-hidden bg-white/20 backdrop-blur-md border-2 border-kuper-dark/20 hover:bg-white/30 transition-all duration-500 h-[32rem] rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2">
                  
                  {/* Enhanced Background Image Container */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={700}
                      className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"
                    />
                    
                    {/* Enhanced gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-kuper-dark/5 to-kuper-dark/40"></div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                    <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-kuper-yellow transition-colors leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-white/95 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Enhanced Hover overlay - very subtle */}
                  <div className="absolute inset-0 bg-gradient-to-t from-kuper-dark/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Enhanced decorative corner element */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px] border-t-kuper-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-kuper-dark to-kuper-dark/80 transition-all duration-500 group-hover:w-full"></div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Enhanced decorative elements */}
        <div className="absolute -top-20 -right-20 w-60 h-60 border-4 border-kuper-dark/15 rotate-45 opacity-40"></div>
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-kuper-dark/10 rounded-full blur-sm"></div>
        <div className="absolute top-1/2 -right-16 w-32 h-32 bg-kuper-dark/5 rounded-full blur-md"></div>
        <div className="absolute bottom-1/3 -left-12 w-24 h-24 border-2 border-kuper-dark/20 rounded-full opacity-30"></div>
      </div>
    </section>
  )
}

export default ServicesSection
