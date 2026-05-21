import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Facebook, Instagram, Home, ShoppingBag, Moon, Sun } from 'lucide-react';
import logo from '../../assets/logo-memory-coloring.webp';
import WhatsAppLink from './WhatsAppLink';

const FloatingDoodles = React.lazy(() => import('./FloatingDoodles'));

const Logo = () => (
  <div className="flex items-center">
    <img
      src={logo}
      alt="Memory Coloring"
      className="h-12 w-auto sm:h-14 object-contain"
    />
  </div>
);

const ThemeToggle = () => {
  const getPreferredTheme = () => {
    const saved = window.localStorage.getItem('memory-coloring-theme');
    if (saved === 'dark') return true;
    if (saved === 'light') return false;
    // Default to light (white) theme
    return false;
    // return document.documentElement.classList.contains('dark') || window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const applyTheme = (nextIsDark: boolean) => {
    document.documentElement.classList.toggle('dark', nextIsDark);
    window.localStorage.setItem('memory-coloring-theme', nextIsDark ? 'dark' : 'light');
    setIsDark(nextIsDark);
  };

  const [isDark, setIsDark] = useState(() => getPreferredTheme());

  useEffect(() => {
    applyTheme(getPreferredTheme());

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const toggle = () => {
    applyTheme(!document.documentElement.classList.contains('dark'));
  };

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="group relative h-8 w-14 shrink-0 overflow-hidden rounded-full border border-[var(--border)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet/35"
      style={{
        background: isDark
          ? 'linear-gradient(135deg, #17171B 0%, #2B2C33 100%)'
          : 'linear-gradient(135deg, #F7FBFF 0%, #B9E6FF 100%)',
        boxShadow: isDark
          ? '0 4px 12px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.08)'
          : '0 4px 12px rgba(120,142,205,0.16), inset 0 1px 0 rgba(255,255,255,0.7)',
      }}
    >
      <span className="absolute left-2 top-2.5 h-1 w-1 rounded-full bg-white/70 opacity-0 transition-opacity dark:opacity-100" />
      <span className="absolute right-2.5 top-2 h-1.5 w-1.5 rounded-full bg-coral/70 opacity-100 transition-opacity dark:opacity-0" />
      <span className="absolute bottom-2 right-4 h-1 w-1 rounded-full bg-white/60 opacity-0 transition-opacity dark:opacity-100" />
      <div
        className={`absolute top-0.5 flex h-7 w-7 items-center justify-center rounded-full shadow-md ring-1 ring-white/70 transition-all duration-300 ${isDark ? 'right-0.5 bg-honey text-charcoal' : 'left-0.5 bg-white text-honey-text'
          }`}
      >
        {isDark
          ? <Moon size={14} fill="currentColor" />
          : <Sun size={14} fill="currentColor" />
        }
      </div>
    </button>
  );
};

const Navbar = () => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Parent Trust', href: '#parent-trust' },
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
              <WhatsAppLink source="desktop_nav" iconSize={16} className="btn-wa py-2.5 px-5 text-sm">WhatsApp Us</WhatsAppLink>
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
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
        <div className="md:col-span-1">
          <div className="mb-5"><Logo /></div>
          <p className="text-[var(--text-muted)] text-sm font-body leading-relaxed mb-4">
            Turn your favorite memories into creative moments.
          </p>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/share/1EanqnTYcw/" target="_blank" rel="noreferrer" aria-label="MemoryColoring on Facebook" className="w-9 h-9 rounded-full bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-coral hover:border-coral/30 transition-colors"><Facebook size={16} /></a>
            <a href="https://www.instagram.com/memorycoloring?igsh=MXRlc29qd2ZlZ2tpYQ==" target="_blank" rel="noreferrer" aria-label="MemoryColoring on Instagram" className="w-9 h-9 rounded-full bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-coral hover:border-coral/30 transition-colors"><Instagram size={16} /></a>
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold text-[var(--text)] mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm font-body text-[var(--text-muted)]">
            <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-coral transition-colors">Home</Link></li>
            <li><button onClick={() => document.getElementById('parent-trust')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-coral transition-colors">Parent Trust</button></li>
            <li><button onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-coral transition-colors">Packages</button></li>
            <li><button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-coral transition-colors">Gallery</button></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-[var(--text)] mb-4">Coloring Book Guides</h4>
          <ul className="space-y-2.5 text-sm font-body text-[var(--text-muted)]">
            <li><Link to="/custom-coloring-book-from-photos" className="hover:text-coral transition-colors">Custom Book from Photos</Link></li>
            <li><Link to="/personalized-coloring-book-for-kids" className="hover:text-coral transition-colors">Personalized Book for Kids</Link></li>
            <li><Link to="/photo-to-coloring-page" className="hover:text-coral transition-colors">Photo to Coloring Page</Link></li>
            <li><Link to="/custom-coloring-book-pakistan" className="hover:text-coral transition-colors">Custom Book Pakistan</Link></li>
            <li><Link to="/birthday-coloring-book-gift" className="hover:text-coral transition-colors">Birthday Coloring Gift</Link></li>
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
        <p className="flex items-center gap-1">Made with <Heart className="text-coral fill-coral" size={12} /> for creative moments</p>
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
      <WhatsAppLink source="mobile_bottom_nav" iconSize={22} className="flex flex-col items-center justify-center p-2 min-w-[60px] min-h-[44px] text-wa-green hover:text-sage transition-colors">
        <span className="text-[10px] mt-1 font-body font-bold">Chat</span>
      </WhatsAppLink>
    </div>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen flex flex-col pb-[68px] lg:pb-0 bg-[var(--bg)] transition-colors relative z-0">
    <React.Suspense fallback={null}>
      <FloatingDoodles />
    </React.Suspense>
    <header className="sticky top-0 z-50 flex flex-col"><Navbar /></header>
    <main className="flex-grow">{children}</main>
    <Footer />
    <MobileBottomNav />
  </div>
);

export default Layout;
