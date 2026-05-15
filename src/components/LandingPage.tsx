import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Check, Star, Sparkles, Heart, Pencil, Shield, Diamond, Smile, ShoppingBag, Palette, Wand2, Camera, Gift, Truck } from 'lucide-react';
import { cn } from '@/lib/utils';
import ActivityToast from './ActivityToast';
import WhatsAppIcon from './WhatsAppIcon';
import familyPhoto from '../../assets/memory-coloring-20260513-223056.webp';
import familySketch from '../../assets/memory-coloring-20260513-223135.webp';
import grandparentsPhoto from '../../assets/memory-coloring-20260513-223140.webp';
import grandparentsSketch from '../../assets/memory-coloring-20260513-223143.webp';
import petPhoto from '../../assets/memory-coloring-20260513-223145.webp';
import petSketch from '../../assets/memory-coloring-20260513-223148.webp';
import processPromo from '../../assets/memory-coloring-20260513-223545.webp';
import birthdayPoster from '../../assets/memory-coloring-20260513-224058.webp';
import adventurePoster from '../../assets/memory-coloring-20260513-224258.webp';
import milestonePoster from '../../assets/memory-coloring-20260513-224638.webp';
import schoolPoster from '../../assets/memory-coloring-20260513-225412.webp';

const RainbowWord = ({ children }: { children: string }) => (
  <span className="rainbow-word" aria-label={children}>
    {children.split('').map((letter, index) => (
      <span key={`${letter}-${index}`} aria-hidden="true">{letter}</span>
    ))}
  </span>
);

