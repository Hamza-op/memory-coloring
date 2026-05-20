import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Star, Sparkles, Gift, Pencil, Smile } from 'lucide-react';

const NOTIFICATIONS = [
  { name: "Sarah M.", location: "Lahore", item: "Family Favorite Pack", icon: Heart, color: "text-coral-text bg-coral/10" },
  { name: "Ali R.", location: "Karachi", item: "Premium Gift Box", icon: Star, color: "text-honey-text bg-honey/10" },
  { name: "Fatima K.", location: "Islamabad", item: "Mini Memory Pack", icon: Sparkles, color: "text-violet-text bg-violet/10" },
  { name: "Ayesha T.", location: "Multan", item: "Family Favorite Pack", icon: Gift, color: "text-sky-text bg-sky/10" },
  { name: "Zainab M.", location: "Faisalabad", item: "Mini Memory Pack", icon: Pencil, color: "text-sage-text bg-sage/10" },
  { name: "Omar F.", location: "Rawalpindi", item: "Premium Gift Box", icon: Star, color: "text-honey-text bg-honey/10" },
  { name: "Bilal Q.", location: "Peshawar", item: "Mini Memory Pack", icon: Smile, color: "text-violet-text bg-violet/10" },
  { name: "Hassan A.", location: "Lahore", item: "Family Favorite Pack", icon: Heart, color: "text-coral-text bg-coral/10" },
  { name: "Sana R.", location: "Karachi", item: "Premium Gift Box", icon: Gift, color: "text-sky-text bg-sky/10" },
  { name: "Khadija B.", location: "Islamabad", item: "Family Favorite Pack", icon: Pencil, color: "text-sage-text bg-sage/10" },
];

const ActivityToast = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let active = true;
    let timerId: ReturnType<typeof setTimeout>;

    const showToast = () => {
      if (!active) return;
      // Pick a random notification
      setCurrentIndex(Math.floor(Math.random() * NOTIFICATIONS.length));
      setIsVisible(true);
      
      // Hide after 4 seconds
      timerId = setTimeout(() => {
        if (!active) return;
        setIsVisible(false);
        // Schedule next pop up randomly between 6s to 18s from now
        const nextDelay = 6000 + Math.random() * 12000;
        timerId = setTimeout(showToast, nextDelay);
      }, 4000);
    };

    // Initial pop-up delay between 2s to 5s
    const initialDelay = 2000 + Math.random() * 3000;
    timerId = setTimeout(showToast, initialDelay);

    return () => {
      active = false;
      clearTimeout(timerId);
    };
  }, []);

  const notification = NOTIFICATIONS[currentIndex];
  const Icon = notification.icon;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 0.8, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          whileHover={{ opacity: 1, scale: 1.02 }}
          transition={{ type: "spring", bounce: 0.4 }}
          className="fixed top-20 lg:top-24 right-4 lg:right-6 z-50 pointer-events-auto"
        >
          <div className="glass-card flex items-center gap-2.5 p-2 pr-4 shadow-sm border border-[var(--border)] rounded-2xl max-w-[240px]">
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${notification.color}`}>
              <Icon size={14} />
            </div>
            <div>
              <p className="text-[10px] text-[var(--text-muted)] font-body leading-tight mb-0.5">
                <span className="font-bold text-[var(--text)]">{notification.name}</span> from {notification.location}
              </p>
              <p className="text-[11px] font-display font-bold text-[var(--text)] leading-tight">
                Ordered <span className="text-coral-text">{notification.item}</span>
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ActivityToast;
