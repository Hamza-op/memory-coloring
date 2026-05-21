/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import SEO from './components/SEO';
import { seoRoutes } from './data/seoRoutes';
import { trackPageView } from './lib/metaPixel';

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

const MetaPageViewTracker = () => {
  const { pathname, search } = useLocation();
  const didTrackInitialPage = React.useRef(false);

  React.useEffect(() => {
    if (!didTrackInitialPage.current) {
      didTrackInitialPage.current = true;
      return;
    }

    trackPageView(`${pathname}${search}`);
  }, [pathname, search]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes location={location}>
        <Route
          path="/"
          element={
            <>
              <SEO
                title="Custom Coloring Books from Photos | MemoryColoring"
                description="Turn your favorite family photos into personalized coloring books. Premium artist-crafted, hand-drawn pages for kids and families. Fast nationwide delivery!"
              />
              <LandingPage />
            </>
          }
        />
        <Route
          path="/create"
          element={
            <>
              <SEO
                title="Create Your Personalized Coloring Book | MemoryColoring"
                description="Upload your favorite family photo and preview a custom hand-drawn coloring page in seconds. Give it a try for free!"
              />
              <CreatePage />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <SEO
                title="Order Your Custom Memory Book | MemoryColoring"
                description="Choose a package, upload your photos, and place your order. Free PDF copies and premium hardcovers available."
              />
              <OrderPage />
            </>
          }
        />
        <Route
          path="/policies"
          element={
            <>
              <SEO
                title="Privacy, Refunds & Delivery Terms | MemoryColoring"
                description="Read the terms, refund policies, privacy guidelines, and nationwide shipping details for MemoryColoring."
              />
              <PoliciesPage />
            </>
          }
        />
        {seoRoutes.map((slug) => (
          <Route
            key={slug}
            path={slug}
            element={
              <>
                <SeoLandingPage />
              </>
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <MetaPageViewTracker />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}

