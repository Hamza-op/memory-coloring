import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Star, Sparkles } from 'lucide-react';

const NOTIFICATIONS = [
  { name: "Sarah M.", location: "Lahore", item: "Family Favorite Pack", icon: Heart, color: "text-coral bg-coral/10" },
  { name: "Ali R.", location: "Karachi", item: "Premium Gift Box", icon: Star, color: "text-honey bg-honey/10" },
  { name: "Fatima K.", location: "Islamabad", item: "Mini Memory Pack", icon: Sparkles, color: "text-violet bg-violet/10" },
];

const ActivityToast = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cycleNotification = () => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 4000);
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % NOTIFICATIONS.length);
      }, 5000);
    };

    const initialDelay = setTimeout(cycleNotification, 3000);
    const intervalId = setInterval(cycleNotification, 12000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(intervalId);
    };
  }, []);

  const notification = NOTIFICATIONS[currentIndex];
  const Icon = notification.icon;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed top-20 lg:top-24 right-4 lg:right-6 z-50 pointer-events-none"
        >
          <div className="glass-card flex items-center gap-3 p-3 pr-5 shadow-lg max-w-sm border border-[var(--border)]">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${notification.color}`}>
              <Icon size={18} />
            </div>
            <div>
              <p className="text-xs text-[var(--text-muted)] font-body mb-0.5">
                <span className="font-bold text-[var(--text)]">{notification.name}</span> from {notification.location}
              </p>
              <p className="text-sm font-display font-bold text-[var(--text)]">
                Ordered <span className="text-coral">{notification.item}</span>
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ActivityToast;
