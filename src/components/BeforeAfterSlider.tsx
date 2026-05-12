import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronsLeftRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
}

const BeforeAfterSlider = ({ beforeImage, afterImage, className }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <div 
      ref={containerRef}
      className={cn("relative overflow-hidden select-none touch-none bg-brand-cream", className)}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
    >
      {/* After Image (High Quality Art) */}
      <img 
        src={afterImage} 
        alt="After" 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        loading="lazy" 
        decoding="async" 
      />
      
      {/* Before Image (Original Photo) */}
      <div 
        className="absolute top-0 left-0 h-full overflow-hidden z-10"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={beforeImage} 
          alt="Before" 
          className="max-w-none h-full object-cover"
          style={{ width: containerWidth || '100%' }}
          loading="lazy" 
          decoding="async" 
        />
        <div className="absolute top-4 left-4 bg-brand-cream text-brand-navy text-[10px] font-black px-4 py-2 uppercase tracking-[0.2em] border-2 border-brand-navy shadow-[4px_4px_0px_var(--text-primary)]">
          THE PHOTO
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-2 bg-brand-cream cursor-ew-resize z-30 shadow-[4px_0_0_var(--text-primary)] border-x-2 border-brand-navy"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-brand-sunshine flex items-center justify-center border-4 border-brand-navy shadow-[4px_4px_0px_var(--text-primary)] z-40">
          <ChevronsLeftRight size={20} className="text-brand-navy animate-pulse" />
        </div>
      </div>

      <div className="absolute top-4 right-4 bg-brand-sunshine text-brand-navy text-[10px] font-black px-4 py-2 uppercase tracking-[0.2em] shadow-[4px_4px_0px_var(--text-primary)] border-2 border-brand-navy flex items-center gap-2 z-20">
        MAGICAL ART <Sparkles size={12} className="animate-pulse" />
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
