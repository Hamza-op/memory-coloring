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
      className={cn("relative overflow-hidden select-none touch-none bg-[var(--bg)] rounded-3xl", className)}
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
        className="absolute top-0 left-0 h-full overflow-hidden z-10 border-r-2 border-honey"
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
        <div className="absolute top-3 left-3 bg-[var(--surface)] text-[var(--text)] text-[9px] sm:text-[10px] font-black px-3 py-1.5 uppercase tracking-[0.2em] rounded-full shadow-sm border border-[var(--border)]">
          THE PHOTO
        </div>
      </div>

      {/* Slider Handle Button */}
      <div 
        className="absolute top-0 bottom-0 cursor-ew-resize z-30"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-honey text-charcoal flex items-center justify-center rounded-full border-2 border-white shadow-lg z-40 transition-transform duration-200 hover:scale-110 active:scale-95">
          <ChevronsLeftRight size={18} className="animate-pulse" />
        </div>
      </div>

      <div className="absolute top-3 right-3 bg-honey text-charcoal text-[9px] sm:text-[10px] font-black px-3 py-1.5 uppercase tracking-[0.2em] rounded-full shadow-sm flex items-center gap-1 z-20">
        MAGICAL ART <Sparkles size={11} className="animate-pulse" />
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
