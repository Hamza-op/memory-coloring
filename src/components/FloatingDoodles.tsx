import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'motion/react';
import { Pencil, Sparkles, Heart, Star, Palette, Brush, Wand2 } from 'lucide-react';

const icons = [
  { Icon: Pencil, color: "text-brand-sunshine" },
  { Icon: Sparkles, color: "text-brand-lavender" },
  { Icon: Heart, color: "text-brand-peach" },
  { Icon: Star, color: "text-brand-mint" },
  { Icon: Palette, color: "text-brand-sky" },
  { Icon: Brush, color: "text-brand-navy" },
  { Icon: Wand2, color: "text-brand-sunshine" },
];

interface DoodleElement {
  id: number;
  x: number;
  y: number;
  iconIndex: number;
  size: number;
  rotate: number;
  parallax: number;
}

const DoodleItem = ({ el, mouseX, mouseY }: { el: DoodleElement, mouseX: any, mouseY: any }) => {
  const { Icon, color } = icons[el.iconIndex];
  
  // Parallax effect
  const tx = useTransform(mouseX, [0, 2000], [el.parallax, -el.parallax]);
  const ty = useTransform(mouseY, [0, 2000], [el.parallax, -el.parallax]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        position: 'absolute',
        left: `${el.x}%`,
        top: `${el.y}%`,
        x: tx,
        y: ty,
      }}
      className={color}
    >
      <motion.div
        animate={{ 
          rotate: [el.rotate, el.rotate + 10, el.rotate - 10, el.rotate],
          y: [0, 10, -10, 0]
        }}
        transition={{ duration: 5 + Math.random() * 5, repeat: Infinity }}
      >
        <Icon size={el.size} />
      </motion.div>
    </motion.div>
  );
};

const FloatingDoodles = () => {
  const [elements, setElements] = useState<DoodleElement[]>([]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const newElements = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      iconIndex: Math.floor(Math.random() * icons.length),
      size: 20 + Math.random() * 30,
      rotate: Math.random() * 360,
      parallax: 20 + Math.random() * 40,
    }));
    setElements(newElements);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.07]">
      {elements.map((el) => (
        <DoodleItem key={el.id} el={el} mouseX={smoothX} mouseY={smoothY} />
      ))}
    </div>
  );
};

export default FloatingDoodles;
