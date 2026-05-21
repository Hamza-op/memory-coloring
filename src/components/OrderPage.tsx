import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, CheckCircle, Package, Sparkles, BookOpen, Paintbrush, Gift, User, Phone, Mail, MapPin, ShieldCheck, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { trackWhatsAppOrderSubmit } from '@/lib/metaPixel';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import WhatsAppIcon from './WhatsAppIcon';

const OrderPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set(['family']));
  const [formData, setFormData] = useState({
    image: location.state?.image || null,
    fullName: '',
    phone: '',
    email: '',
    address: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const packages = [
    { id: 'mini', name: 'Mini Memory', priceNum: 1999, price: '1,999', pages: '12 pages', detail: 'Small keepsake starter', Icon: BookOpen, iconClass: 'bg-violet/18 text-violet-text', accent: 'border-violet/35 bg-violet/8', selected: 'border-violet bg-violet/16 shadow-md', badge: null },
    { id: 'family', name: 'Family Favorite', priceNum: 3499, price: '3,499', pages: '24 pages', detail: 'Best for birthdays and siblings', Icon: Paintbrush, iconClass: 'bg-coral/18 text-coral-text', accent: 'border-coral/35 bg-coral/8', selected: 'border-coral bg-coral/16 shadow-md', badge: 'Most Popular' },
    { id: 'premium', name: 'Premium Gift', priceNum: 4999, price: '4,999', pages: '36 pages', detail: 'Bigger gift-ready memory book', Icon: Gift, iconClass: 'bg-honey/25 text-honey-text', accent: 'border-honey/40 bg-honey/10', selected: 'border-honey bg-honey/18 shadow-md', badge: null },
  ];

  const togglePackage = (id: string) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const selectedPackages = packages.filter(p => selectedIds.has(p.id));
  const total = selectedPackages.reduce((sum, p) => sum + p.priceNum, 0);
  const totalFormatted = total.toLocaleString();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedIds.size === 0) return;
    setIsSubmitting(true);
    trackWhatsAppOrderSubmit(total, selectedPackages);
    const pkgLines = selectedPackages.map(p => `  - ${p.name} - Rs. ${p.price}`).join('\n');
    const message =
      `*New Order - memorycoloring*\n\n` +
      `*Package(s):*\n${pkgLines}\n` +
      `*Total:* Rs. ${totalFormatted}\n` +
      `\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Address:* ${formData.address}\n\n` +
      `_Please review my order and share the next steps for photo submission and payment._`;
    window.open(buildWhatsAppUrl(message), '_blank');
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute left-[-100px] top-20 h-72 w-72 rounded-full bg-coral/18 blur-3xl" />
        <div className="absolute bottom-12 right-[-100px] h-72 w-72 rounded-full bg-honey/24 blur-3xl" />
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: 'spring', bounce: 0.4 }}
          className="soft-card max-w-md w-full text-center p-8 sm:p-10 border-2 border-sage/30 relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', bounce: 0.6 }}
            className="w-24 h-24 bg-sage/10 text-sage-text rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle size={48} strokeWidth={1.5} />
          </motion.div>
          <h2 className="text-3xl text-[var(--text)] font-display font-bold mb-3">Order details opened</h2>
          <p className="text-[var(--text-muted)] font-body mb-8 leading-relaxed">
            WhatsApp now has your package and delivery details. Send the message there, then share the photos you want inside the coloring book.
          </p>
          <button onClick={() => navigate('/')} className="btn-primary w-full justify-center">Return to Home</button>
        </motion.div>
      </div>
    );
  }

  const inputClass = "w-full bg-[var(--surface)] border-2 border-[var(--border)] rounded-2xl px-4 py-3.5 font-body text-[var(--text)] placeholder:text-[var(--text-muted)]/45 focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all";
  const labelClass = "flex items-center gap-2 text-sm font-bold text-[var(--text)] mb-2 font-body";

  return (
    <div className="min-h-screen bg-[var(--bg)] pt-4 pb-28 sm:py-10 px-3 sm:px-4 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-16 right-[-90px] w-80 h-80 bg-coral/18 blob animate-float-slow pointer-events-none -z-10 blur-2xl" />
      <div className="absolute bottom-24 left-[-90px] w-72 h-72 bg-honey/22 blob-2 pointer-events-none -z-10 blur-2xl" />
      <div className="absolute top-1/2 right-[12%] w-52 h-52 bg-violet/12 blob pointer-events-none -z-10 blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[var(--text-muted)] hover:text-coral-text transition-colors mb-3 sm:mb-6 font-body font-bold text-sm group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back
        </button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-center mb-5 sm:mb-8"
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-coral/14 text-coral-text rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-sm ring-1 ring-coral/20">
            <ShoppingBag size={22} className="sm:w-7 sm:h-7" />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[var(--text)] font-display font-bold mb-1 sm:mb-2">
            Start Your <span className="text-coral-text italic">Order</span>
          </h1>
          <p className="text-[var(--text-muted)] font-body text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
            Submit your details and we'll continue on WhatsApp for photos and payment.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="soft-card overflow-hidden"
        >
          <div className="grid lg:grid-cols-[1.35fr_0.9fr]">
            <div className="p-3.5 sm:p-7 lg:p-8 space-y-5 sm:space-y-7">
              {/* Package Selection */}
              <section>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="flex items-center gap-2 font-display font-bold text-[var(--text)] text-xl">
                      <Package size={20} className="text-violet-text" /> Choose your book
                    </h2>
                    <p className="text-xs sm:text-sm text-[var(--text-muted)] font-body mt-1">Tap a package to add or remove it from this order.</p>
                  </div>
                  <span className="hidden sm:inline-flex rounded-full bg-coral/12 px-3 py-1 text-[11px] font-black uppercase text-coral-text ring-1 ring-coral/20">Step 1</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {packages.map((pkg, i) => {
                    const isSelected = selectedIds.has(pkg.id);
                    return (
                      <motion.button
                        type="button"
                        key={pkg.id}
                        onClick={() => togglePackage(pkg.id)}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className={cn(
                          'relative min-h-[172px] rounded-2xl border-2 p-4 text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-coral/25',
                          isSelected ? pkg.selected : `${pkg.accent} hover:border-[var(--border)]`
                        )}
                      >
                        {pkg.badge && (
                          <span className="absolute -top-2.5 left-4 rounded-full bg-coral px-2.5 py-1 text-[9px] font-black uppercase tracking-wide text-charcoal shadow-sm ring-1 ring-coral-text/20">
                            {pkg.badge}
                          </span>
                        )}
                        <div className="mb-3 flex items-start justify-between gap-3">
                          <div className={cn('flex h-11 w-11 items-center justify-center rounded-2xl shadow-sm', pkg.iconClass)}>
                            <pkg.Icon size={22} />
                          </div>
                          <div className={cn('flex h-6 w-6 items-center justify-center rounded-full border-2 transition-colors', isSelected ? 'border-coral bg-coral text-charcoal' : 'border-[var(--border)] bg-[var(--surface)] text-transparent')}>
                            <CheckCircle size={14} fill="currentColor" />
                          </div>
                        </div>
                        <h3 className="font-display text-base font-bold leading-tight text-[var(--text)]">{pkg.name}</h3>
                        <p className="mt-1 text-xs font-bold uppercase tracking-wide text-[var(--text-muted)]">{pkg.pages}</p>
                        <p className="mt-2 min-h-[32px] text-xs leading-relaxed text-[var(--text-muted)]">{pkg.detail}</p>
                        <p className="mt-3 font-display text-xl font-bold text-[var(--text)]">Rs. {pkg.price}</p>
                      </motion.button>
                    );
                  })}
                </div>

                <div className="mt-4 flex items-center gap-2.5 rounded-2xl bg-sage/10 p-3.5 ring-1 ring-sage/25 text-sage-text">
                  <Lock size={16} className="shrink-0" />
                  <p className="text-xs sm:text-sm font-bold font-body leading-none">
                    Photos will be submitted securely after WhatsApp confirmation.
                  </p>
                </div>
              </section>

              {/* Delivery Details */}
              <section className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display font-bold text-[var(--text)] text-xl flex items-center gap-2">
                      <Sparkles size={18} className="text-honey-text" /> Delivery details
                    </h2>
                    <p className="text-xs sm:text-sm text-[var(--text-muted)] font-body mt-1">We use this to confirm your order on WhatsApp.</p>
                  </div>
                  <span className="hidden sm:inline-flex rounded-full bg-honey/20 px-3 py-1 text-[11px] font-black uppercase text-honey-text ring-1 ring-honey/30">Step 2</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}><User size={15} className="text-coral-text" /> Full Name *</label>
                    <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className={inputClass} placeholder="Ali Khan" />
                  </div>
                  <div>
                    <label className={labelClass}><Phone size={15} className="text-sage-text" /> WhatsApp Number *</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+923XXXXXXXXX" />
                  </div>
                </div>
                <div>
                  <label className={labelClass}><Mail size={15} className="text-violet-text" /> Email Address <span className="font-normal text-[var(--text-muted)]">(optional)</span></label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="name@example.com" />
                </div>
                <div>
                  <label className={labelClass}><MapPin size={15} className="text-honey-text" /> Delivery Address *</label>
                  <textarea name="address" required rows={4} value={formData.address} onChange={handleChange} className={cn(inputClass, 'resize-none')} placeholder="House 123, Street 4, City" />
                </div>
              </section>
            </div>

            <aside className="border-t border-[var(--border)] bg-honey/10 p-4 sm:p-7 lg:border-l lg:border-t-0 lg:p-8">
              <div className="lg:sticky lg:top-28 space-y-5">
                <div>
                  <p className="section-label">Order Summary</p>
                  <h2 className="mt-1 font-display text-2xl font-bold text-[var(--text)]">One last Step on WhatsApp</h2>
                </div>

                <div className="space-y-2">
                  {selectedPackages.length > 0 ? selectedPackages.map(pkg => (
                    <div key={pkg.id} className="flex items-center justify-between gap-3 rounded-2xl bg-[var(--surface)] px-3 py-3 ring-1 ring-[var(--border)]">
                      <div>
                        <p className="font-display text-sm font-bold text-[var(--text)]">{pkg.name}</p>
                        <p className="text-xs text-[var(--text-muted)]">{pkg.pages}</p>
                      </div>
                      <p className="shrink-0 font-display text-sm font-bold text-[var(--text)]">Rs. {pkg.price}</p>
                    </div>
                  )) : (
                    <div className="rounded-2xl bg-[var(--surface)] p-4 text-sm font-bold text-coral-text ring-1 ring-coral/25">Select at least one package.</div>
                  )}
                </div>

                <div className="rounded-3xl bg-[var(--surface)] p-4 ring-1 ring-[var(--border)]">
                  <div className="flex items-center justify-between text-sm text-[var(--text-muted)]">
                    <span>Total</span>
                    <span>{selectedIds.size} package{selectedIds.size > 1 ? 's' : ''}</span>
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-4">
                    <p className="font-display text-3xl font-bold text-[var(--text)]">Rs. {totalFormatted}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-3xl bg-[var(--surface)] p-4 ring-1 ring-honey/30">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-honey/25 text-honey-text">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-[var(--text)]">What happens next</h3>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">
                      We’ll connect with you on WhatsApp to review your order, collect your photos, and guide you through the next steps before final confirmation.
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || selectedIds.size === 0}
                  className="btn-primary w-full justify-center text-base py-4 disabled:pointer-events-none disabled:opacity-60"
                >
                  <WhatsAppIcon size={20} className="text-white" />
                  {isSubmitting ? 'Opening WhatsApp...' : 'Continue on WhatsApp'}
                </button>
                <p className="text-center text-xs text-[var(--text-muted)] font-body leading-relaxed">
                  No payment required yet — review everything with us on WhatsApp before confirming your order.
                </p>
              </div>
            </aside>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default OrderPage;
