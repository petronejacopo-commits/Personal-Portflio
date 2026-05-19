import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Applica un effetto parallasse verticale a un elemento.
 * @param element HTMLElement da animare
 * @param speed Moltiplicatore di velocità (es. 0.2, 0.5) - determina l'offset 'y'. Valori positivi spostano in su.
 * @param isMobile Se true, riduce/limita la velocità
 */
export const parallaxEffect = (element: HTMLElement, speed: number, isMobile: boolean = false) => {
  const actualSpeed = isMobile ? Math.min(speed, 0.3) : speed;
  // Offset proporzionale all'altezza dello schermo (potrebbe essere tarato differentemente)
  const yOffset = -300 * actualSpeed;

  gsap.to(element, {
    y: yOffset,
    ease: "none",
    scrollTrigger: {
      trigger: element.parentElement || element,
      start: "top bottom", // Inizia appena l'elemento entra nella viewport dal basso
      end: "bottom top",   // Finisce quando l'elemento esce dalla viewport dall'alto
      scrub: true,
    }
  });
};

/**
 * Applica un fade-in con scorrimento da una direzione specifica.
 * @param element HTMLElement da animare
 * @param direction Direzione da cui proviene l'elemento
 * @param delay Ritardo prima dell'animazione
 */
export const scrollReveal = (
  element: HTMLElement,
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  delay: number = 0
) => {
  let x = 0;
  let y = 0;

  switch (direction) {
    case 'up': y = 30; break;
    case 'down': y = -30; break;
    case 'left': x = 30; break;
    case 'right': x = -30; break;
  }

  gsap.fromTo(
    element,
    { opacity: 0, x, y },
    {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.6,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
      }
    }
  );
};

/**
 * Applica un fade-in base
 * @param element HTMLElement da animare
 * @param duration Durata animazione in secondi
 * @param delay Ritardo
 */
export const fadeIn = (element: HTMLElement, duration: number = 0.6, delay: number = 0) => {
  gsap.fromTo(
    element,
    { opacity: 0 },
    {
      opacity: 1,
      duration,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
      }
    }
  );
};