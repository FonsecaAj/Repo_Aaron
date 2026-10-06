import { ReactNode } from 'react';
import { Navbar } from '../Features/Landing/Navbar';
import { Footer } from '../Features/Landing/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};