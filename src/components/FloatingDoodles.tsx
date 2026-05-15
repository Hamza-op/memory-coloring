import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'motion/react';

const SparkleStar = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
    <path d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z" fill="currentColor"/>
  </svg>
);

const Cloud = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 60" className={className}>
    <path d="M 25 50 Q 10 50 10 35 Q 10 20 25 20 Q 30 5 50 5 Q 70 5 75 20 Q 90 20 90 35 Q 90 50 75 50 Z" fill="currentColor"/>
  </svg>
);

const DashedHeart = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
    <path d="M 50 90 Q 10 60 10 30 A 20 20 0 0 1 50 30 A 20 20 0 0 1 90 30 Q 90 60 50 90 Z"
      fill="none" stroke="currentColor" strokeWidth="6" strokeDasharray="8 8" strokeLinecap="round"/>
  </svg>
);

const DashedSwirl = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
    <path d="M 10 90 Q 30 10 60 40 T 90 10" fill="none" stroke="currentColor" strokeWidth="6" strokeDasharray="8 8" strokeLinecap="round"/>
  </svg>
);

const Dots = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" className={className}>
    <circle cx="25" cy="10" r="6" fill="currentColor" />
    <circle cx="10" cy="35" r="6" fill="currentColor" />
    <circle cx="40" cy="35" r="6" fill="currentColor" />
  </svg>
);

const CuteBook = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
    <path d="M 15 25 L 50 35 L 85 25 L 85 85 L 50 95 L 15 85 Z" fill="var(--surface, white)" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 50 35 L 50 95" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    <circle cx="35" cy="60" r="4" fill="currentColor" />
    <circle cx="65" cy="60" r="4" fill="currentColor" />
    <path d="M 45 70 Q 50 75 55 70" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <circle cx="25" cy="65" r="4" fill="var(--color-coral)" />
    <circle cx="75" cy="65" r="4" fill="var(--color-coral)" />
  </svg>
);

const icons = [
  { Icon: SparkleStar, color: "text-honey-text" },
  { Icon: SparkleStar, color: "text-violet-text" },
  { Icon: Cloud, color: "text-sky-text opacity-80" },
  { Icon: DashedHeart, color: "text-coral-text" },
  { Icon: DashedSwirl, color: "text-sage-text opacity-60" },
  { Icon: Dots, color: "text-violet-text opacity-70" },
  { Icon: CuteBook, color: "text-charcoal dark:text-[var(--text-muted)]" },
];

interface DoodleElement {
  id: number;
  x: number;
  y: number;
  iconIndex: number;
  size: number;
  rotate: number;
  parallax: number;
  duration: number;
}

// Desktop-only: full parallax + mouse tracking
const DoodleItemDesktop = ({ el, mouseX, mouseY }: { el: DoodleElement, mouseX: any, mouseY: any }) => {
  const { Icon, color } = icons[el.iconIndex];
  const tx = useTransform(mouseX, [0, 2000], [el.parallax, -el.parallax]);
  const ty = useTransform(mouseY, [0, 2000], [el.parallax, -el.parallax]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ position: 'absolute', left: `${el.x}%`, top: `${el.y}%`, x: tx, y: ty }}
      className={color}
    >
      <motion.div
        animate={{ rotate: [el.rotate, el.rotate + 15, el.rotate - 15, el.rotate], y: [0, 15, -15, 0] }}
        transition={{ duration: el.duration, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon size={el.size} />
      </motion.div>
    </motion.div>
  );
};

// Mobile-only: simple CSS float, no spring physics, no mouse tracking
const DoodleItemMobile = ({ el }: { el: DoodleElement }) => {
  const { Icon, color } = icons[el.iconIndex];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0, -12, 0] }}
      transition={{ duration: el.duration, repeat: Infinity, ease: "easeInOut", delay: el.id * 0.3 }}
      style={{ position: 'absolute', left: `${el.x}%`, top: `${el.y}%`, rotate: el.rotate }}
      className={color}
    >
      <Icon size={el.size} />
    </motion.div>
  );
};

const FloatingDoodles = () => {
  const [elements, setElements] = useState<DoodleElement[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect mobile once
    const mobile = window.matchMedia('(max-width: 768px)').matches;
    setIsMobile(mobile);

    // Fewer doodles on mobile (10 vs 22) for performance
    const count = mobile ? 10 : 22;
    const newElements = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 200, // spread over 200% height (scrollable page)
      iconIndex: Math.floor(Math.random() * icons.length),
      size: mobile ? 18 + Math.random() * 20 : 25 + Math.random() * 35,
      rotate: Math.random() * 360,
      parallax: 10 + Math.random() * 30,
      duration: 5 + Math.random() * 5,
    }));
    setElements(newElements);

    // Only add mouse tracking on desktop
    if (!mobile) {
      const handleMouseMove = (e: MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      };
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-[0.35] dark:opacity-[0.2] -z-10">
      {elements.map((el) =>
        isMobile
          ? <DoodleItemMobile key={el.id} el={el} />
          : <DoodleItemDesktop key={el.id} el={el} mouseX={smoothX} mouseY={smoothY} />
      )}
    </div>
  );
};

export default FloatingDoodles;
