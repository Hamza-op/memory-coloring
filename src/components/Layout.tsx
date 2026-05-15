import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, MessageCircle, Facebook, Instagram, Home, ShoppingBag, Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import logo from '../../assets/logo-memory-coloring.webp';

const Logo = () => (
  <div className="flex items-center">
    <motion.img
      src={logo}
      alt="Memory Coloring"
      className="h-12 w-auto sm:h-14 object-contain"
      animate={{ y: [0, -1, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    />
  </div>
);

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => { setIsDark(document.documentElement.classList.contains('dark')); }, []);
  const toggle = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative w-16 h-8 rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-violet/40 shrink-0"
      style={{
        background: isDark
          ? 'linear-gradient(135deg, #011F55 0%, #9672CC 100%)'
          : 'linear-gradient(135deg, #55BCF1 0%, #FFC12F 100%)',
        boxShadow: isDark
          ? '0 2px 12px rgba(150,114,204,0.35), inset 0 1px 0 rgba(255,255,255,0.08)'
          : '0 2px 12px rgba(255,193,47,0.4), inset 0 1px 0 rgba(255,255,255,0.4)',
      }}
    >
      {/* Stars (dark mode) */}
      {isDark && (
        <>
          <span className="absolute top-1 left-1.5 text-[7px] text-violet opacity-80">✦</span>
          <span className="absolute bottom-1 left-3 text-[5px] text-white opacity-60">✦</span>
        </>
      )}
      {/* Sun rays (light mode) */}
      {!isDark && (
        <span className="absolute top-1 right-1.5 text-[7px] text-honey opacity-80">✦</span>
      )}
      {/* Sliding pill */}
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={`absolute top-1 w-6 h-6 rounded-full flex items-center justify-center shadow-md ${isDark ? 'right-1 bg-violet' : 'left-1 bg-white'
          }`}
      >
        {isDark
          ? <Moon size={13} className="text-charcoal" fill="currentColor" />
          : <Sun size={13} className="text-honey-text" fill="currentColor" />
        }
      </motion.div>
    </button>
  );
};

const Navbar = () => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Packages', href: '#packages' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
  ];

  return (
    <>

      <nav className="bg-[var(--bg)]/80 backdrop-blur-xl border-b border-[var(--border)] sticky top-0 z-50 transition-colors">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-[72px]">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="min-w-0"><Logo /></Link>
            <div className="hidden lg:flex items-center gap-6">
              {links.map(link => (
                link.href.startsWith('#') ? (
                  <button key={link.name} onClick={() => document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' })} className="font-body font-semibold text-[var(--text-muted)] hover:text-coral transition-colors text-sm">{link.name}</button>
                ) : (
                  <Link key={link.name} to={link.href} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-body font-semibold text-[var(--text-muted)] hover:text-coral transition-colors text-sm">{link.name}</Link>
                )
              ))}
              <ThemeToggle />
              <a href="https://wa.me/923462083310?text=Hi%20memorycoloring!%20I%20would%20like%20to%20know%20more%20about%20your%20custom%20coloring%20books." target="_blank" rel="noreferrer" className="btn-wa py-2.5 px-5 text-sm">
                <MessageCircle size={16} fill="currentColor" /> WhatsApp Us
              </a>
            </div>
            <div className="lg:hidden flex items-center gap-3">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const Footer = () => (
  <footer id="about" className="bg-[var(--surface)] border-t border-[var(--border)] pt-10 pb-6 transition-colors">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-1">
          <div className="mb-5"><Logo /></div>
          <p className="text-[var(--text-muted)] text-sm font-body leading-relaxed mb-4">
            We turn your favorite photos into personalized coloring books that create smiles and lasting memories.
          </p>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/share/1EanqnTYcw/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-coral hover:border-coral/30 transition-colors"><Facebook size={16} /></a>
            <a href="https://www.instagram.com/memorycoloring?igsh=MXRlc29qd2ZlZ2tpYQ==" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-coral hover:border-coral/30 transition-colors"><Instagram size={16} /></a>
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold text-[var(--text)] mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm font-body text-[var(--text-muted)]">
            <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-coral transition-colors">Home</Link></li>
            <li><button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-coral transition-colors">How It Works</button></li>
            <li><button onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-coral transition-colors">Packages</button></li>
            <li><button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-coral transition-colors">Gallery</button></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-[var(--text)] mb-4">Policies</h4>
          <ul className="space-y-2.5 text-sm font-body text-[var(--text-muted)]">
            <li><Link to="/policies#privacy" className="hover:text-coral transition-colors">Privacy Policy</Link></li>
            <li><Link to="/policies#refund" className="hover:text-coral transition-colors">Refund Policy</Link></li>
            <li><Link to="/policies#terms" className="hover:text-coral transition-colors">Terms of Service</Link></li>
            <li><Link to="/policies#delivery" className="hover:text-coral transition-colors">Delivery Info</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-[var(--text)] mb-4">Get in Touch</h4>
          <ul className="space-y-2.5 text-sm font-body text-[var(--text-muted)]">
            <li>Multan, Pakistan</li>
            <li>Shopmemorycoloring@gmail.com</li>
            <li>WhatsApp: +923462083310</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--border)] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[var(--text-muted)] font-body">
        <p>© {new Date().getFullYear()} MemoryColoring. All rights reserved.</p>
        <p className="flex items-center gap-1">Made with <Heart className="text-coral fill-coral" size={12} /> for beautiful memories</p>
      </div>
    </div>
  </footer>
);

const MobileBottomNav = () => {
  const location = useLocation();
  const items = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/checkout', icon: ShoppingBag, label: 'Order' },
  ];
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[var(--surface)]/90 backdrop-blur-xl border-t border-[var(--border)] z-[100] flex justify-around items-center min-h-[68px] px-2 pb-safe">
      {items.map(item => (
        <Link key={item.to} to={item.to} className={`flex flex-col items-center justify-center p-2 min-w-[60px] min-h-[44px] transition-colors rounded-xl ${location.pathname === item.to ? 'text-coral' : 'text-[var(--text-muted)] hover:text-coral'}`}>
          <item.icon size={22} />
          <span className="text-[10px] mt-1 font-body font-bold">{item.label}</span>
        </Link>
      ))}
      <a href="https://wa.me/923462083310?text=Hi%20memorycoloring!%20I%20would%20like%20to%20know%20more%20about%20your%20custom%20coloring%20books." target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-2 min-w-[60px] min-h-[44px] text-wa-green hover:text-sage transition-colors">
        <MessageCircle size={22} />
        <span className="text-[10px] mt-1 font-body font-bold">Chat</span>
      </a>
    </div>
  );
};

import FloatingDoodles from './FloatingDoodles';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen flex flex-col pb-[68px] lg:pb-0 bg-[var(--bg)] transition-colors relative z-0">
    <FloatingDoodles />
    <header className="sticky top-0 z-50 flex flex-col"><Navbar /></header>
    <main className="flex-grow">{children}</main>
    <Footer />
    <MobileBottomNav />
  </div>
);

export default Layout;
