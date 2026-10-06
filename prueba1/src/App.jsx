import { MainLayout } from './layouts/MainLayout';
import { Hero } from './Features/Landing/Hero';
import { Features } from './Features/Landing/Features';
import { useLandingData } from './Features/hooks/useLandingData';
import { Footer } from './Features/Landing/Footer';


export default function App() {
  const { services, handleCTA } = useLandingData();

  return (
    <MainLayout>
      <Hero onStart={handleCTA} />
      <Features items={services} />
    </MainLayout>

  );
}