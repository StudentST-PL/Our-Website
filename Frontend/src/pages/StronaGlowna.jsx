export default function StronaGlowna() {
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
    </section>
  )
}
