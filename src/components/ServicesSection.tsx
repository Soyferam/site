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
    <section id="services" className="py-20 bg-kuper-yellow relative overflow-hidden">
      <div className="container-kuper">
        {/* Section Number */}
        <div className="absolute left-0 top-0 section-number opacity-10 text-kuper-dark">03</div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <Link href={service.link}>
                <div className="relative overflow-hidden bg-white/10 backdrop-blur-sm border border-kuper-dark/20 hover:bg-white/20 transition-all duration-300 h-64">

                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-kuper-dark/40"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-kuper-yellow transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed hidden group-hover:block transition-all duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-kuper-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-32 h-32 border-2 border-kuper-dark/20 rotate-45 opacity-30"></div>
        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-kuper-dark/10 rounded-full"></div>
      </div>
    </section>
  )
}

export default ServicesSection
