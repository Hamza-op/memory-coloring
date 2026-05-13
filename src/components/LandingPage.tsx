import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Check, ArrowRight, BookOpen, Star, Sparkles, Heart, Pencil, Camera, Gift, Shield, Diamond, Smile, PartyPopper, FerrisWheel, Sun, MousePointer2, Brush, ShoppingBag, Palette, Wand2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import ActivityToast from './ActivityToast';

const Hero = () => {
  const base = import.meta.env.BASE_URL;
  const navigate = useNavigate();

  return (
    <section className="relative pt-4 pb-12 lg:pt-6 lg:pb-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Content - Typography & CTA */}
          <div className="lg:col-span-5 relative z-20 text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="badge bg-coral text-charcoal border border-coral-text/20 mb-4 shadow-sm inline-flex">
                <Sparkles size={14} /> 100% Hand-Drawn Magic
              </div>
              <h1 className="text-4xl lg:text-[4.5rem] leading-[1.05] tracking-tight text-[var(--text)] mb-5 font-display font-bold">
                The Gift <br className="hidden lg:block" /> That <span className="text-coral-text italic font-medium">Never Ends</span>.
              </h1>
              <p className="text-base lg:text-lg text-[var(--text-muted)] mb-6 leading-relaxed font-body max-w-lg mx-auto lg:mx-0">
                Send your photos, and we'll craft a personalized coloring adventure that keeps your child smiling for hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
                <button onClick={() => navigate('/checkout')} className="btn-primary flex-grow sm:flex-grow-0 justify-center">
                  <ShoppingBag size={20} /> Order Online
                </button>
                <a href="https://wa.me/923462083310?text=Hi%20memorycoloring!%20I%20would%20like%20to%20know%20more%20about%20your%20custom%20coloring%20books." target="_blank" rel="noreferrer" className="btn-wa flex-grow sm:flex-grow-0 justify-center">
                  <MessageCircle size={20} fill="currentColor" /> WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Editorial Overlapping Grid */}
          <div className="lg:col-span-7 relative h-[500px] lg:h-[650px] w-full mt-12 lg:mt-0">
            {/* Decorative background blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sky/15 rounded-full blur-3xl -z-10" />

            {/* Before Image - Polaroid style */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: -50, rotate: 10 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: -6 }}
              transition={{ duration: 1, type: "spring", bounce: 0.3 }}
              whileHover={{ scale: 1.05, rotate: -2, zIndex: 40 }}
              className="absolute top-[5%] left-[5%] lg:left-[10%] w-[60%] lg:w-[55%] soft-card p-3 pb-12 bg-white shadow-2xl z-20 origin-bottom-right"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[calc(var(--radius)-12px)] bg-gray-100">
                <img src={`${base}demo/hero_new_before.png`} alt="Happy family" fetchPriority="high" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-4 left-0 w-full text-center">
                <span className="font-display font-bold text-sm text-[var(--text-muted)] tracking-widest uppercase">Your Photo</span>
              </div>
            </motion.div>

            {/* Magic Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute top-[45%] left-[50%] lg:left-[55%] z-50 w-14 h-14 lg:w-16 lg:h-16 bg-honey text-charcoal rounded-full flex items-center justify-center shadow-xl border-4 border-[var(--bg)]"
            >
              <Wand2 size={24} className="animate-pulse" />
            </motion.div>

            {/* After Image - Polaroid style */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: 50, rotate: -10 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 8 }}
              transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.3 }}
              whileHover={{ scale: 1.05, rotate: 4, zIndex: 40 }}
              className="absolute bottom-[5%] right-[5%] lg:right-[5%] w-[65%] lg:w-[60%] soft-card p-3 pb-12 bg-white shadow-xl z-30 origin-top-left"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[calc(var(--radius)-12px)] bg-white border border-[var(--border)]">
                <img src={`${base}demo/hero_new_after.png`} alt="Coloring Page" fetchPriority="high" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-4 left-0 w-full text-center">
                <span className="font-display font-bold text-sm text-coral-text tracking-widest uppercase">Our Magic</span>
              </div>
            </motion.div>

            {/* Small floating doodle */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[15%] right-[10%] text-violet-text z-40 hidden lg:block"
            >
              <Sparkles size={48} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MagicPath = ({ color = "text-honey", className = "" }) => (
  <div className={cn("w-full flex justify-center py-2 lg:py-4 opacity-50", className)}>
    <svg className="w-2/3 max-w-xl h-12" viewBox="0 0 600 50" fill="none" preserveAspectRatio="none">
      <path d="M0,25 C150,50 450,0 600,25" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeDasharray="16 20" className={color} />
    </svg>
  </div>
);

const WhyUs = () => {
  const features = [
    { name: "Pure Joy", desc: "Interactive fun for kids", icon: Star, color: "text-honey-text bg-honey/10", border: "border-honey/20 hover:border-honey/40" },
    { name: "Warmth", desc: "Emotional family bonding", icon: Heart, color: "text-coral-text bg-coral/10", border: "border-coral/20 hover:border-coral/40" },
    { name: "Imagination", desc: "Spark their creativity", icon: Pencil, color: "text-sage-text bg-sage/10", border: "border-sage/20 hover:border-sage/40" },
    { name: "Privacy", desc: "100% Safe and private", icon: Shield, color: "text-sky-text bg-sky/10", border: "border-sky/20 hover:border-sky/40" },
    { name: "Artists", desc: "Hand-drawn premium art", icon: Diamond, color: "text-violet-text bg-violet/10", border: "border-violet/20 hover:border-violet/40" }
  ];

  return (
    <section id="how-it-works" className="py-8 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-10 px-4">
          <motion.div initial={{ y: -10, rotate: -5 }} whileInView={{ y: 0, rotate: 0 }} transition={{ type: "spring" }} viewport={{ once: true }} className="badge bg-violet/10 text-violet-text mb-4 border border-violet/20 shadow-sm">
            <Smile size={14} /> The Magic Formula
          </motion.div>
          <h2 className="text-3xl lg:text-4xl text-[var(--text)] text-center font-display font-bold">
            Why Parents <span className="text-violet-text inline-block transform -rotate-2">Trust Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 px-4 lg:px-0">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 3 : -3, y: -10 }}
              transition={{ delay: i * 0.1, type: "spring", bounce: 0.5 }}
              viewport={{ once: true }}
              className={cn("soft-card flex flex-col items-center text-center p-5 lg:p-4 group border-2", f.border, i % 2 !== 0 ? "lg:mt-8" : "lg:mb-8")}
            >
              <div className={cn("w-14 h-14 flex items-center justify-center mb-4 blob group-hover:scale-110 transition-transform duration-300 shadow-sm", f.color)}>
                <f.icon size={24} />
              </div>
              <h3 className="font-display text-base text-[var(--text)] font-bold mb-1">{f.name}</h3>
              <p className="text-[var(--text-muted)] font-body text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PaintingGallery = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <section id="gallery" className="py-10 lg:py-16 px-4 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-honey/10 blob-2 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-[-100px] w-[400px] h-[400px] bg-violet/10 blob blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 relative">
          <div className="badge bg-honey/10 text-honey-text mb-4"><Palette size={14} /> The Creative Process</div>
          <h2 className="text-3xl lg:text-5xl text-[var(--text)] mb-4 font-display font-bold">Kids in <span className="text-honey-text">Action</span></h2>
          <p className="text-lg text-[var(--text-muted)] font-body max-w-2xl mx-auto leading-relaxed">
            Every masterpiece begins with a splash of color and a whole lot of imagination. Watch them bring memories to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative">

          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -3 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            whileHover={{ scale: 1.02, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-7 soft-card overflow-hidden p-3 bg-white shadow-xl relative z-20"
          >
            <div className="aspect-[4/3] rounded-[calc(var(--radius)-10px)] overflow-hidden">
              <img src={`${base}demo/kid_painting_1.png`} alt="Child painting" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </motion.div>

          <div className="md:col-span-5 flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="hidden md:block self-start p-8 glass-card bg-sky/10 border-sky/20 max-w-xs ml-12 -mt-16 relative z-30 transform rotate-3 shadow-lg"
            >
              <p className="text-[var(--text)] font-body text-base leading-relaxed font-bold">
                "A splash of color, a lifetime of memories."
              </p>
              <div className="flex items-center gap-2 mt-4 text-sky-text">
                <Sparkles size={16} /> <span className="section-label">Pure Joy</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, rotate: 4 }}
              whileInView={{ opacity: 1, x: 0, rotate: 3 }}
              whileHover={{ scale: 1.02, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
              viewport={{ once: true }}
              className="soft-card overflow-hidden p-2.5 bg-white shadow-lg w-full md:w-[85%] self-end relative z-10"
            >
              <div className="aspect-[4/5] rounded-[calc(var(--radius)-10px)] overflow-hidden">
                <img src={`${base}demo/kid_painting_2.png`} alt="Child holding a palette" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50, rotate: -4 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-6 md:absolute md:-bottom-16 md:left-12 soft-card overflow-hidden p-3 bg-white shadow-2xl relative z-30 w-full"
          >
            <div className="aspect-[3/2] rounded-[calc(var(--radius)-8px)] overflow-hidden">
              <img src={`${base}demo/kid_painting_3.png`} alt="Child drawing happily" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </motion.div>

        </div>

        <div className="hidden md:block h-24"></div>
      </div>
    </section>
  );
};

const Packages = () => {
  const navigate = useNavigate();
  const packs = [
    { name: "Digital Starter", pages: "8 Pages PDF", price: "799", tag: "PDF Only", items: ["8 Coloring Pages", "HQ Digital PDF", "Private Photos Only", "WhatsApp Support"], color: "bg-sky text-charcoal" },
    { name: "Mini Memory", pages: "12 Pages", price: "1,999", tag: "Printed + PDF", items: ["Personalized Cover", "Preview Before Final", "12-15 Photos Best", "Nationwide Delivery"], color: "bg-violet text-charcoal" },
    { name: "Family Favorite", pages: "24 Pages", price: "3,499", tag: "Printed + PDF", popular: true, items: ["Best for Growing Kids", "Beautiful Softcover", "Custom Cover Design", "Free PDF Included", "Priority Support"], color: "bg-coral text-charcoal" },
    { name: "Premium Gift", pages: "36 Pages", price: "4,999", tag: "Printed + PDF", items: ["30-45 Photos Best", "Hardcover Finish", "Exclusive Gift Box", "All-In-One Package", "Memories That Last"], color: "bg-honey text-charcoal" }
  ];

  return (
    <section id="packages" className="py-10 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} transition={{ type: "spring" }} viewport={{ once: true }}
            className="text-3xl lg:text-5xl text-[var(--text)] mb-4 font-display font-bold"
          >
            Pick Your <span className="text-coral-text inline-block transform rotate-2">Magic Box</span>
          </motion.h2>
          <p className="text-base text-[var(--text-muted)] font-body max-w-xl mx-auto">Choose the perfect memory coloring book adventure for your child.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {packs.map((pack, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, type: "spring", bounce: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={cn("soft-card flex flex-col relative overflow-hidden border-2 transition-all duration-300", pack.popular ? "border-coral/50 shadow-xl ring-4 ring-coral/10 scale-105 z-10" : "border-[var(--border)]")}
            >
              {/* Cute top wave/banner for the card */}
              <div className={cn("h-2.5 w-full absolute top-0 left-0 opacity-80", pack.color.split(' ')[0])}></div>

              <div className="p-8 flex flex-col h-full mt-2">
                {pack.popular && <motion.div animate={{ rotate: [-4, 4, -4] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="absolute top-4 right-4 bg-coral text-charcoal border border-coral-text/20 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">Most Popular!</motion.div>}

                <div className="mb-6 mt-4">
                  <span className={cn("badge mb-4 border border-black/5 shadow-sm font-bold tracking-wide", pack.color)}>{pack.tag}</span>
                  <h3 className="text-2xl text-[var(--text)] font-display font-bold mb-2">{pack.name}</h3>
                  <span className="text-[var(--text-muted)] text-sm font-body font-medium bg-[var(--bg)] px-3 py-1.5 rounded-lg inline-block border border-[var(--border)]">{pack.pages}</span>
                </div>
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold text-[var(--text-muted)]">Rs.</span>
                    <span className="text-4xl font-display font-bold text-[var(--text)]">{pack.price}</span>
                  </div>
                </div>
                <div className="flex-grow space-y-4 mb-10">
                  {pack.items.map((item, j) => (
                    <div key={j} className="flex gap-3 items-start text-sm font-body text-[var(--text-muted)] font-medium">
                      <div className="w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-sage-text" strokeWidth={4} />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2 mt-auto">
                  <button onClick={() => navigate('/checkout')} className={cn("w-full py-3 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2", pack.popular ? "bg-coral text-charcoal hover:bg-coral/90 shadow-lg border border-coral-text/20 hover:scale-[1.02]" : "bg-[var(--bg)] text-[var(--text)] border-2 border-[var(--border)] hover:border-charcoal/20 hover:bg-[var(--surface-hover)] hover:scale-[1.02]")}>
                    <ShoppingBag size={16} /> Order Online
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-sm text-[var(--text-muted)] mt-12 font-body max-w-2xl mx-auto italic">
          * Note: At least 50% advance payment is required via Bank Transfer to confirm your order and begin the magical transformation.
        </p>
      </div>
    </section>
  );
};

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <MagicPath color="text-honey-text" />
      <WhyUs />
      <MagicPath color="text-sky-text" className="rotate-180" />
      <PaintingGallery />
      <MagicPath color="text-violet-text" />
      <Packages />
      <ActivityToast />
    </div>
  );
};

export default LandingPage;
