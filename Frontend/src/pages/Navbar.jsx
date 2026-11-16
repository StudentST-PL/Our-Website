export default function Navbar() {
  return (
    <nav className="bg-black text-grey-500 p-4">
      <div className="flex justify-between items-center">
        
        <span className="text-xl font-bold tracking-tight text-white">
          KGI360Tech<span className="text-blue-500">.</span>
        </span>

        <div className ="absolute left-1/2 -translate-x-1/2 flex items-center gap-8 text-gray-300 text-sm font-medium">
          <a href="#"className="hover:text-white transition-colors">Strona główna</a>
          <a href="#"className="hover:text-white transition-colors">Oferta</a>
          <a href="#"className="hover:text-white transition-colors">Realizacje</a>
          <a href="#"className="hover:text-white transition-colors">Jak działamy</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="#"className="px-4 py-2 text-sm font-medium text-white border border-grey-100 rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-colors">Wycena</a>
          <a href="#"className="px-4 py-2 text-sm font-medium text-black bg-white border rounded-lg hover:bg-gray-200 transition-colors">Kontakt</a>
        </div>
        
      </div>
      
  </nav>
  );
}
