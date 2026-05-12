import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Check, ArrowRight, BookOpen, Star, Sparkles, Heart, Pencil, Camera, Gift, Shield, Diamond, Smile, PartyPopper, FerrisWheel, Sun, MousePointer2, Brush, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import BeforeAfterSlider from './BeforeAfterSlider';
import ActivityToast from './ActivityToast';
import FloatingDoodles from './FloatingDoodles';

const Hero = () => {
  const base = import.meta.env.BASE_URL;
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);

  return (
    <section className="relative py-20 lg:py-32 px-4 overflow-hidden">
      <FloatingDoodles />
      
      <motion.div style={{ y: y1, rotate }} className="absolute top-20 right-[10%] text-coral opacity-10 hidden lg:block blob">
        <Heart size={180} fill="currentColor" />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute bottom-20 left-[5%] text-honey opacity-10 hidden lg:block blob-2">
        <Star size={140} fill="currentColor" />
      </motion.div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 text-center lg:text-left">
          <div className="badge bg-coral/10 text-coral mb-6">
            <Sparkles size={14} /> 100% Hand-Drawn Magic
          </div>
          <h1 className="text-5xl lg:text-7xl leading-tight text-[var(--text)] mb-6 font-display font-bold">
            The Gift That <br />
            <span className="text-coral">Never Ends</span> ✨
          </h1>
          <p className="text-lg lg:text-xl text-[var(--text-muted)] mb-10 leading-relaxed font-body max-w-xl mx-auto lg:mx-0">
            Send your photos, and we'll craft a personalized coloring adventure that keeps your child smiling for hours.
          </p>
          
          <div className="flex flex-col gap-4 justify-center lg:justify-start items-center w-full">
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button onClick={() => navigate('/checkout')} className="btn-primary">
                <ShoppingBag size={20} /> Order Online
              </button>
              <a href="https://wa.me/923000000000" target="_blank" rel="noreferrer" className="btn-wa">
                <MessageCircle size={20} fill="currentColor" /> WhatsApp
              </a>
            </div>
            <button onClick={() => navigate('/create')} className="group flex flex-col items-center sm:items-start mt-2">
              <span className="font-body font-bold text-sm text-[var(--text-muted)] hover:text-coral transition-colors flex items-center gap-1">
                Try Free Art Preview <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
          <div className="relative z-10 p-4">
             <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
                <motion.div whileHover={{ y: -5, rotate: -2 }} className="soft-card p-4 -rotate-3 transition-all duration-500 w-full max-w-[260px] bg-[var(--surface)]">
                  <div className="aspect-[3/4] overflow-hidden rounded-xl mb-3">
                    <img src={`${base}demo/mom_kid_before.png`} alt="Original Photo" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" loading="lazy" />
                  </div>
                  <div className="text-center"><span className="section-label">Your Photo</span></div>
                </motion.div>
                
                <motion.div whileHover={{ y: -5, rotate: 2 }} className="soft-card p-4 rotate-3 transition-all duration-500 w-full max-w-[260px] bg-[var(--surface)] sm:-ml-8 sm:mt-12 z-10">
                  <div className="aspect-[3/4] overflow-hidden rounded-xl mb-3 border border-[var(--border)]">
                    <img src={`${base}demo/mom_kid_after.png`} alt="Coloring Page" className="w-full h-full object-cover scale-110" loading="lazy" />
                  </div>
                  <div className="text-center"><span className="section-label text-honey">Our Magic</span></div>
                </motion.div>
             </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-violet/10 -z-10 blob animate-float-slow" />
        </motion.div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const features = [
    { name: "Pure Joy", desc: "Interactive fun for kids", icon: Star, color: "text-honey bg-honey/10" },
    { name: "Warmth", desc: "Emotional family bonding", icon: Heart, color: "text-coral bg-coral/10" },
    { name: "Imagination", desc: "Spark their creativity", icon: Pencil, color: "text-sage bg-sage/10" },
    { name: "Privacy", desc: "100% Safe and private", icon: Shield, color: "text-sky bg-sky/10" },
    { name: "Artists", desc: "Hand-drawn premium art", icon: Diamond, color: "text-violet bg-violet/10" }
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 px-4">
          <div className="badge bg-violet/10 text-violet mb-4"><Smile size={14} /> The Magic Formula</div>
          <h2 className="text-3xl lg:text-5xl text-[var(--text)] text-center font-display font-bold">
            Why Parents Trust <span className="text-violet">Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="soft-card flex flex-col items-center text-center p-8 group">
              <div className={cn("w-16 h-16 flex items-center justify-center mb-6 blob group-hover:scale-110 transition-transform duration-300", f.color)}>
                <f.icon size={28} />
              </div>
              <h3 className="font-display text-lg text-[var(--text)] font-bold mb-2">{f.name}</h3>
              <p className="text-[var(--text-muted)] font-body text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Comparison = () => {
  const base = import.meta.env.BASE_URL;
  const items = [
    { label: "Moms & Kids", photo: `${base}demo/mom_kid_before.png`, art: `${base}demo/mom_kid_after.png` },
    { label: "Adventures", photo: `${base}demo/adventure_before.png`, art: `${base}demo/adventure_after.png` },
    { label: "Pet Memories", photo: `${base}demo/pet_before.png`, art: `${base}demo/pet_after.png` }
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="gallery" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky/5 blob-2 blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl lg:text-5xl text-[var(--text)] mb-4 font-display font-bold">See the Magic!</h2>
          <p className="text-lg text-[var(--text-muted)] font-body">Slide to transform your memories.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-2/3 soft-card overflow-hidden p-2">
            <BeforeAfterSlider beforeImage={items[activeIndex].photo} afterImage={items[activeIndex].art} className="aspect-[4/3] lg:aspect-[16/9] rounded-[calc(var(--radius)-8px)]" />
          </div>
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {items.map((item, i) => (
              <button key={i} onClick={() => setActiveIndex(i)} className={cn("p-5 text-left transition-all duration-300 rounded-2xl border", activeIndex === i ? "bg-[var(--surface)] border-coral shadow-md scale-[1.02]" : "bg-[var(--surface)] border-transparent hover:border-[var(--border)]")}>
                <h3 className="font-display text-lg text-[var(--text)] font-bold mb-1">{item.label}</h3>
                <p className="section-label opacity-70">{activeIndex === i ? "Now Showing" : "Click to View"}</p>
              </button>
            ))}
            <div className="mt-4 p-6 glass-card bg-honey/5 border-honey/20">
               <p className="text-[var(--text-muted)] font-body text-sm leading-relaxed">
                 "Our artists hand-trace every detail while keeping the expressions that make your child unique."
               </p>
               <div className="flex items-center gap-2 mt-4 text-honey">
                 <Brush size={16} /> <span className="section-label">Artist Studio</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Packages = () => {
  const navigate = useNavigate();
  const packs = [
    { name: "Digital Starter", pages: "8 Pages PDF", price: "799", tag: "PDF Only", items: ["8 Coloring Pages", "HQ Digital PDF", "Private Photos Only", "WhatsApp Support"], color: "bg-sky text-white" },
    { name: "Mini Memory", pages: "12 Pages", price: "1,999", tag: "Printed + PDF", items: ["Personalized Cover", "Preview Before Final", "12-15 Photos Best", "Nationwide Delivery"], color: "bg-violet text-white" },
    { name: "Family Favorite", pages: "24 Pages", price: "3,499", tag: "Printed + PDF", popular: true, items: ["Best for Growing Kids", "Beautiful Softcover", "Custom Cover Design", "Free PDF Included", "Priority Support"], color: "bg-coral text-white" },
    { name: "Premium Gift", pages: "36 Pages", price: "4,999", tag: "Printed + PDF", items: ["30-45 Photos Best", "Hardcover Finish", "Exclusive Gift Box", "All-In-One Package", "Memories That Last"], color: "bg-honey text-white" }
  ];

  return (
    <section id="packages" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl text-[var(--text)] mb-4 font-display font-bold">Our Packages</h2>
          <p className="text-lg text-[var(--text-muted)] font-body">Choose your memory coloring book.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packs.map((pack, i) => (
            <div key={i} className={cn("soft-card flex flex-col relative p-6", pack.popular && "scale-105 border-coral/50 shadow-lg ring-1 ring-coral/20")}>
              {pack.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-coral text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">Most Popular</div>}
              <div className="mb-6">
                <span className={cn("badge mb-4", pack.color)}>{pack.tag}</span>
                <h3 className="text-2xl text-[var(--text)] font-display font-bold mb-1">{pack.name}</h3>
                <span className="text-[var(--text-muted)] text-sm font-body">{pack.pages}</span>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-[var(--text-muted)]">Rs.</span>
                  <span className="text-3xl font-display font-bold text-[var(--text)]">{pack.price}</span>
                </div>
              </div>
              <div className="flex-grow space-y-3 mb-8">
                {pack.items.map((item, j) => (
                  <div key={j} className="flex gap-3 items-start text-sm font-body text-[var(--text-muted)]">
                    <Check size={16} className="text-sage mt-0.5 shrink-0" /> <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 mt-auto">
                <button onClick={() => navigate('/checkout')} className={cn("w-full py-3 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2", pack.popular ? "bg-coral text-white hover:bg-coral/90 shadow-md" : "bg-[var(--bg)] text-[var(--text)] border border-[var(--border)] hover:bg-[var(--surface-hover)]")}>
                  <ShoppingBag size={16} /> Order Online
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LandingPage = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="min-h-screen">
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
      <Hero />
      <WhyUs />
      <Comparison />
      <Packages />
      <ActivityToast />
    </div>
  );
};

export default LandingPage;
