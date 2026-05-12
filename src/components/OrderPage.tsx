import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, CheckCircle, Package, Image as ImageIcon, Camera } from 'lucide-react';

const OrderPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    packageId: 'family',
    image: location.state?.image || null,
    fullName: '',
    phone: '',
    email: '',
    address: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const packages = [
    { id: 'starter', name: 'Digital Starter', price: '799' },
    { id: 'mini', name: 'Mini Memory', price: '1,999' },
    { id: 'family', name: 'Family Favorite', price: '3,499', popular: true },
    { id: 'premium', name: 'Premium Gift', price: '4,999' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center p-4">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="soft-card max-w-md w-full text-center p-10">
          <div className="w-20 h-20 bg-sage/10 text-sage rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl text-[var(--text)] font-display font-bold mb-3">Order Received!</h2>
          <p className="text-[var(--text-muted)] font-body mb-8">
            Thank you! Our artists will begin working on your magical memory right away. We'll contact you on WhatsApp shortly.
          </p>
          <button onClick={() => navigate('/')} className="btn-primary w-full">Return to Home</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] py-12 px-4 relative">
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-violet/5 blob animate-float-slow pointer-events-none" />
      <div className="max-w-3xl mx-auto relative z-10">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-[var(--text-muted)] hover:text-coral transition-colors mb-8 font-body font-bold text-sm">
          <ArrowLeft size={16} /> Back
        </button>

        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-coral/10 text-coral rounded-full flex items-center justify-center mx-auto mb-4 blob-2">
            <ShoppingBag size={28} />
          </div>
          <h1 className="text-3xl lg:text-4xl text-[var(--text)] font-display font-bold mb-2">Complete Your Order</h1>
          <p className="text-[var(--text-muted)] font-body">Fill out the details below to secure your memory coloring book.</p>
        </div>

        <div className="soft-card p-6 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            <div className="space-y-4">
              <label className="flex items-center gap-2 font-display font-bold text-[var(--text)] text-xl">
                <Package size={20} className="text-violet" /> Select Package
              </label>
              <div className="grid sm:grid-cols-2 gap-4">
                {packages.map(pkg => (
                  <div key={pkg.id} onClick={() => setFormData({...formData, packageId: pkg.id})}
                    className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${formData.packageId === pkg.id ? 'border-coral bg-coral/5 shadow-sm' : 'border-[var(--border)] bg-[var(--surface)] hover:border-coral/30'}`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-display font-bold text-[var(--text)]">{pkg.name}</span>
                      {pkg.popular && <span className="bg-coral text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide">Popular</span>}
                    </div>
                    <div className="text-[var(--text-muted)] font-body">Rs. <span className="font-bold">{pkg.price}</span></div>
                  </div>
                ))}
              </div>
            </div>

            {formData.image && (
              <div className="bg-[var(--surface-hover)] p-4 rounded-2xl flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden shadow-sm shrink-0">
                  <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-[var(--text)] text-sm mb-1">Attached Artwork Preview</h4>
                  <p className="text-[var(--text-muted)] text-xs font-body">We'll use this style reference.</p>
                </div>
              </div>
            )}

            <div className="space-y-4 pt-4 border-t border-[var(--border)]">
              <h3 className="font-display font-bold text-[var(--text)] text-xl">Delivery Details</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[var(--text-muted)] mb-2">Full Name</label>
                  <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-xl px-4 py-3 font-body focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[var(--text-muted)] mb-2">WhatsApp Number</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-xl px-4 py-3 font-body focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all" placeholder="+92 3XX XXXXXXX" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-[var(--text-muted)] mb-2">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-xl px-4 py-3 font-body focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all" placeholder="jane@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[var(--text-muted)] mb-2">Delivery Address</label>
                <textarea name="address" required rows={3} value={formData.address} onChange={handleChange} className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-xl px-4 py-3 font-body focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all resize-none" placeholder="House 123, Street 4, City" />
              </div>
            </div>

            <button type="submit" disabled={isSubmitting} className="btn-primary w-full text-lg mt-6">
              {isSubmitting ? 'Placing Order...' : 'Complete Order securely'}
            </button>
            <p className="text-center text-xs text-[var(--text-muted)] mt-4 font-body">
              By placing this order, you agree to our Terms of Service and Privacy Policy. Payment will be collected via Cash on Delivery or Bank Transfer.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
