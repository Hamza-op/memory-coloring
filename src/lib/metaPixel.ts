declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackMetaEvent(eventName: string, parameters?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  window.fbq?.('track', eventName, parameters);
}

export function trackPageView(path: string) {
  trackMetaEvent('PageView', {
    page_path: path,
    page_title: document.title
  });
}

type MetaOrderItem = {
  id: string;
  name: string;
  priceNum: number;
};

export function trackWhatsAppLead(source: string) {
  trackMetaEvent('Contact', {
    content_name: 'WhatsApp click',
    content_category: 'WhatsApp',
    source,
    page_path: window.location.pathname
  });
}

export function trackWhatsAppOrderSubmit(total: number, packages: MetaOrderItem[]) {
  trackMetaEvent('Lead', {
    content_name: 'WhatsApp order submit',
    content_category: 'Order',
    currency: 'PKR',
    value: total,
    num_items: packages.length,
    contents: packages.map((pkg) => ({
      id: pkg.id,
      name: pkg.name,
      quantity: 1,
      item_price: pkg.priceNum
    }))
  });
}

export {};
