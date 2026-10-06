import { Button } from '../../components/UI/Button';

interface HeroProps {
  onStart: () => void;
}

export const Hero = ({ onStart }: HeroProps) => {
  return (
    <section className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Construye aplicaciones escalables con React
        </h1>
        <p className="text-lg text-blue-100 mb-8 leading-relaxed">
          Aplicando Clean Code, modularidad por features y separación clara de conceptos desde el día uno.
        </p>
        <Button variant="secondary" onClick={onStart}>
          Empezar Ahora
        </Button>
      </div>
    </section>
  );
};