import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const dist = join(root, 'dist');
const source = join(dist, 'index.html');

// 1. Definition of all SEO dynamic page configurations
const seoPagesData = [
  {
    slug: '/custom-coloring-book-from-photos',
    title: 'Custom Coloring Book from Photos | MemoryColoring',
    h1: 'Custom Coloring Book from Photos',
    description: 'Turn family photos into a custom coloring book with artist-crafted pages, preview approval, PDF options, and nationwide Pakistan delivery.',
    faqs: [
      { question: 'Can any photo become a coloring page?', answer: 'Most clear photos can work. Bright, sharp images with visible faces and simple backgrounds usually produce the best coloring pages.' },
      { question: 'How many photos do I need?', answer: 'The Mini Memory package works best with 12-15 photos, Family Favorite with around 24 photos, and Premium Gift with up to 36 photos.' },
      { question: 'Will I see the artwork before printing?', answer: 'Yes. We share a preview before final production so you can review the style and details.' },
    ]
  },
  {
    slug: '/personalized-coloring-book-for-kids',
    title: 'Personalized Coloring Book for Kids | MemoryColoring',
    h1: 'Personalized Coloring Book for Kids',
    description: 'Create a personalized coloring book for kids using real family photos, familiar faces, pets, birthdays, and everyday memories.',
    faqs: [
      { question: 'What age is this best for?', answer: 'Most children from around 3 years and up can enjoy it, though younger children may prefer simpler photos with fewer people.' },
      { question: 'Can siblings be included in one book?', answer: 'Yes. You can include siblings, parents, grandparents, pets, and family moments in the same book.' },
      { question: 'Can I order it as a gift?', answer: 'Yes. The Premium Gift package is designed for a more complete keepsake presentation.' },
    ]
  },
  {
    slug: '/photo-to-coloring-page',
    title: 'Photo to Coloring Page Service | MemoryColoring',
    h1: 'Photo to Coloring Page Service',
    description: 'Convert a photo to a coloring page preview, then order a complete personalized coloring book with clean hand-drawn-style artwork.',
    faqs: [
      { question: 'Can I try one photo first?', answer: 'Yes. The Create page lets you preview the basic photo-to-coloring-page idea before starting an order.' },
      { question: 'Does the final book use the exact automatic preview?', answer: 'The preview is a sample experience. Final order artwork is prepared for a cleaner, book-ready result.' },
      { question: 'Can I print the PDF myself?', answer: 'Yes, PDF delivery is available with packages so you can keep a digital copy and print pages when needed.' },
    ]
  },
  {
    slug: '/custom-coloring-book-pakistan',
    title: 'Custom Coloring Book Pakistan | MemoryColoring',
    h1: 'Custom Coloring Book in Pakistan',
    description: 'Order custom coloring books in Pakistan from family photos. WhatsApp ordering, preview approval, PDF options, and nationwide delivery.',
    faqs: [
      { question: 'Do you deliver outside Multan?', answer: 'Yes. We deliver nationwide across Pakistan through courier services.' },
      { question: 'How long does delivery take?', answer: 'After production, major city delivery usually takes a few business days. Remote areas may take longer depending on courier service.' },
      { question: 'Can I order through WhatsApp?', answer: 'Yes. The checkout flow opens WhatsApp with your selected package and delivery details.' },
    ]
  },
  {
    slug: '/birthday-coloring-book-gift',
    title: 'Birthday Coloring Book Gift from Photos | MemoryColoring',
    h1: 'Birthday Coloring Book Gift from Photos',
    description: 'Create a birthday coloring book gift from party photos, family memories, pets, and milestones. Personalized, creative, and gift-ready.',
    faqs: [
      { question: 'Can I order before the birthday and use older photos?', answer: 'Yes. Many birthday books use photos from the past year, not only photos from the party itself.' },
      { question: 'Which package is best for birthdays?', answer: 'Family Favorite is the most balanced birthday option. Premium Gift is better when you want more pages and a fuller keepsake.' },
      { question: 'Can pets or grandparents be included?', answer: 'Yes. Pets, grandparents, cousins, siblings, and friends can all be part of the book if the photos are clear.' },
    ]
  }
];

// 2. Definition of core static pages
const staticPagesData = [
  {
    slug: '/create',
    title: 'Create Your Personalized Coloring Book | MemoryColoring',
    h1: 'Create Your Personalized Coloring Book',
    description: 'Upload your favorite family photo and preview a custom hand-drawn coloring page in seconds. Give it a try for free!',
  },
  {
    slug: '/checkout',
    title: 'Order Your Custom Memory Book | MemoryColoring',
    h1: 'Order Your Custom Memory Book',
    description: 'Choose a package, upload your photos, and place your order. Free PDF copies and premium hardcovers available.',
  },
  {
    slug: '/policies',
    title: 'Privacy, Refunds & Delivery Terms | MemoryColoring',
    h1: 'Privacy, Refunds and Delivery Terms',
    description: 'Read the terms, refund policies, privacy guidelines, and nationwide shipping details for MemoryColoring.',
  }
];

// Combine all routes
const routes = [...staticPagesData, ...seoPagesData];

if (!existsSync(source)) {
  throw new Error('dist/index.html was not found. Run vite build before prerendering routes.');
}

const originalHtml = readFileSync(source, 'utf-8');

console.log(`🚀 Starting pre-rendering metadata injection for ${routes.length} routes...`);

for (const route of routes) {
  const targetDir = join(dist, route.slug.replace(/^\//, ''));
  mkdirSync(targetDir, { recursive: true });

  const canonicalUrl = `https://memorycoloring.online${route.slug}`;
  let html = originalHtml;

  // 1. Replace Title
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);

  // 2. Replace Meta Description
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/,
    `<meta name="description" content="${route.description}" />`
  );

  // 3. Replace Canonical Link
  html = html.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // 4. Replace Open Graph Tags
  html = html.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/,
    `<meta property="og:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/,
    `<meta property="og:description" content="${route.description}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );

  // 5. Replace Twitter Tags
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/,
    `<meta name="twitter:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/,
    `<meta name="twitter:description" content="${route.description}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:url"\s+content=".*?"\s*\/?>/,
    `<meta name="twitter:url" content="${canonicalUrl}" />`
  );

  // 6. Replace/Inject Structured JSON-LD Schema
  let schemaData;
  if (route.faqs) {
    // FAQPage + WebPage for SEO landing pages
    schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `${canonicalUrl}#webpage`,
          "url": canonicalUrl,
          "name": route.title,
          "description": route.description,
          "isPartOf": { "@id": "https://memorycoloring.online/#website" },
          "about": {
            "@type": "Product",
            "name": "Personalized Custom Memory Coloring Book"
          }
        },
        {
          "@type": "FAQPage",
          "@id": `${canonicalUrl}#faq`,
          "mainEntity": route.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }
      ]
    };
  } else {
    // WebPage graph for static pages
    schemaData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      "url": canonicalUrl,
      "name": route.title,
      "description": route.description,
      "isPartOf": { "@id": "https://memorycoloring.online/#website" }
    };
  }

  // Replace default index.html schema block with the page-specific one
  html = html.replace(
    /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">${JSON.stringify(schemaData, null, 2)}</script>`
  );

  html = html.replace(
    /<main data-seo-fallback>[\s\S]*?<\/main>/,
    `<main data-seo-fallback>
      <h1>${route.h1}</h1>
      <p>${route.description}</p>
    </main>`
  );

  writeFileSync(join(targetDir, 'index.html'), html, 'utf-8');
}

console.log('✅ Custom SEO metadata and JSON-LD structured schemas successfully injected into all routes!');
