import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Shield, RefreshCw, FileText, Truck } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const sections = [
  {
    id: 'privacy',
    icon: Shield,
    color: 'text-sky-text bg-sky/10 border-sky/20',
    title: 'Privacy Policy',
    emoji: '🔒',
    content: [
      {
        heading: 'Information We Collect',
        body: 'When you place an order, we collect your name, WhatsApp number, email address (optional), and delivery address. We may also receive photos you share with us via WhatsApp for the purpose of creating your coloring book.',
      },
      {
        heading: 'How We Use Your Information',
        body: 'Your information is used solely to fulfill your order — to create your personalized coloring book, communicate order updates, and arrange delivery. We do not sell, rent, or share your personal data with any third parties.',
      },
      {
        heading: 'Your Photos',
        body: 'Photos you share with us are used exclusively for creating your coloring book artwork. We do not use your photos for marketing, social media, or any other purpose without your explicit written consent.',
      },
      {
        heading: 'Data Security',
        body: 'We handle all personal information with care. Communication happens via WhatsApp which uses end-to-end encryption. We do not store card or payment details.',
      },
      {
        heading: 'Contact',
        body: 'For any privacy concerns, please reach out to us directly on WhatsApp at +923462083310.',
      },
    ],
  },
  {
    id: 'refund',
    icon: RefreshCw,
    color: 'text-coral-text bg-coral/10 border-coral/20',
    title: 'Refund & Cancellation Policy',
    emoji: '💸',
    content: [
      {
        heading: 'Order Review',
        body: 'We review each order with you before production begins, including package selection, submitted photos, delivery details, and the payment steps shared on WhatsApp.',
      },
      {
        heading: 'Before Work Begins',
        body: 'If you cancel your order before we have started the artwork, you may request a full refund of any payment already made. Please notify us within 24 hours of placing the order.',
      },
      {
        heading: 'After Work Has Begun',
        body: 'Once our artist has started illustrating your coloring book, refunds may be limited because custom artwork requires significant time and skill from our team.',
      },
      {
        heading: 'Quality Issues',
        body: 'If the final product has a defect, printing error, or does not match the approved preview, we will reprint or replace it at no additional cost to you.',
      },
      {
        heading: 'Approval Process',
        body: 'We share a digital preview of your coloring book before printing. Refunds are not provided for subjective style preferences once the preview has been approved by the customer.',
      },
      {
        heading: 'Refund Timeline',
        body: 'Approved refunds are processed within 5-7 business days via the same payment method used for your order.',
      },
    ],
  },
  {
    id: 'terms',
    icon: FileText,
    color: 'text-violet-text bg-violet/10 border-violet/20',
    title: 'Terms of Service',
    emoji: '📋',
    content: [
      {
        heading: 'Order Agreement',
        body: 'By placing an order with memorycoloring, you confirm that you are the legal owner or have permission to use all photos shared with us. You accept these Terms of Service in full.',
      },
      {
        heading: 'Turnaround Time',
        body: 'Standard orders are completed within 5-10 business days from receipt of all photos and order confirmation. Rush orders may be available — please inquire via WhatsApp.',
      },
      {
        heading: 'Photo Requirements',
        body: 'For best results, please provide clear, high-resolution photos (minimum 1 MB each) with good lighting. Low-quality photos may affect the final artwork. We will notify you if a photo is unsuitable before starting work.',
      },
      {
        heading: 'Intellectual Property',
        body: 'All artwork created by memorycoloring is for personal, non-commercial use by the customer only. Reselling, reproducing, or distributing our artwork is strictly prohibited.',
      },
      {
        heading: 'Limitation of Liability',
        body: 'memorycoloring is not responsible for delivery delays caused by courier services, or any damage caused during shipping beyond our control. We will assist in filing claims where applicable.',
      },
      {
        heading: 'Changes to Orders',
        body: 'Change requests must be submitted before the artwork preview is approved. Changes after approval may incur additional charges depending on the scope of revision.',
      },
    ],
  },
  {
    id: 'delivery',
    icon: Truck,
    color: 'text-sage-text bg-sage/10 border-sage/20',
    title: 'Delivery Information',
    emoji: '🚚',
    content: [
      {
        heading: 'Delivery Coverage',
        body: 'We deliver nationwide across Pakistan. Deliveries are made via TCS, Leopard, or a similar reliable courier service depending on your city.',
      },
      {
        heading: 'Delivery Charges',
        body: 'Delivery charges vary by location and are calculated at checkout. Standard delivery within major cities (Lahore, Karachi, Islamabad, Multan, Faisalabad) is typically Rs. 200-350.',
      },
      {
        heading: 'Delivery Timeline',
        body: 'After your book is printed and dispatched, standard delivery takes 2-4 business days within major cities, and 4-7 business days for remote areas.',
      },
      {
        heading: 'Tracking',
        body: 'Once your order is dispatched, we will share the courier tracking number with you on WhatsApp so you can monitor your delivery.',
      },
      {
        heading: 'Damaged in Transit',
        body: 'In the rare event that your book arrives damaged, please send us photos within 48 hours of delivery via WhatsApp. We will arrange a free replacement or refund.',
      },
      {
        heading: 'Digital PDF Delivery',
        body: 'Digital PDF files included with printed packages are delivered via WhatsApp or email after final approval. Printed books are shipped by courier.',
      },
    ],
  },
];

const PoliciesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to specific section if hash provided
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-[var(--bg)] py-8 px-4 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet/5 blob pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky/5 blob-2 pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[var(--text-muted)] hover:text-coral-text transition-colors mb-8 font-body font-bold text-sm group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back
        </button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl lg:text-5xl font-display font-bold text-[var(--text)] mb-3">
            Our <span className="text-violet-text">Policies</span>
          </h1>
          <p className="text-[var(--text-muted)] font-body max-w-xl mx-auto">
            We believe in full transparency. Here's everything you need to know about how we work and what you can expect from us.
          </p>
        </motion.div>

        {/* Jump Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
              className="badge bg-[var(--surface)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-coral/30 transition-all font-body text-xs py-2 px-4"
            >
              {s.emoji} {s.title}
            </button>
          ))}
        </motion.div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {sections.map((section, si) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: si * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="soft-card p-6 sm:p-8"
              >
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-[var(--border)]">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 shrink-0 ${section.color}`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h2 className="text-xl font-display font-bold text-[var(--text)]">{section.emoji} {section.title}</h2>
                  </div>
                </div>

                {/* Items */}
                <div className="space-y-5">
                  {section.content.map((item, ii) => (
                    <div key={ii}>
                      <h3 className="font-display font-bold text-[var(--text)] text-sm mb-1">{item.heading}</h3>
                      <p className="text-[var(--text-muted)] font-body text-sm leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Footer */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="mt-12 soft-card p-8 text-center border-2 border-sage/20"
        >
          <p className="text-2xl mb-2">🤝</p>
          <h3 className="font-display font-bold text-[var(--text)] text-xl mb-2">Still have questions?</h3>
          <p className="text-[var(--text-muted)] font-body text-sm mb-6 max-w-sm mx-auto">
            We're always happy to clarify anything. Reach out on WhatsApp and we'll respond within a few hours.
          </p>
          <a
            href="https://wa.me/923462083310?text=Hi%20memorycoloring!%20I%20have%20a%20question%20about%20your%20policies."
            target="_blank"
            rel="noreferrer"
            className="btn-wa inline-flex"
          >
            <WhatsAppIcon size={18} className="text-white" /> Chat with Us
          </a>
        </motion.div>

        <p className="text-center text-xs text-[var(--text-muted)] font-body mt-8">
          Last updated: May 2025 · memorycoloring — Multan, Pakistan
        </p>
      </div>
    </div>
  );
};

export default PoliciesPage;
