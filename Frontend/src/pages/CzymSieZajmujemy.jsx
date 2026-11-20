export default function CzymSieZajmujemy() {
  return (
    <>
      {/* Górne nagłówki */}
      <nav className="bg-[#0e121a] border-y border-gray-800/60 py-7 px-6">
        <div className="relative flex justify-center items-center">
          <div className="flex items-center gap-40 text-gray-400 text-xl font-medium">
            <a href="#" className="hover:text-white transition-colors">JavaScript</a>
            <a href="#" className="hover:text-white transition-colors">React</a>
            <a href="#" className="hover:text-white transition-colors">Vite</a>
            <a href="#" className="hover:text-white transition-colors">HTML</a>
            <a href="#" className="hover:text-white transition-colors">Css</a>
            <a href="#" className="hover:text-white transition-colors">JSON</a>
          </div>
        </div>
      </nav>

      <section className="bg-[#0b0e14] text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Opis Sekcji */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-3">
              Co robimy
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              Proste zasady, dopracowany efekt
            </h2>
            <p className="text-base text-gray-400 leading-relaxed">
              Nie używamy ciężkich, przeładowanych kreatorów. Pisząc kod ręcznie, 
              zapewniamy szybkość i pełną kontrolę nad stroną.
            </p>
          </div>

          {/*karty*/}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/*1*/}
            <div className="bg-[#11151f] border border-gray-800/80 rounded-2xl p-8 text-left hover:border-gray-700 transition-colors">
              <p className="text-xs font-mono text-blue-500 uppercase tracking-wider mb-4">
                01 / DESIGN
              </p>
              <h3 className="text-xl font-bold text-white mb-3">
                Nowoczesny wygląd
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Projektujemy czytelne interfejsy dopasowane do branży klienta, 
                które budują zaufanie od pierwszych sekund.
              </p>
            </div>

            {/*2*/}
            <div className="bg-[#11151f] border border-gray-800/80 rounded-2xl p-8 text-left hover:border-gray-700 transition-colors">
              <p className="text-xs font-mono text-blue-500 uppercase tracking-wider mb-4">
                02 / DEVELOPMENT
              </p>
              <h3 className="text-xl font-bold text-white mb-3">
                Czysty, szybki kod
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Strony pisane od podstaw ładują się błyskawicznie na komputerach 
                i smartfonach, bez zbędnych skryptów.
              </p>
            </div>

            {/*3*/}
            <div className="bg-[#11151f] border border-gray-800/80 rounded-2xl p-8 text-left hover:border-gray-700 transition-colors">
              <p className="text-xs font-mono text-blue-500 uppercase tracking-wider mb-4">
                03 / WDROŻENIE
              </p>
              <h3 className="text-xl font-bold text-white mb-3">
                Kompleksowa opieka
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Pomagamy w wyborze domeny, konfiguracji hostingu, certyfikatu SSL 
                oraz podstawowej optymalizacji SEO.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}