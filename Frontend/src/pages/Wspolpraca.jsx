const kroki = [
  {
    numer: 'KROK 01',
    tytul: 'Krótka rozmowa i analiza',
    opis: 'Ustalamy cel strony, grupę docelową oraz zakres podstron i funkcji potrzebnych w Twoim biznesie.'
  },
  {
    numer: 'KROK 02',
    tytul: 'Wycena i harmonogram',
    opis: 'Przygotowujemy konkretną wycenę bez ukrytych kosztów oraz jasny plan prac z terminem realizacji.'
  },
  {
    numer: 'KROK 03',
    tytul: 'Projekt graficzny (UI/UX)',
    opis: 'Tworzymy nowoczesny układ wizualny dopasowany do Twojej marki. Wprowadzamy poprawki aż do pełnej akceptacji.'
  },
  {
    numer: 'KROK 04',
    tytul: 'Kodowanie i responsywność',
    opis: 'Przenosimy zatwierdzony projekt na szybki, czysty kod, dbając o perfekcyjny wygląd na laptopach i smartfonach.'
  },
  {
    numer: 'KROK 05',
    tytul: 'Testy i optymalizacja SEO',
    opis: 'Sprawdzamy szybkość ładowania, formularze oraz podstawową optymalizację pod wyszukiwarkę Google.'
  },
  {
    numer: 'KROK 06',
    tytul: 'Publikacja i wsparcie',
    opis: 'Podpinamy domenę, certyfikat SSL i uruchamiamy stronę w sieci, zapewniając wsparcie techniczne po starcie.'
  }
]
export default function Wspolpraca() {
  return (
    <section id="jak-dzialamy" className="bg-[#0b0e14] text-white py-16 sm:py-24 px-4 sm:px-6 border-t border-gray-800/60">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-16">
          <p className="text-blue-500 text-xs font-semibold uppercase tracking-widest mb-3">
            Współpraca
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            Od pomysłu do wdrożenia - jak współpracujemy
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Przeprowadzimy Cię przez każdy etap krok po kroku: od pierwszej rozmowy i dopasowania projektu, aż po uruchomienie gotowej strony.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kroki.map((krok) => (
            <div
              key={krok.numer}
              className="group relative overflow-hidden bg-[#12161f] hover:bg-[#161b26] border border-gray-800/90 hover:border-blue-500/60 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_35px_rgba(59,130,246,0.18)]"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-wider text-blue-500 group-hover:text-blue-400 transition-colors duration-300 mb-4">
                {krok.numer}
              </span>
              <h3 className="text-white group-hover:text-blue-100 text-lg sm:text-xl font-bold transition-colors duration-300 mb-3">
                {krok.tytul}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                {krok.opis}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
