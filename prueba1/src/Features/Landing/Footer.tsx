export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800">
      <p>© {currentYear} MiMarca. Todos los derechos reservados.</p>
    </footer>
  );
};