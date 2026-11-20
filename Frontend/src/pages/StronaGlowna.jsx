import { useState } from 'react'

const projekty = [
  {
    id: '01',
    nazwa: 'Jaw Solar – Fotowoltaika Tarnów, Pompy Ciepła Tarnów',
    domena: 'https://jawsolar.pl/',
    zdjecieDesktop: '/jawsolar-desktop.png',
    zdjecieMobile: '/jawsolar-mobile.png'
  },
  {
    id: '02',
    nazwa: 'Projekt_2',
    domena: ''
  },
  {
    id: '03',
    nazwa: 'Projekt3',
    domena: ''
  },
  {
    id: '04',
    nazwa: 'Projekt 4',
    domena: ''
  },
]

export default function StronaGlowna() {
  const [aktywnyProjekt, setAktywnyProjekt] = useState(projekty[0])
  const [widok, setWidok] = useState('laptop')

  return (
    <section className="min-h-screen bg-[#0b0e14] text-white pt-14 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">{/*max-width-768px margin-inline-auto margin-bottom 56px */}
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 sm:mb-6"> {/*text-36px(2.25rem) sm:text-48px(3rem) md:text-60px(3.75rem) tracking-tight(letter-spacing: -0.025em leading-tight(line-height:1.25) margin-bottom-24px*/}
          Projektujemy i wdrażamy strony nowej generacji
        </h1>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-6 sm:mb-8"> {/*color: #9ca3af text-base(font-size: 16px, line-height: 24px) max-width: 576px mx-auto (margin-left: auto; margin-right: auto)*/}
          Dwóch twórców, jeden wspólny cel. Budujemy szybkie, nowoczesne strony internetowe, które pomagają rozwijać Twój biznes.
        </p>
        <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-400 text-white font-semibold px-7 py-3.5 rounded-lg border border-blue-400/50 transition-all duration-300 shadow-[0_0_25px_rgba(59,130,246,0.8),0_0_70px_rgba(37,99,235,0.65)] hover:shadow-[0_0_35px_rgba(59,130,246,1),0_0_95px_rgba(37,99,235,0.85)] cursor-pointer">
          Rozpocznij projekt
        </button>
      </div>

      <div className="max-w-6xl mx-auto bg-[#12161f] border border-gray-800 rounded-2xl shadow-blue-950/20 overflow-hidden">{/*max-width: 72rem = 1152px border-width: 1px; border-style: solid*/}
        <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 px-3 sm:px-4 py-3 bg-[#161b26] border-b border-gray-800">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80"></span>
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80"></span>
          </div>

          <div className="order-3 sm:order-2 w-full sm:w-auto sm:max-w-xs md:max-w-md bg-[#0b0e14] border border-gray-800 text-gray-300 text-xs sm:text-sm px-4 sm:px-6 py-1.5 rounded-md font-mono text-center truncate">
            {aktywnyProjekt.domena || 'Wkrótce online'}
          </div>

          <div className="order-2 sm:order-3 flex items-center gap-1 bg-[#0b0e14] p-1 rounded-lg border border-gray-800">
            <button
              onClick={() => setWidok('laptop')}
              className={`px-2.5 sm:px-3 py-1 rounded-md text-xs font-medium transition cursor-pointer ${
                widok === 'laptop'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Laptop
            </button>
            <button
              onClick={() => setWidok('mobile')}
              className={`px-2.5 sm:px-3 py-1 rounded-md text-xs font-medium transition cursor-pointer ${
                widok === 'mobile'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Mobile
            </button>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-4 min-h-[380px] sm:min-h-[450px]">
          <div className="md:col-span-1 bg-[#0f131a] border-b md:border-b-0 md:border-r border-gray-800 p-3 sm:p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3 md:mb-4">
              Nasze Realizacje
            </p>
            <div className="flex md:block overflow-x-auto md:overflow-visible gap-2 md:space-y-2 pb-1 md:pb-0">
              {projekty.map((projekt) => {
                const czyAktywny = aktywnyProjekt.id === projekt.id
                return (
                  <button
                    key={projekt.id}
                    onClick={() => setAktywnyProjekt(projekt)}
                    className={`shrink-0 md:shrink w-auto md:w-full text-left px-3 py-2 sm:py-2.5 rounded-lg border text-xs sm:text-sm transition cursor-pointer flex items-center justify-between gap-2 ${
                      czyAktywny
                        ? 'bg-blue-500/10 border-blue-500/50 text-white'
                        : 'bg-[#12161f] border-gray-800/80 text-gray-400 hover:border-gray-700 hover:text-gray-200'
                    }`}
                  >
                    <span className="truncate max-w-[200px] md:max-w-none">
                      <span className="font-mono text-gray-500 mr-1.5">{projekt.id}.</span>
                      {projekt.nazwa}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
          <div className="md:col-span-3 bg-[#0b0e14] p-4 sm:p-6 flex items-center justify-center overflow-hidden">
            {!aktywnyProjekt.zdjecieDesktop ? (
              <div className="text-center text-gray-500 py-12">
                <p className="text-sm font-medium text-gray-400 mb-1">
                  Podgląd dla „{aktywnyProjekt.nazwa}” pojawi się wkrótce.
                </p>
              </div>
            ) : widok === 'laptop' ? (
              <div className="w-full h-full rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
                <img
                  src={aktywnyProjekt.zdjecieDesktop}
                  alt={aktywnyProjekt.nazwa}
                  className="w-full h-auto object-cover object-top"
                />
              </div>
            ) : (
              <div className="relative w-[245px] sm:w-[275px] h-[500px] sm:h-[560px] bg-white rounded-[38px] sm:rounded-[44px] border-[6px] sm:border-[8px] border-gray-800 shadow-2xl overflow-hidden flex flex-col">
                <div className="absolute top-2 sm:top-2.5 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-4 sm:h-5 bg-black rounded-full z-10"></div>
                <img
                  src={aktywnyProjekt.zdjecieMobile || aktywnyProjekt.zdjecieDesktop}
                  alt={`${aktywnyProjekt.nazwa} - wersja mobilna`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}