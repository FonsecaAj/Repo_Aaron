import { ServiceFeature } from '../models';

export const useLandingData = () => {
  const services: ServiceFeature[] = [
    { id: '1', title: '⚡ Rápido', description: 'Componentes optimizados para alto rendimiento.', icon: 'Zap' },
    { id: '2', title: '🧩 Modular', description: 'Cada parte de la UI vive de manera independiente.', icon: 'Puzzle' },
    { id: '3', title: '🎨 Escalable', description: 'Diseñado bajo patrones de arquitectura limpia.', icon: 'Layers' }
  ];

  const handleCTA = () => {
    console.log('Navegando a la acción principal...');
  };

  return {
    services,
    handleCTA
  };
};