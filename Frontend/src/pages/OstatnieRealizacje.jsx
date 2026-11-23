export default function OstatnieRealizacje() {
  return (
    <section className="bg-[#0b0e14] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Opis sekcji */}

        <p className="text-blue-500 text-xs text-center font-semibold uppercase tracking-widest mb-3">
            PORTFOLIO
        </p>

        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
            Dowiedz się więcej o naszych projektach
          </p>
        </div>

        {/* GŁÓWNA KARTA */}
        <div className="max-w-5xl w-full mx-auto bg-[#11151f] border border-gray-800/80 rounded-2xl p-8 md:p-10 text-left hover:border-gray-700 transition-colors grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* LEWA STRONA */}
          <div className="md:col-span-7">
            <p className="text-2xl font-bold text-white uppercase tracking-wider mb-4">
              JAWSOLAR - Fotowoltaika i OZE
            </p>
            <h3 className="text-base font-bold text-gray-400 mb-3">
              Zaprojektowaliśmy i wdrożyliśmy od zera firmową stronę internetową dla branży odnawialnych źródeł energii. Głównym celem było przejrzyste zaprezentowanie oferty oraz uproszczenie kontaktu z doradcą.
            </h3>

            <div className="flex flex-wrap gap-2 mt-6 mb-8">
              <span className="bg-[#161b26] border border-gray-800 text-gray-400 text-xs font-mono px-3 py-1.5 rounded-md">
                Projekt UI/UX
              </span>
              <span className="bg-[#161b26] border border-gray-800 text-gray-400 text-xs font-mono px-3 py-1.5 rounded-md">
                HTML / CSS / JS
              </span>
              <span className="bg-[#161b26] border border-gray-800 text-gray-400 text-xs font-mono px-3 py-1.5 rounded-md">
                Optymalizacja SEO
              </span>
            </div>

            <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-400 text-white font-semibold px-7 py-3.5 rounded-lg border border-blue-400/50 transition-all duration-300 shadow-[0_0_25px_rgba(59,130,246,0.8),0_0_70px_rgba(37,99,235,0.65)] hover:shadow-[0_0_35px_rgba(59,130,246,1),0_0_95px_rgba(37,99,235,0.85)] cursor-pointer">
              Rozpocznij projekt
            </button>
          </div>

          {/* PRAWA STRONA */}
          <div className="md:col-span-5 flex flex-col gap-4 text-left">
            <div className="bg-[#0b0e14] border border-gray-800/80 rounded-xl p-5">
              <p className="text-lg font-bold text-white mb-1">100% RWD</p>
              <p className="text-xs text-gray-400">Pełne dopasowanie do telefonów i tabletów</p>
            </div>

            <div className="bg-[#0b0e14] border border-gray-800/80 rounded-xl p-5">
              <p className="text-lg font-bold text-white mb-1">&lt; 1.2s</p>
              <p className="text-xs text-gray-400">Błyskawiczny czas ładowania strony głównej</p>
            </div>

            <div className="bg-[#0b0e14] border border-gray-800/80 rounded-xl p-5">
              <p className="text-lg font-bold text-white mb-1">Indywidualny projekt</p>
              <p className="text-xs text-gray-400">Zero gotowych szablonów z internetu</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}