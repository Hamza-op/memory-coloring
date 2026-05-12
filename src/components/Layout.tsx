import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, MessageCircle, Facebook, Instagram, BookOpen, Pencil, Sparkles, Home, Wand2, ShoppingBag, Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';

const Logo = () => (
  <div className="flex items-center gap-2.5">
    <div className="relative w-10 h-10 bg-gradient-to-br from-coral to-honey rounded-2xl flex items-center justify-center text-white shadow-sm">
      <BookOpen size={20} />
      <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-1.5 -right-1.5 text-violet">
        <Sparkles size={12} />
      </motion.div>
    </div>
    <div className="flex flex-col">
      <span className="font-display text-xl font-bold text-[var(--text)] tracking-tight leading-tight">Memory <span className="text-coral">Coloring</span></span>
      <span className="text-[10px] font-body font-semibold text-[var(--text-muted)] leading-none">Memories into magical art</span>
    </div>
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
    <button onClick={toggle} className="w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text)] hover:bg-[var(--surface-hover)] transition-colors" aria-label="Toggle theme">
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
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
      <div className="bg-charcoal text-warm-white text-center py-2 text-xs font-body font-semibold px-4 border-b border-white/5">
        <div className="flex items-center justify-center gap-6 max-w-7xl mx-auto">
          <span className="flex items-center gap-1.5">⭐ Screen-free activity</span>
          <span className="hidden sm:flex items-center gap-1.5">🔒 Private photos</span>
          <span className="hidden sm:flex items-center gap-1.5">👁️ Preview before final</span>
        </div>
      </div>
      <nav className="bg-[var(--bg)]/80 backdrop-blur-xl border-b border-[var(--border)] sticky top-0 z-50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-[72px]">
            <Link to="/"><Logo /></Link>
            <div className="hidden lg:flex items-center gap-6">
              {links.map(link => (
                link.href.startsWith('#') ? (
                  <button key={link.name} onClick={() => document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' })} className="font-body font-semibold text-[var(--text-muted)] hover:text-coral transition-colors text-sm">{link.name}</button>
                ) : (
                  <Link key={link.name} to={link.href} className="font-body font-semibold text-[var(--text-muted)] hover:text-coral transition-colors text-sm">{link.name}</Link>
                )
              ))}
              <ThemeToggle />
              <a href="https://wa.me/923000000000" target="_blank" rel="noreferrer" className="btn-wa py-2.5 px-5 text-sm">
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
  <footer className="bg-[var(--surface)] border-t border-[var(--border)] pt-16 pb-8 transition-colors">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-1">
          <div className="mb-5"><Logo /></div>
          <p className="text-[var(--text-muted)] text-sm font-body leading-relaxed mb-4">
            We turn your favorite photos into personalized coloring books that create smiles and lasting memories.
          </p>
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 rounded-full bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-coral hover:border-coral/30 transition-colors"><Facebook size={16} /></a>
            <a href="#" className="w-9 h-9 rounded-full bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-coral hover:border-coral/30 transition-colors"><Instagram size={16} /></a>
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold text-[var(--text)] mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm font-body text-[var(--text-muted)]">
            <li><Link to="/" className="hover:text-coral transition-colors">Home</Link></li>
            <li><button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-coral transition-colors">How It Works</button></li>
            <li><button onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-coral transition-colors">Packages</button></li>
            <li><button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-coral transition-colors">Gallery</button></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-[var(--text)] mb-4">Policies</h4>
          <ul className="space-y-2.5 text-sm font-body text-[var(--text-muted)]">
            <li><a href="#" className="hover:text-coral transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-coral transition-colors">Refund Policy</a></li>
            <li><a href="#" className="hover:text-coral transition-colors">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-[var(--text)] mb-4">Get in Touch</h4>
          <ul className="space-y-2.5 text-sm font-body text-[var(--text-muted)]">
            <li>Lahore, Pakistan</li>
            <li>hello@memorycoloring.com</li>
            <li>WhatsApp: +92 3XX XXXXXXX</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--border)] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[var(--text-muted)] font-body">
        <p>© {new Date().getFullYear()} Memory Coloring. All rights reserved.</p>
        <p className="flex items-center gap-1">Made with <Heart className="text-coral fill-coral" size={12} /> for beautiful memories</p>
      </div>
    </div>
  </footer>
);

const MobileBottomNav = () => {
  const location = useLocation();
  const items = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/create', icon: Wand2, label: 'Preview' },
    { to: '/checkout', icon: ShoppingBag, label: 'Order' },
  ];
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[var(--surface)]/90 backdrop-blur-xl border-t border-[var(--border)] z-[100] flex justify-around items-center h-[68px] px-2 pb-safe">
      {items.map(item => (
        <Link key={item.to} to={item.to} className={`flex flex-col items-center justify-center p-2 min-w-[60px] min-h-[44px] transition-colors rounded-xl ${location.pathname === item.to ? 'text-coral' : 'text-[var(--text-muted)] hover:text-coral'}`}>
          <item.icon size={22} />
          <span className="text-[10px] mt-1 font-body font-bold">{item.label}</span>
        </Link>
      ))}
      <a href="https://wa.me/923000000000" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-2 min-w-[60px] min-h-[44px] text-wa-green hover:text-sage transition-colors">
        <MessageCircle size={22} />
        <span className="text-[10px] mt-1 font-body font-bold">Chat</span>
      </a>
    </div>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen flex flex-col pb-[68px] lg:pb-0 bg-[var(--bg)] transition-colors">
    <header className="sticky top-0 z-50 flex flex-col"><Navbar /></header>
    <main className="flex-grow">{children}</main>
    <Footer />
    <MobileBottomNav />
  </div>
);

export default Layout;
