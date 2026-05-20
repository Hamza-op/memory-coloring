import { Link, Navigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Camera, Gift, HelpCircle, MapPin, Paintbrush, ShieldCheck, Sparkles } from 'lucide-react';
import SEO from './SEO';
import WhatsAppIcon from './WhatsAppIcon';
import familyPhoto from '../../assets/memory-coloring-20260513-223056.webp';
import familySketch from '../../assets/memory-coloring-20260513-223135.webp';
import birthdayPoster from '../../assets/memory-coloring-20260513-224058.webp';
import schoolPoster from '../../assets/memory-coloring-20260513-225412.webp';

type Section = {
  heading: string;
  body: string;
};

type FAQ = {
  question: string;
  answer: string;
};

type SeoPage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  hero: string;
  intro: string;
  image: string;
  imageAlt: string;
  primaryKeyword: string;
  sections: Section[];
  benefits: string[];
  faqs: FAQ[];
};

export const seoPages: SeoPage[] = [
  {
    slug: '/custom-coloring-book-from-photos',
    title: 'Custom Coloring Book From Photos',
    metaTitle: 'Custom Coloring Book from Photos | MemoryColoring',
    metaDescription: 'Turn family photos into a custom coloring book with artist-crafted pages, preview approval, PDF options, and nationwide Pakistan delivery.',
    badge: 'Photo keepsake',
    hero: 'Turn real family photos into a custom coloring book',
    intro: 'MemoryColoring transforms your favorite family photos into clean, child-friendly coloring pages, then binds them into a personalized book your child can color, keep, and return to.',
    image: familySketch,
    imageAlt: 'Family photo converted into a custom coloring book page',
    primaryKeyword: 'custom coloring book from photos',
    sections: [
      {
        heading: 'What makes it custom',
        body: 'This is not a generic printable template. Each book is built around the people, pets, birthdays, school moments, and family memories you send. We simplify the photos into clear coloring outlines while keeping the faces, poses, and emotional details that make the memory recognizable.',
      },
      {
        heading: 'How the process works',
        body: 'You choose a package, share your photos on WhatsApp, and confirm the order details. We prepare the artwork, share a preview before final production, and then deliver the finished PDF or printed coloring book depending on your package.',
      },
      {
        heading: 'Who it is best for',
        body: 'A photo-based coloring book works well for birthdays, Eid gifts, school keepsakes, sibling gifts, family visits, grandparents, and children who enjoy creative screen-free activities. It is especially useful when you want a gift that feels personal without becoming fragile or purely decorative.',
      },
    ],
    benefits: ['Made from your real photos', 'Preview before final production', 'PDF and printed book options', 'Packages from 12 to 36 pages'],
    faqs: [
      { question: 'Can any photo become a coloring page?', answer: 'Most clear photos can work. Bright, sharp images with visible faces and simple backgrounds usually produce the best coloring pages.' },
      { question: 'How many photos do I need?', answer: 'The Mini Memory package works best with 12-15 photos, Family Favorite with around 24 photos, and Premium Gift with up to 36 photos.' },
      { question: 'Will I see the artwork before printing?', answer: 'Yes. We share a preview before final production so you can review the style and details.' },
    ],
  },
  {
    slug: '/personalized-coloring-book-for-kids',
    title: 'Personalized Coloring Book for Kids',
    metaTitle: 'Personalized Coloring Book for Kids | MemoryColoring',
    metaDescription: 'Create a personalized coloring book for kids using real family photos, familiar faces, pets, birthdays, and everyday memories.',
    badge: 'For kids',
    hero: 'A personalized coloring book kids actually recognize',
    intro: 'Children engage differently when the page is not a random cartoon but their own family, pet, birthday, or school memory. That recognition turns coloring into storytelling.',
    image: schoolPoster,
    imageAlt: 'Personalized coloring book page for kids',
    primaryKeyword: 'personalized coloring book for kids',
    sections: [
      {
        heading: 'Why familiar pages work better',
        body: 'A child can color a princess or a car anywhere. A page with their own family, favorite pet, or first day of school has a stronger pull because it connects play with memory. That is the difference between a disposable activity and a keepsake.',
      },
      {
        heading: 'Designed for coloring, not just printing',
        body: 'We keep outlines readable, avoid overloading pages with tiny details, and shape the final artwork so children can color without frustration. The goal is a page that looks personal but still behaves like a proper coloring page.',
      },
      {
        heading: 'Good gift occasions',
        body: 'Personalized coloring books work well for birthdays, siblings, family visits, school milestones, Eid gifts, and quiet weekend activities. They are also useful for parents who want a creative activity that does not start with another screen.',
      },
    ],
    benefits: ['Familiar faces and memories', 'Simple outlines for kids', 'Creative activity away from screens', 'Gift-ready printed packages'],
    faqs: [
      { question: 'What age is this best for?', answer: 'Most children from around 3 years and up can enjoy it, though younger children may prefer simpler photos with fewer people.' },
      { question: 'Can siblings be included in one book?', answer: 'Yes. You can include siblings, parents, grandparents, pets, and family moments in the same book.' },
      { question: 'Can I order it as a gift?', answer: 'Yes. The Premium Gift package is designed for a more complete keepsake presentation.' },
    ],
  },
  {
    slug: '/photo-to-coloring-page',
    title: 'Photo to Coloring Page',
    metaTitle: 'Photo to Coloring Page Service | MemoryColoring',
    metaDescription: 'Convert a photo to a coloring page preview, then order a complete personalized coloring book with clean hand-drawn-style artwork.',
    badge: 'Try a preview',
    hero: 'Convert a photo to a coloring page before ordering',
    intro: 'Use MemoryColoring to see how a real photo can become coloring art, then turn your best memories into a full personalized coloring book.',
    image: familyPhoto,
    imageAlt: 'Original family photo used for photo to coloring page conversion',
    primaryKeyword: 'photo to coloring page',
    sections: [
      {
        heading: 'What photo conversion should preserve',
        body: 'A useful photo-to-coloring-page conversion should keep the memory recognizable while removing visual clutter. Faces, posture, clothing shapes, and the emotional scene matter more than every background texture.',
      },
      {
        heading: 'Best photo types',
        body: 'Choose photos with clear lighting, visible faces, and a main subject that is not too far from the camera. Outdoor photos, birthday photos, family portraits, and pet photos usually work well. Blurry images, dark rooms, and crowded backgrounds are harder.',
      },
      {
        heading: 'From one page to a full book',
        body: 'A single coloring page is useful as a sample, but a full memory book gives the child a sequence of moments to color. That makes the result feel like a story rather than a one-off print.',
      },
    ],
    benefits: ['Preview the coloring style', 'Works with family and pet photos', 'Clear outlines for printing', 'Upgrade into a full book'],
    faqs: [
      { question: 'Can I try one photo first?', answer: 'Yes. The Create page lets you preview the basic photo-to-coloring-page idea before starting an order.' },
      { question: 'Does the final book use the exact automatic preview?', answer: 'The preview is a sample experience. Final order artwork is prepared for a cleaner, book-ready result.' },
      { question: 'Can I print the PDF myself?', answer: 'Yes, PDF delivery is available with packages so you can keep a digital copy and print pages when needed.' },
    ],
  },
  {
    slug: '/custom-coloring-book-pakistan',
    title: 'Custom Coloring Book in Pakistan',
    metaTitle: 'Custom Coloring Book Pakistan | MemoryColoring',
    metaDescription: 'Order custom coloring books in Pakistan from family photos. WhatsApp ordering, preview approval, PDF options, and nationwide delivery.',
    badge: 'Pakistan delivery',
    hero: 'Order a custom coloring book anywhere in Pakistan',
    intro: 'MemoryColoring is based in Multan and delivers personalized photo coloring books across Pakistan, with order confirmation and support handled through WhatsApp.',
    image: birthdayPoster,
    imageAlt: 'Custom coloring book gift delivered in Pakistan',
    primaryKeyword: 'custom coloring book Pakistan',
    sections: [
      {
        heading: 'Nationwide ordering',
        body: 'You do not need to visit a studio or explain the idea through a complicated form. Choose a package, send your details, share photos on WhatsApp, and confirm the preview before production.',
      },
      {
        heading: 'Delivery and digital options',
        body: 'Printed books are shipped by courier after approval and production. Digital PDF copies can be shared through WhatsApp or email, making the product useful even when you need a fast keepsake or want backup pages.',
      },
      {
        heading: 'Local payment and support flow',
        body: 'The order flow is built around WhatsApp because it keeps photo sharing, review, payment guidance, and delivery updates in one place. That reduces confusion for custom work where details matter.',
      },
    ],
    benefits: ['Based in Multan, Pakistan', 'Nationwide courier delivery', 'WhatsApp order support', 'Prices listed in Pakistani rupees'],
    faqs: [
      { question: 'Do you deliver outside Multan?', answer: 'Yes. We deliver nationwide across Pakistan through courier services.' },
      { question: 'How long does delivery take?', answer: 'After production, major city delivery usually takes a few business days. Remote areas may take longer depending on courier service.' },
      { question: 'Can I order through WhatsApp?', answer: 'Yes. The checkout flow opens WhatsApp with your selected package and delivery details.' },
    ],
  },
  {
    slug: '/birthday-coloring-book-gift',
    title: 'Birthday Coloring Book Gift',
    metaTitle: 'Birthday Coloring Book Gift from Photos | MemoryColoring',
    metaDescription: 'Create a birthday coloring book gift from party photos, family memories, pets, and milestones. Personalized, creative, and gift-ready.',
    badge: 'Birthday gift',
    hero: 'A birthday gift they can color, not just open',
    intro: 'A birthday coloring book turns party photos, family moments, and favorite faces into pages the child can keep coloring after the celebration ends.',
    image: birthdayPoster,
    imageAlt: 'Birthday coloring book gift made from photos',
    primaryKeyword: 'birthday coloring book gift',
    sections: [
      {
        heading: 'Why it works as a birthday gift',
        body: 'Most birthday gifts are either quickly consumed or stored away. A personalized coloring book gives the child an activity, a memory, and a keepsake in one package.',
      },
      {
        heading: 'Photos to include',
        body: 'Good birthday books include a mix of portraits, cake moments, family group photos, sibling photos, pets, school memories, and a few everyday moments. The best book feels like the child’s year, not only the party day.',
      },
      {
        heading: 'Gift-ready package choice',
        body: 'For birthdays, the Family Favorite package is usually enough for a rounded book, while Premium Gift works better when you want a larger keepsake with more pages and a stronger presentation.',
      },
    ],
    benefits: ['Personal birthday activity', 'Uses real party and family photos', 'Good for kids and grandparents', 'PDF plus print options'],
    faqs: [
      { question: 'Can I order before the birthday and use older photos?', answer: 'Yes. Many birthday books use photos from the past year, not only photos from the party itself.' },
      { question: 'Which package is best for birthdays?', answer: 'Family Favorite is the most balanced birthday option. Premium Gift is better when you want more pages and a fuller keepsake.' },
      { question: 'Can pets or grandparents be included?', answer: 'Yes. Pets, grandparents, cousins, siblings, and friends can all be part of the book if the photos are clear.' },
    ],
  },
];

