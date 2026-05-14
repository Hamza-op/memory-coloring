import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, CheckCircle, Package, MessageCircle, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    { id: 'mini', name: 'Mini Memory', priceNum: 1999, price: '1,999', emoji: '📖', accent: 'border-violet/40 bg-violet/5', selected: 'border-violet bg-violet/10 shadow-md', badge: null },
    { id: 'family', name: 'Family Favorite', priceNum: 3499, price: '3,499', emoji: '🎨', accent: 'border-coral/40 bg-coral/5', selected: 'border-coral bg-coral/10 shadow-md', badge: 'Most Popular' },
    { id: 'premium', name: 'Premium Gift', priceNum: 4999, price: '4,999', emoji: '🎁', accent: 'border-honey/40 bg-honey/5', selected: 'border-honey bg-honey/10 shadow-md', badge: null },
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
  const advanceFormatted = Math.ceil(total * 0.5).toLocaleString();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedIds.size === 0) return;
    setIsSubmitting(true);
    const pkgLines = selectedPackages.map(p => `  • ${p.name} — Rs. ${p.price}`).join('\n');
    const message =
      `*New Order - memorycoloring* 🎨\n\n` +
      `*Package(s):*\n${pkgLines}\n` +
      `*Total:* Rs. ${totalFormatted}\n` +
      `*50% Advance:* Rs. ${advanceFormatted}\n\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Address:* ${formData.address}\n\n` +
      `_I understand a 50% advance payment is required to process my order._\n` +
      `_Please confirm my order!_`;
    window.open(`https://wa.me/923462083310?text=${encodeURIComponent(message)}`, '_blank');
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: 'spring', bounce: 0.4 }}
          className="soft-card max-w-md w-full text-center p-10 border-2 border-sage/30"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', bounce: 0.6 }}
            className="w-24 h-24 bg-sage/10 text-sage-text rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle size={48} strokeWidth={1.5} />
          </motion.div>
          <h2 className="text-3xl text-[var(--text)] font-display font-bold mb-3">Order Received! 🎉</h2>
          <p className="text-[var(--text-muted)] font-body mb-8 leading-relaxed">
            Thank you! We've opened WhatsApp with your order details.<br />
            Please hit <b className="text-[var(--text)]">"Send"</b> to confirm and share your photos with us!
          </p>
          <button onClick={() => navigate('/')} className="btn-primary w-full justify-center">Return to Home</button>
        </motion.div>
      </div>
    );
  }

  const inputClass = "w-full bg-[var(--bg)] border-2 border-[var(--border)] rounded-2xl px-4 py-3 font-body text-[var(--text)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/15 transition-all";
  const labelClass = "block text-sm font-bold text-[var(--text-muted)] mb-2 font-body";

  return (
    <div className="min-h-screen bg-[var(--bg)] py-6 sm:py-8 px-3 sm:px-4 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 right-[5%] w-72 h-72 bg-violet/8 blob animate-float-slow pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-[5%] w-56 h-56 bg-coral/8 blob-2 pointer-events-none -z-10" />

      <div className="max-w-2xl mx-auto relative z-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[var(--text-muted)] hover:text-coral-text transition-colors mb-6 font-body font-bold text-sm group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back
        </button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="w-16 h-16 bg-coral/10 text-coral-text rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
            <ShoppingBag size={28} />
          </div>
          <h1 className="text-3xl lg:text-4xl text-[var(--text)] font-display font-bold mb-2">
            Complete Your <span className="text-coral-text italic">Order</span>
          </h1>
          <p className="text-[var(--text-muted)] font-body text-sm max-w-sm mx-auto">
            Fill out the details below to secure your personalised memory coloring book.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="soft-card p-4 sm:p-8 space-y-6"
        >
          {/* Package Selection */}
          <div>
            <label className="flex items-center gap-2 font-display font-bold text-[var(--text)] text-lg mb-1">
              <Package size={18} className="text-violet-text" /> Select Package(s)
            </label>
            <p className="text-xs text-[var(--text-muted)] font-body mb-4">You can select multiple — tap to toggle.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {packages.map((pkg, i) => {
                const isSelected = selectedIds.has(pkg.id);
                return (
                  <motion.div
                    key={pkg.id}
                    onClick={() => togglePackage(pkg.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={cn(
                      'relative p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200',
                      isSelected ? pkg.selected : `${pkg.accent} border-transparent hover:border-[var(--border)]`
                    )}
                  >
                    {pkg.badge && (
                      <span className="absolute -top-2.5 left-3 bg-coral text-charcoal text-[9px] px-2.5 py-1 rounded-full font-black uppercase tracking-wider shadow-sm border border-coral-text/20">
                        {pkg.badge}
                      </span>
                    )}
                    <div className="text-xl mb-1">{pkg.emoji}</div>
                    <div className="font-display font-bold text-[var(--text)] text-sm leading-tight">{pkg.name}</div>
                    <div className="text-[var(--text-muted)] font-body text-xs mt-0.5">
                      Rs. <span className="font-bold text-[var(--text)]">{pkg.price}</span>
                    </div>
                    {isSelected && (
                      <div className="absolute top-2 right-2 w-4 h-4 bg-coral rounded-full flex items-center justify-center">
                        <span className="text-charcoal text-[8px] font-black">✓</span>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Order Total */}
          {selectedIds.size > 0 && (
            <div className="bg-[var(--bg)] border-2 border-[var(--border)] rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <p className="text-xs text-[var(--text-muted)] font-body">{selectedIds.size} package{selectedIds.size > 1 ? 's' : ''} selected</p>
                <p className="font-display font-bold text-[var(--text)] text-lg">Rs. {totalFormatted}</p>
              </div>
              <div className="sm:text-right">
                <p className="text-xs text-[var(--text-muted)] font-body">Advance (50%)</p>
                <p className="font-display font-bold text-coral-text text-lg">Rs. {advanceFormatted}</p>
              </div>
            </div>
          )}

          {/* Divider */}
          <div className="border-t-2 border-dashed border-[var(--border)]" />

          {/* Delivery Details */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-[var(--text)] text-lg flex items-center gap-2">
              <Sparkles size={16} className="text-honey-text" /> Delivery Details
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Full Name *</label>
                <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className={inputClass} placeholder="Ali" />
              </div>
              <div>
                <label className={labelClass}>WhatsApp Number *</label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+923XXXXXXXXX" />
              </div>
            </div>
            <div>
              <label className={labelClass}>Email Address <span className="font-normal opacity-60">(optional)</span></label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="jane@example.com" />
            </div>
            <div>
              <label className={labelClass}>Delivery Address *</label>
              <textarea name="address" required rows={3} value={formData.address} onChange={handleChange} className={cn(inputClass, 'resize-none')} placeholder="House 123, Street 4, City" />
            </div>
          </div>

          {/* Payment Notice */}
          <div className="soft-card border-2 border-honey/40 bg-honey/5 p-4 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-honey flex items-center justify-center shrink-0 shadow-sm">
              <span className="text-charcoal text-sm font-black">!</span>
            </div>
            <div>
              <h4 className="text-sm font-display font-bold text-[var(--text)] mb-0.5">💳 Payment Notice</h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed font-body">
                At least <span className="font-bold text-coral-text">50% advance payment</span> via Bank Transfer is required to start your order. Remaining balance on delivery.
              </p>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="btn-primary w-full justify-center text-base py-4 mt-2"
          >
            <MessageCircle size={20} fill="currentColor" />
            {isSubmitting ? 'Opening WhatsApp...' : 'Confirm Order via WhatsApp'}
          </button>
          <p className="text-center text-xs text-[var(--text-muted)] font-body leading-relaxed">
            By ordering, you agree to a <b>50% advance payment</b> via Bank Transfer to confirm and begin processing.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderPage;