const Hero = () => {
  const navigate = useNavigate();
  const proof = [
    { value: '12-36', label: 'custom pages', accent: 'border-sky/40 dark:border-sky/60' },
    { value: 'PDF + Print', label: 'delivery options', accent: 'border-coral/40 dark:border-coral/60' },
    { value: 'Preview', label: 'before final', accent: 'border-honey/50 dark:border-honey/70' },
  ];

  return (
    <section className="relative pt-5 pb-8 sm:pb-12 lg:pt-6 lg:pb-16 px-4 overflow-hidden hero-stage">
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-coral/35 blur-3xl" />
        <div className="absolute right-[-120px] top-24 h-80 w-80 rounded-full bg-violet/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-sage/25 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* Left Content - Typography & CTA */}
          <div className="lg:col-span-5 relative z-20 text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="badge bg-honey text-charcoal border border-charcoal/10 mb-4 shadow-sm inline-flex">
                <Sparkles size={14} /> Personalized coloring books from your photos
              </div>
              <h1 className="logo-like-title text-[2.75rem] sm:text-5xl lg:text-[4.5rem] text-[var(--text)] mb-5">
                Turn family photos into a <span className="hero-wordmark"><RainbowWord>coloring</RainbowWord> adventure</span>.
              </h1>
              <p className="text-base lg:text-lg text-[var(--text-muted)] mb-6 leading-relaxed font-body max-w-lg mx-auto lg:mx-0">
                Send your favorite moments. We redraw them as kid-friendly coloring pages, then deliver a custom book your child can actually use, keep, and proudly ruin with crayons.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto">
                <button onClick={() => navigate('/checkout')} className="btn-primary w-full sm:w-auto justify-center">
                  <ShoppingBag size={20} /> Order Online
                </button>
                <a href="https://wa.me/923462083310?text=Hi%20memorycoloring!%20I%20would%20like%20to%20know%20more%20about%20your%20custom%20coloring%20books." target="_blank" rel="noreferrer" className="btn-wa w-full sm:w-auto justify-center">
                  <WhatsAppIcon size={20} className="text-white" /> WhatsApp
                </a>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3 max-w-lg mx-auto lg:mx-0">
                {proof.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + i * 0.08, duration: 0.45 }}
                    className={cn("rounded-2xl border-2 bg-[var(--surface)] px-1.5 py-3 min-h-[74px] flex flex-col items-center justify-center text-center shadow-sm backdrop-blur sm:px-3", item.accent)}
                  >
                    <div className="font-display text-[11px] min-[380px]:text-xs sm:text-base font-black text-[var(--text)] leading-tight whitespace-nowrap">{item.value}</div>
                    <div className="mt-1 font-body text-[9px] min-[380px]:text-[10px] sm:text-xs font-bold uppercase leading-tight text-[var(--text-muted)]">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Content - Editorial Overlapping Grid */}
          <div className="lg:col-span-7 relative h-[460px] sm:h-[540px] md:h-[600px] lg:h-[650px] w-full mt-10 sm:mt-8 lg:mt-0">
            {/* Decorative background blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-coral/20 rounded-full blur-3xl -z-10" />

            {/* Before Image - Polaroid style */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: -50, rotate: 10 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: -6 }}
              transition={{ duration: 1, type: "spring", bounce: 0.3 }}
              whileHover={{ scale: 1.05, rotate: -2, zIndex: 40 }}
              className="absolute top-[2%] left-[2%] sm:top-[3%] sm:left-[5%] md:top-[3%] md:left-[8%] lg:left-[10%] w-[58%] sm:w-[58%] md:w-[56%] lg:w-[55%] soft-card p-2.5 sm:p-3 pb-10 sm:pb-12 shadow-2xl z-20 origin-bottom-right"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[calc(var(--radius)-12px)] bg-[var(--bg)]">
                <img src={familyPhoto} alt="Family photo before coloring conversion" fetchPriority="high" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-4 left-0 w-full text-center">
                <span className="font-display font-bold text-xs sm:text-sm text-[var(--text-muted)] tracking-widest uppercase">Your Photo</span>
              </div>
            </motion.div>

            {/* Magic Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute top-[44%] left-[44%] sm:top-[43%] sm:left-[47%] md:top-[44%] md:left-[50%] lg:left-[55%] z-50 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-honey text-charcoal rounded-full flex items-center justify-center shadow-xl border-4 border-[var(--bg)]"
            >
              <Wand2 size={24} className="animate-pulse" />
            </motion.div>

            {/* After Image - Polaroid style */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: 50, rotate: -10 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 8 }}
              transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.3 }}
              whileHover={{ scale: 1.05, rotate: 4, zIndex: 40 }}
              className="absolute bottom-[2%] right-[2%] sm:bottom-[4%] sm:right-[5%] md:right-[6%] lg:right-[5%] w-[60%] sm:w-[60%] md:w-[58%] lg:w-[60%] soft-card p-2.5 sm:p-3 pb-10 sm:pb-12 shadow-xl z-30 origin-top-left"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[calc(var(--radius)-12px)] bg-[var(--surface)] border border-[var(--border)]">
                <img src={familySketch} alt="Family photo transformed into a coloring page" fetchPriority="high" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-4 left-0 w-full text-center">
                <span className="font-display font-bold text-xs sm:text-sm text-coral-text tracking-widest uppercase">Our Magic</span>
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
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -8 }}
              animate={{ opacity: 1, y: 0, rotate: -5 }}
              transition={{ delay: 0.7, type: 'spring', bounce: 0.35 }}
              className="absolute left-[2%] bottom-[18%] md:bottom-[20%] z-40 hidden sm:flex items-center gap-2 rounded-2xl bg-honey px-3 py-2 md:px-4 md:py-3 text-charcoal shadow-xl border-2 border-white"
            >
              <Gift size={18} />
              <span className="font-display text-xs md:text-sm font-black">Gift-ready book</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20, rotate: 8 }}
              animate={{ opacity: 1, y: 0, rotate: 5 }}
              transition={{ delay: 0.8, type: 'spring', bounce: 0.35 }}
              className="absolute right-[1%] top-[4%] md:top-[6%] z-40 hidden sm:flex items-center gap-2 rounded-2xl bg-sage px-3 py-2 md:px-4 md:py-3 text-charcoal shadow-xl border-2 border-white"
            >
              <Camera size={18} />
              <span className="font-display text-xs md:text-sm font-black">Real photo in</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductMomentum = () => {
  const steps = [
    { icon: Camera, title: 'Send photos', copy: 'Pick birthdays, pets, school days, or everyday chaos.' },
    { icon: Wand2, title: 'We redraw them', copy: 'Faces stay familiar. Lines stay clean enough for kids.' },
    { icon: Truck, title: 'You get the book', copy: 'Printed + PDF packages with preview before final.' },
  ];

  return (
    <section className="px-4 py-8 sm:py-10">
      <div className="brand-ribbon max-w-7xl mx-auto overflow-hidden rounded-[2rem] border border-coral/30 shadow-xl">
        <div className="grid lg:grid-cols-[1.05fr_1fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="badge bg-warm-white text-charcoal mb-5 border border-coral/30"><Sparkles size={14} /> Not a template</div>
            <h2 className="logo-like-title text-3xl sm:text-4xl lg:text-5xl">
              A <RainbowWord>coloring</RainbowWord> book that starts with their real life.
            </h2>
            <p className="mt-4 max-w-xl font-body text-sm sm:text-base leading-relaxed text-charcoal/65">
              The hook is simple: kids recognize the people, pets, and moments on the page. That makes the book feel personal before they even pick a color.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-3xl bg-white/40 dark:bg-white/8 p-4 ring-1 ring-coral/20 backdrop-blur"
                >
                  <step.icon className="mb-3 text-coral-text" size={22} />
                  <h3 className="font-display text-lg font-black">{step.title}</h3>
                  <p className="mt-1 font-body text-xs leading-relaxed text-charcoal/65">{step.copy}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[280px] overflow-hidden bg-[var(--bg)] p-4 sm:p-6">
            <motion.img
              src={processPromo}
              alt="Memory Coloring three-step process"
              className="h-full min-h-[260px] w-full rounded-[1.5rem] object-contain"
              initial={{ scale: 0.96, rotate: 2 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, type: 'spring', bounce: 0.25 }}
              viewport={{ once: true }}
            />
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
          <h2 className="logo-like-title text-3xl lg:text-4xl text-[var(--text)] text-center">
            Why Parents <span className="text-violet-text inline-block transform -rotate-2">Trust Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-4 px-0 sm:px-4 lg:px-0">
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
  const transformations = [
    { title: 'The Laugh Page', before: familyPhoto, after: familySketch, note: 'Family giggles become a page they can color again and again.', tag: 'From sofa chaos to crayon-ready' },
    { title: 'Nani & Nana Edition', before: grandparentsPhoto, after: grandparentsSketch, note: 'A warm moment turns into a keepsake kids can actually play with.', tag: 'Tiny hands, big feelings' },
    { title: 'Pet Sidekick Mode', before: petPhoto, after: petSketch, note: 'The family pet gets promoted to coloring-book main character.', tag: 'Fur, paws, instant hero' },
  ];
  const campaigns = [
    { title: 'Birthday Memory', image: birthdayPoster },
    { title: 'Magical Adventure', image: adventurePoster },
    { title: 'Milestone Celebration', image: milestonePoster },
    { title: 'First Day of School', image: schoolPoster },
  ];

  return (
    <section id="gallery" className="py-10 lg:py-16 px-4 relative overflow-hidden">
      <div className="absolute top-1/4 right-[-180px] sm:right-0 w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] bg-honey/10 blob-2 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-[-180px] sm:left-[-100px] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-violet/10 blob blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 relative">
          <div className="badge bg-honey/10 text-honey-text mb-4"><Palette size={14} /> Real Examples</div>
          <h2 className="logo-like-title text-3xl sm:text-4xl lg:text-5xl text-[var(--text)] mb-4">From Photo to <RainbowWord>Coloring</RainbowWord> Page</h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)] font-body max-w-2xl mx-auto leading-relaxed">
            These are the actual visual directions from your asset set: photo, sketch, then a finished book-style promotion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {transformations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1 : 1 }}
              whileHover={{ y: -8, rotate: 0 }}
              transition={{ duration: 0.7, delay: i * 0.08, type: "spring", bounce: 0.35 }}
              viewport={{ once: true }}
              className="soft-card overflow-hidden p-2.5 sm:p-3 lg:p-4"
            >
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div className="aspect-[5/4] overflow-hidden rounded-[calc(var(--radius)-14px)] bg-[var(--bg)]">
                  <img src={item.before} alt={`${item.title} original photo`} loading={i === 0 ? 'eager' : 'lazy'} decoding="async" className="h-full w-full object-cover" />
                </div>
                <div className="aspect-[5/4] overflow-hidden rounded-[calc(var(--radius)-14px)] bg-[var(--surface)] border border-[var(--border)]">
                  <img src={item.after} alt={`${item.title} coloring page`} loading={i === 0 ? 'eager' : 'lazy'} decoding="async" className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <div className="mb-2 inline-flex rotate-[-1deg] rounded-full bg-honey px-3 py-1 font-display text-[11px] font-black uppercase tracking-wide text-charcoal shadow-sm">
                  {item.tag}
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-black text-[var(--text)]">{item.title}</h3>
                <p className="mt-1 font-body text-sm text-[var(--text-muted)] leading-relaxed">{item.note}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {campaigns.map((item, i) => (
            <motion.figure
              key={item.title}
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="soft-card overflow-hidden p-2"
            >
              <img src={item.image} alt={item.title} loading="lazy" decoding="async" className="w-full rounded-[calc(var(--radius)-12px)] object-contain bg-[var(--surface)]" />
              <figcaption className="px-4 py-3 font-display font-bold text-[var(--text)]">{item.title}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

const Packages = () => {
  const navigate = useNavigate();
  const packs = [
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
            Pick Your <span className="inline-block transform rotate-2"><RainbowWord>Magic</RainbowWord> Box</span>
          </motion.h2>
          <p className="text-base text-[var(--text-muted)] font-body max-w-xl mx-auto">Choose the perfect memory coloring book adventure for your child.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-5 lg:gap-6 max-w-5xl mx-auto">
          {packs.map((pack, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, type: "spring", bounce: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={cn("soft-card flex flex-col relative overflow-hidden border-2 transition-all duration-300", pack.popular ? "border-coral/50 shadow-xl ring-4 ring-coral/10 lg:scale-105 z-10" : "border-[var(--border)]")}
            >
              {/* Cute top wave/banner for the card */}
              <div className={cn("h-2.5 w-full absolute top-0 left-0 opacity-80", pack.color.split(' ')[0])}></div>

              <div className="p-6 sm:p-8 flex flex-col h-full mt-2">
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
    <div className="min-h-screen playful-page">
      <Hero />
      <ProductMomentum />
      <WhyUs />
      <MagicPath color="text-coral-text" className="rotate-180" />
      <PaintingGallery />
      <MagicPath color="text-violet-text" />
      <Packages />
      <ActivityToast />
    </div>
  );
};

export default LandingPage;
