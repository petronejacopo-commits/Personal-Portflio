import anime from 'animejs';

export const logoLineDrawing = (svgElement: SVGSVGElement): void => {
  if (!svgElement) return;
  const paths = svgElement.querySelectorAll('path, circle, line');

  // Set the paths to be transparent initially
  anime.set(paths, { strokeDashoffset: anime.setDashoffset });

  anime({
    targets: paths,
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 2000,
    easing: 'easeInOutSine',
    delay: anime.stagger(100),
    complete: () => {
      // Optional: fill animation for eyes if specifically targeted
      const eyes = svgElement.querySelectorAll('.eye');
      if (eyes.length > 0) {
        anime({
          targets: eyes,
          fill: ['transparent', '#F5D64E'],
          duration: 1000,
          easing: 'easeOutQuad',
          direction: 'alternate',
          loop: true
        });
      }
    }
  });
};

export const textScramble = (element: HTMLElement, finalText: string, duration: number = 1000): NodeJS.Timeout | undefined => {
  let interval: NodeJS.Timeout | undefined;

  if (!element) return;
  const chars = '!<>-_\\\\/[]{}—=+*^?#________';
  const timePerFrame = 50;
  const frames = Math.floor(duration / timePerFrame);
  let frame = 0;

  interval = setInterval(() => {
    let scrambled = '';
    for (let i = 0; i < finalText.length; i++) {
      if (frame >= frames * (i / finalText.length)) {
        scrambled += finalText[i];
      } else {
        scrambled += chars[Math.floor(Math.random() * chars.length)];
      }
    }
    element.innerText = scrambled;

    if (frame === frames) {
      clearInterval(interval);
      element.innerText = finalText;
    }
    frame++;
  }, timePerFrame);
  return interval;
};

export const particleBurst = (buttonElement: HTMLElement, color: string = '#F5D64E'): void => {
  if (!buttonElement) return;

  const particlesCount = 25;
  const rect = buttonElement.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const particles: HTMLElement[] = [];

  for (let i = 0; i < particlesCount; i++) {
    const p = document.createElement('div');
    const size = anime.random(4, 8);
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.backgroundColor = color;
    p.style.position = 'fixed';
    p.style.left = `${centerX}px`;
    p.style.top = `${centerY}px`;
    p.style.borderRadius = '50%';
    p.style.pointerEvents = 'none';
    p.style.zIndex = '9999';
    document.body.appendChild(p);
    particles.push(p);
  }

  anime({
    targets: particles,
    translateX: () => anime.random(-100, 100),
    translateY: () => anime.random(-100, 100),
    scale: [1, 0],
    opacity: [1, 0],
    duration: 800,
    easing: 'easeOutExpo',
    complete: () => {
      particles.forEach(p => p.remove());
    }
  });
};

export const gridStaggerReveal = (containerSelector: string): void => {
  const elements = document.querySelectorAll(`${containerSelector} .card-item`);
  if (elements.length === 0) return;

  anime({
    targets: elements,
    scale: [0.8, 1],
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 600,
    delay: anime.stagger(80, { grid: [3, 4], from: 'center' }),
    easing: 'easeOutCubic'
  });
};

export const formSuccessMorph = (formElement: HTMLElement): void => {
  if (!formElement) return;
  const pathTarget = formElement.querySelector('#raven-icon path');
  if (!pathTarget) return;

  // Morph from generic icon to checkmark
  anime({
    targets: pathTarget,
    d: 'M5 13l4 4L19 7', // Checkmark path
    duration: 500,
    easing: 'easeInOutQuad',
    complete: () => {
      anime({
        targets: pathTarget,
        stroke: ['#D9A63E', '#38b764'],
        fill: ['transparent', 'transparent'],
        duration: 300,
        easing: 'linear'
      });
    }
  });
};

export const springHoverEffect = (element: HTMLElement): void => {
  if (!element) return;

  element.addEventListener('mouseenter', () => {
    anime.remove(element);
    anime({
      targets: element,
      scale: 1.03,
      duration: 400,
      easing: 'spring(1, 80, 10, 0)'
    });
  });

  element.addEventListener('mouseleave', () => {
    anime.remove(element);
    anime({
      targets: element,
      scale: 1,
      duration: 300,
      easing: 'easeOutCubic'
    });
  });
};

export const typewriterEnhanced = (element: HTMLElement, text: string, speed: number = 50): NodeJS.Timeout | undefined => {
  let interval: NodeJS.Timeout | undefined;

  if (!element) return;
  element.innerText = '';

  let i = 0;
  interval = setInterval(() => {
    if (i < text.length) {
      element.innerText = text.substring(0, i + 1) + '|';
      i++;
    } else {
      clearInterval(interval);
      // Blinking cursor
      anime({
        targets: element,
        opacity: [1, 0.5],
        direction: 'alternate',
        loop: true,
        easing: 'steps(2)',
        duration: 500
      });
    }
  }, speed);
  return interval;
};

export const sectionWaveTransition = (sectionElement: HTMLElement): void => {
  if (!sectionElement) return;
  const items = sectionElement.querySelectorAll('.reveal-item');
  if (items.length === 0) return;

  anime({
    targets: items,
    translateY: [30, 0],
    opacity: [0, 1],
    duration: 500,
    delay: anime.stagger(60, { start: 100 }),
    easing: 'easeOutCubic'
  });
};