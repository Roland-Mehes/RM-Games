import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const useFireworks = (trigger) => {
  useEffect(() => {
    if (trigger) {
      const duration = 0.2 * 1000; //
      const end = Date.now() + duration;

      const fire = () => {
        confetti({
          particleCount: 100,
          spread: 50,
          origin: { x: Math.random(), y: Math.random() * 1 },
          shapes: ['circle', 'square', 'star'],
          drift: -1,
        });

        if (Date.now() < end) {
          requestAnimationFrame(fire);
        }
      };
      fire();
    }
  }, [trigger]);
};

export default useFireworks;
