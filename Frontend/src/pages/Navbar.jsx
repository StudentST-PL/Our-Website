export default function Navbar() {
  return (
  <nav className="bg-[#0b0e14]/40  border-b border-gray-800/80 text-gray-500 py-5.5 px-8 backdrop-blur-sm top-0 z-50 fixed inset-x-0">
      <div className="flex justify-between items-center">
        
        <span className="text-xl font-bold tracking-tight text-white">
          KGI360Tech<span className="text-blue-500">.</span>
        </span>

        <div className ="flex items-center gap-30 text-gray-300 text-sm font-medium">
          <a href="#"className="hover:text-white transition-colors">Strona główna</a>
          <a href="#"className="hover:text-white transition-colors">Oferta</a>
          <a href="#"className="hover:text-white transition-colors">Realizacje</a>
          <a href="#"className="hover:text-white transition-colors">Współpraca</a>
          <a href="#"className="hover:text-white transition-colors">Kontakt</a>
          <a href="#"className="hover:text-white transition-colors">Cennik</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="#"className="px-4 py-2 text-sm font-medium text-white border border-grey-100 rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-colors">Wycena</a>
          <a href="#"className="px-4 py-2 text-sm font-medium text-black bg-white border rounded-lg hover:bg-gray-200 transition-colors">Kontakt</a>
        </div>
        
      </div>
      
  </nav>
  );
}
