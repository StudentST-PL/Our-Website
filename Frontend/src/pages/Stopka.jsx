export default function Stopka() {
  return (
    <footer className="bg-[#0b0e14] border-t border-gray-800/80 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-400">KGI360Tech</span>. Wszystkie prawa zastrzeżone.
        </p>

        <p>
          Projekt i realizacja:{" "}
          <span className="text-gray-400">KGI360Tech</span>
        </p>

      </div>
    </footer>
  )
}
