export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white backdrop-blur-md bg-opacity-95 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <h2 className="text-xl font-bold tracking-tight text-blue-400">🚀 MiMarca</h2>
        <nav>
          <ul className="flex items-center gap-6 text-sm font-medium">
            <li><a href="#inicio" className="hover:text-blue-400 transition-colors">Inicio</a></li>
            <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Servicios</a></li>
            <li><a href="#contacto" className="hover:text-blue-400 transition-colors">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};