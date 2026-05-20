/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import SEO from './components/SEO';
import { seoRoutes } from './data/seoRoutes';

const CreatePage = React.lazy(() => import('./components/CreatePage'));
const OrderPage = React.lazy(() => import('./components/OrderPage'));
const PoliciesPage = React.lazy(() => import('./components/PoliciesPage'));
const SeoLandingPage = React.lazy(() => import('./components/SeoLandingPage'));

const RouteFallback = () => (
  <div className="min-h-[55vh] bg-[var(--bg)] px-4 py-16 text-center">
    <p className="font-display text-2xl text-[var(--text)]">Loading...</p>
  </div>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<RouteFallback />}>
        <Routes location={location}>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <SEO
                  title="Custom Coloring Books from Photos | MemoryColoring"
                  description="Turn your favorite family photos into personalized coloring books. Premium artist-crafted, hand-drawn pages for kids and families. Fast nationwide delivery!"
                />
                <LandingPage />
              </motion.div>
            }
          />
          <Route
            path="/create"
            element={
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <SEO
                  title="Create Your Personalized Coloring Book | MemoryColoring"
                  description="Upload your favorite family photo and preview a custom hand-drawn coloring page in seconds. Give it a try for free!"
                />
                <CreatePage />
              </motion.div>
            }
          />
          <Route
            path="/checkout"
            element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <SEO
                  title="Order Your Custom Memory Book | MemoryColoring"
                  description="Choose a package, upload your photos, and place your order. Free PDF copies and premium hardcovers available."
                />
                <OrderPage />
              </motion.div>
            }
          />
          <Route
            path="/policies"
            element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <SEO
                  title="Privacy, Refunds & Delivery Terms | MemoryColoring"
                  description="Read the terms, refund policies, privacy guidelines, and nationwide shipping details for MemoryColoring."
                />
                <PoliciesPage />
              </motion.div>
            }
          />
          {seoRoutes.map((slug) => (
          <Route
            key={slug}
            path={slug}
            element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <SeoLandingPage />
              </motion.div>
            }
          />
          ))}
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}

