export default function Kontakt() {
  return (
    <section className="bg-[#0b0e14] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* GŁÓWNA KARTA */}
        <div className="max-w-5xl w-full mx-auto bg-[#11151f] border border-gray-800/80 rounded-2xl p-8 md:p-12 text-left hover:border-gray-700 transition-colors grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* LEWA STRONA */}
          <div className="md:col-span-6">
            <p className="text-xs font-mono font-semibold text-blue-500 uppercase tracking-widest mb-4">
              Kontakt
            </p>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5 max-w-sm">
              Porozmawiajmy o Twojej stronie
            </h2>
            
            <p className="text-normal font-bold text-gray-400 leading-relaxed mb-8 max-w-sm">
              Napisz do nas kilka zdań o tym, czym zajmuje się Twoja firma. 
              Wrócimy z konkretną propozycją i wyceną w ciągu 24 godzin.
            </p>

            {/* MAIL DO KOPIOWANIA */}
            <div className="inline-flex items-center gap-4 bg-[#0b0e14] border border-gray-800 rounded-lg px-4 py-3">
              <span className="text-sm font-mono text-white">
                kontakt@kgi360tech.pl
              </span>
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText("kontakt@kgi360tech.pl")}
                className="text-xs font-mono text-blue-500 hover:text-blue-400 transition-colors cursor-pointer"
              >
                Kopiuj
              </button>
            </div>
          </div>

          {/* PRAWA STRONA - FORMULARZ  */}
          <form className="md:col-span-6 flex flex-col gap-5 text-left">
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-2">
                Imię lub nazwa firmy
              </label>
              <input 
                type="text"
                className="w-full bg-[#0b0e14] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 mb-2">
                Twój adres e-mail
              </label>
              <input 
                type="email"
                className="w-full bg-[#0b0e14] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 mb-2">
                Krótki opis projektu
              </label>
              <textarea
                rows="4"
                placeholder="Potrzebuję strony wizytówki dla mojej działalności..."
                className="w-full bg-[#0b0e14] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-400 text-white font-semibold px-7 py-3.5 rounded-lg border border-blue-400/50 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.8),0_0_20px_rgba(37,99,235,0.65)] hover:shadow-[0_0_20px_rgba(59,130,246,1),0_0_95px_rgba(37,99,235,0.85)] cursor-pointer"
            >
              Wyślij wiadomość
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}