const icons = [Camera, Paintbrush, Gift, ShieldCheck];

const buildSchema = (page: SeoPage) => {
  const url = `https://memorycoloring.online${page.slug}`;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: page.metaTitle,
      description: page.metaDescription,
      isPartOf: { '@id': 'https://memorycoloring.online/#website' },
      about: {
        '@type': 'Product',
        name: 'Personalized Custom Memory Coloring Book',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ];
};

export function getSeoPage(slug: string) {
  return seoPages.find((page) => page.slug === slug);
}

export default function SeoLandingPage() {
  const { pathname } = useLocation();
  const page = getSeoPage(pathname);

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen playful-page">
      <SEO title={page.metaTitle} description={page.metaDescription} schema={buildSchema(page)} />
      <section className="hero-stage px-4 py-10 sm:py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <div className="badge mb-4 bg-honey text-charcoal border border-charcoal/10">
              <Sparkles size={14} /> {page.badge}
            </div>
            <p className="section-label mb-3">{page.primaryKeyword}</p>
            <h1 className="logo-like-title max-w-3xl text-4xl text-[var(--text)] sm:text-5xl lg:text-6xl">
              {page.hero}
            </h1>
            <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
              {page.intro}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link to="/checkout" className="btn-primary">
                Start Your Order <ArrowRight size={18} />
              </Link>
              <Link to="/create" className="btn-wa">
                Try a Photo Preview
              </Link>
            </div>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, rotate: 3, scale: 0.97 }}
            animate={{ opacity: 1, rotate: -2, scale: 1 }}
            transition={{ duration: 0.55, type: 'spring', bounce: 0.25 }}
            className="soft-card overflow-hidden p-3"
          >
            <img 
              src={page.image} 
              alt={page.imageAlt} 
              width={page.image === birthdayPoster ? 1448 : 1402} 
              height={page.image === birthdayPoster ? 1086 : 1122} 
              fetchPriority="high"
              className="aspect-[4/3] w-full rounded-[calc(var(--radius)-12px)] object-cover" 
            />
            <figcaption className="px-3 py-4 font-display text-lg font-bold text-[var(--text)]">
              Real memories, redrawn for coloring.
            </figcaption>
          </motion.figure>
        </div>
      </section>

      <section className="px-4 py-10 lg:py-14">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {page.benefits.map((benefit, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={benefit} className="soft-card p-5">
                <Icon className="mb-3 text-coral-text" size={24} />
                <p className="font-display text-lg font-bold text-[var(--text)]">{benefit}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-4 pb-10 lg:pb-16">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-label">Buying guide</p>
            <h2 className="logo-like-title mt-2 text-3xl text-[var(--text)] sm:text-4xl">
              What to know before you order
            </h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-[var(--text-muted)]">
              These pages are written for search, but they should still answer the practical questions a parent asks before sending family photos to a custom product shop.
            </p>
          </div>
          <div className="space-y-4">
            {page.sections.map((section) => (
              <article key={section.heading} className="soft-card p-5 sm:p-6">
                <h2 className="font-display text-2xl font-bold text-[var(--text)]">{section.heading}</h2>
                <p className="mt-2 font-body text-sm leading-7 text-[var(--text-muted)] sm:text-base">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-10 lg:pb-16">
        <div className="brand-ribbon mx-auto max-w-6xl rounded-[2rem] border border-coral/25 p-6 shadow-xl sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <div>
              <div className="badge mb-4 bg-white/55 text-charcoal">
                <HelpCircle size={14} /> FAQ
              </div>
              <h2 className="logo-like-title text-3xl text-charcoal sm:text-4xl">Common questions</h2>
              <p className="mt-3 max-w-md font-body text-sm leading-relaxed text-charcoal/70">
                Clear answers help visitors decide faster and give Google better page context.
              </p>
            </div>
            <div className="space-y-3">
              {page.faqs.map((faq) => (
                <details key={faq.question} className="rounded-2xl bg-white/55 p-4 text-charcoal ring-1 ring-charcoal/10">
                  <summary className="cursor-pointer font-display text-lg font-bold">{faq.question}</summary>
                  <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/70">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14">
        <div className="mx-auto max-w-4xl soft-card p-6 text-center sm:p-8">
          <MapPin className="mx-auto mb-3 text-sage-text" size={28} />
          <h2 className="font-display text-2xl font-bold text-[var(--text)]">Ready to make your memory book?</h2>
          <p className="mx-auto mt-2 max-w-2xl font-body text-sm leading-relaxed text-[var(--text-muted)]">
            Choose a package, send your order details, and continue on WhatsApp for photo submission, preview approval, and delivery confirmation.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/checkout" className="btn-primary">Choose a Package</Link>
            <a
              href="https://wa.me/923462083310?text=Hi%20memorycoloring!%20I%20want%20to%20ask%20about%20a%20custom%20coloring%20book."
              target="_blank"
              rel="noreferrer"
              className="btn-wa"
            >
              <WhatsAppIcon size={18} /> Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
