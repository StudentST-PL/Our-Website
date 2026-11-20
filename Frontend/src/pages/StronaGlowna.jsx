import  { useState } from 'react'

const projekty = [
  {
    id: '01',
    nazwa: 'Jaw Solar – Fotowoltaika Tarnów, Pompy Ciepła Tarnów',
    domena: 'https://jawsolar.pl/'
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
  return (
    <section className="min-h-screen bg-[#0b0e14] text-white pt-20 pb-16 px-6">
      <div className="max-w-3xl mx-auto text-center mb-14">{/*max-width-768px margin-inline-auto margin-bottom 56px */}
        <h1 className = " text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6"> {/*text-36px(2.25rem) sm:text-48px(3rem) md:text-60px(3.75rem) tracking-tight(letter-spacing: -0.025em leading-tight(line-height:1.25) margin-bottom-24px*/}
          Projektujemy i wdrażamy strony nowej generacji
        </h1>
        <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-8"> {/*color: #9ca3af text-base(font-size: 16px, line-height: 24px) max-width: 576px mx-auto (margin-left: auto; margin-right: auto)*/}
          Dwóch twórców, jeden wspólny cel. Budujemy szybkie, nowoczesne strony internetowe, które pomagają rozwijać Twój biznes.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-7 py-3.5 rounded-lg transition shadow-lg shadow-blue-500/25 cursor-pointer">
          Rozpocznij projekt
        </button>
      </div>

      <div className="max-w-6xl mx-auto bg-[#12161f] border border-gray-800 rounded-2xl shadow-blue-950/20 overflow-hidden">{/*max-width: 72rem = 1152px border-width: 1px; border-style: solid*/}
        <div className="flex items-center justify-between px-4 py-3 bg-[#161b26] border-b border-gray-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
          </div>
        </div>
      </div>

      <div className="bg-[#0b0e14] border border-gray-800 text-gray-300 text-xs sm:text-sm px-6 py-1.5 rounded-md font-mono ">
        {aktywnyProjekt.domena}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 min-h-[450px]">
        <div className="md:col-span-1 bg-[#0f131a] border-b md:border-b-0 md:border-r border-gray-800 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
            Nasze Realizacje
          </p>
        </div>
      </div>
    </section>
  )
}


