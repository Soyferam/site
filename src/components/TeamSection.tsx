'use client'

import Image from 'next/image'

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Низамов Ильнур Ильдарович',
      position: 'Генеральный Директор',
      office: 'К1',
      phone: '+7 (8553) 31-84-74, доб. 1101',
      email: 'nizamov@kupercompany.com',
      additionalEmail: 'info@kupercompany.com',
      image: 'https://ext.same-assets.com/3869708485/3301674957.jpeg'
    },
    {
      name: 'Мустафин Низа Расихович',
      position: 'Заместитель генерального директора по развитию',
      office: 'К1',
      phone: '+7 (8553) 36-92-76',
      email: 'mustafin@kupercompany.com',
      image: 'https://ext.same-assets.com/3869708485/338178648.jpeg'
    },
    {
      name: 'Бородин Антон Владиславович',
      position: 'Директор по маркетингу и продажам',
      office: 'К1',
      phone: '+7 (8553) 31-84-74, доб. 1103',
      email: 'borodin@kupercompany.com',
      additionalEmail: 'marketing@kupercompany.com',
      mobile: '+7 (906)117-28-18',
      image: 'https://ext.same-assets.com/3869708485/311684708.jpeg',
      hasWhatsApp: true,
      hasTelegram: true
    },
    {
      name: 'Шайниев Ильфак Равилевич',
      position: 'Начальник службы МТО',
      office: 'К1',
      phone: '+7 (8553) 31-84-74, доб. 1107',
      email: 'omto@kupercompany.com',
      mobile: '8 (917) 266-33-11',
      image: 'https://ext.same-assets.com/3869708485/3641997567.jpeg'
    },
    {
      name: 'Жалин Вячеслав Николаевич',
      position: 'Директор по сервису',
      office: 'К2',
      phone: '+7 (8553) 31-84-74, доб. 1119',
      email: 'zhalin@kupercompany.com',
      mobile: '8(917)857-19-25',
      image: 'https://ext.same-assets.com/3869708485/2591665095.jpeg'
    },
    {
      name: 'Кадыров Наиль Сагитович',
      position: 'Руководитель службы автоматизации и энергетики (САиЭ)',
      office: 'К2',
      phone: '+7 (8553) 36-92-76',
      email: 'n.kadyrov@kupercompany.com',
      mobile: '2222',
      image: 'https://ext.same-assets.com/3869708485/2065484947.jpeg'
    }
  ]

  return (
    <section id="team" className="py-20 bg-kuper-dark relative">
      <div className="container-kuper lg:ml-64">
        {/* Section Number */}
        <div className="absolute left-0 top-0 section-number opacity-10 text-white">07</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-kuper-dark-grey p-6 hover:bg-kuper-grey transition-all duration-300 group">

              {/* Employee Photo */}
              <div className="mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Employee Info */}
              <div className="text-white">
                <h4 className="font-bold text-lg mb-2 group-hover:text-kuper-yellow transition-colors">
                  {member.name}
                </h4>
                <p className="text-white/80 text-sm mb-4">
                  {member.position}
                </p>

                {/* Contact Details */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-kuper-yellow" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-kuper-yellow">Офис:</span>
                    <span className="text-white/80">{member.office}</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-kuper-yellow" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <a
                      href={`tel:${member.phone.replace(/[^+\d]/g, '')}`}
                      className="text-kuper-yellow hover:text-white transition-colors"
                    >
                      {member.phone}
                    </a>
                  </div>

                  {member.mobile && (
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-kuper-yellow" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <a
                        href={`tel:${member.mobile.replace(/[^+\d]/g, '')}`}
                        className="text-kuper-yellow hover:text-white transition-colors"
                      >
                        {member.mobile}
                      </a>
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-kuper-yellow" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-kuper-yellow hover:text-white transition-colors break-all"
                    >
                      {member.email}
                    </a>
                  </div>

                  {member.additionalEmail && (
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-kuper-yellow" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <a
                        href={`mailto:${member.additionalEmail}`}
                        className="text-kuper-yellow hover:text-white transition-colors break-all"
                      >
                        {member.additionalEmail}
                      </a>
                    </div>
                  )}
                </div>

                {/* Social Icons */}
                {(member.hasWhatsApp || member.hasTelegram) && (
                  <div className="flex space-x-3 mt-4">
                    {member.hasWhatsApp && (
                      <a
                        href={`https://wa.me/${member.mobile?.replace(/[^+\d]/g, '')}`}
                        className="text-kuper-yellow hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                        </svg>
                      </a>
                    )}
                    {member.hasTelegram && (
                      <a
                        href={`https://t.me/${member.mobile?.replace(/[^+\d]/g, '')}`}
                        className="text-kuper-yellow hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
