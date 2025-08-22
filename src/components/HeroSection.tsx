'use client'

import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container-kuper h-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[calc(100vh-80px)] items-center">



          {/* Main Content */}
          <div className="lg:col-span-8 flex flex-col justify-center space-y-8 z-10 lg:ml-40">
            <div>
              <div className="bg-kuper-yellow/90 backdrop-blur-sm px-3 py-3 rounded-lg shadow-lg border border-kuper-yellow mb-6 inline-block">
                <h1 style={{color: 'white', fontSize: '2rem', lineHeight: '1.2', margin: '0', padding: '0', fontFamily: 'Gilroy, sans-serif', fontWeight: '900'}}>
                  МЫ ПРОИЗВОДИМ
                  <br />
                  НА СОБСТВЕННЫХ МОЩНОСТЯХ
                </h1>
              </div>

              {/* Yellow plates under the title */}
              <div className="flex justify-between mb-8 max-w-lg">
                <div className="bg-kuper-yellow/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md border border-kuper-yellow">
                  <span className="text-white font-semibold text-sm">ПРОИЗВОДСТВО</span>
                </div>
                <div className="bg-kuper-yellow/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md border border-kuper-yellow">
                  <span className="text-white font-semibold text-sm">МОЩНОСТИ</span>
                </div>
                <div className="bg-kuper-yellow/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md border border-kuper-yellow">
                  <span className="text-white font-semibold text-sm">ИННОВАЦИИ</span>
                </div>
              </div>

              <button className="btn-kuper inline-flex items-center space-x-2 group">
                <span>КАТАЛОГ ПРОДУКЦИИ</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right side content */}
          <div className="lg:col-span-4 relative flex justify-center items-center">
            <div className="relative w-full max-w-md">
              {/* Main Equipment Image */}
              <div className="relative w-full h-96 bg-gradient-to-br from-gray-100/20 to-gray-200/20 rounded-lg overflow-hidden backdrop-blur-sm">
                <Image
                  src="https://ext.same-assets.com/3869708485/822817378.jpeg"
                  alt="Промышленное насосное оборудование"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                  onError={(e) => {
                    // Fallback to a working image if the original fails
                    e.currentTarget.src = "https://ext.same-assets.com/3869708485/3306382390.png";
                  }}
                />

                {/* Overlay with equipment details */}
                <div className="absolute inset-0 bg-gradient-to-t from-kuper-dark/50 to-transparent"></div>

                {/* Industrial elements overlay */}
                <div className="absolute inset-0">
                  {/* Green pump elements */}
                  <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-green-500 rounded opacity-80"></div>
                  <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-green-400 rounded opacity-70"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-green-600 rounded opacity-60"></div>

                  {/* Blue pipe elements */}
                  <div className="absolute top-1/3 right-1/4 w-4 h-12 bg-blue-500 opacity-75"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-12 h-4 bg-blue-600 opacity-70"></div>

                  {/* Industrial connectors */}
                  <div className="absolute top-2/3 left-1/4 w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="absolute top-1/4 right-1/2 w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
              </div>

              {/* AI Badge */}
              <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-kuper-yellow bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-kuper-dark font-bold text-sm"></span>
              </div>

              {/* Decorative industrial elements */}
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-kuper-yellow rounded-full opacity-80 shadow-lg"></div>
              <div className="absolute top-1/3 -left-4 w-8 h-8 bg-kuper-dark rounded-full opacity-60"></div>
              <div className="absolute bottom-1/4 -right-6 w-6 h-6 bg-kuper-yellow rounded-full opacity-70"></div>

              {/* Additional technical elements */}
              <div className="absolute top-1/2 -right-2 w-4 h-8 bg-gray-400 opacity-50"></div>
              <div className="absolute bottom-1/2 -left-2 w-6 h-6 border-2 border-kuper-yellow bg-transparent rounded opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large numbers in background */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 section-number opacity-5">
          01
        </div>

        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-kuper-yellow opacity-20 rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-kuper-yellow opacity-10 rounded-full"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 border-2 border-kuper-dark opacity-15"></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-kuper-dark rounded-full flex justify-center">
          <div className="w-1 h-3 bg-kuper-dark rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
