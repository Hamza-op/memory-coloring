declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackMetaEvent(eventName: string, parameters?: Record<string, unknown>) {
  window.fbq?.('track', eventName, parameters);
}

type MetaOrderItem = {
  id: string;
  name: string;
  priceNum: number;
};

export function trackWhatsAppChat(source: string) {
  trackMetaEvent('Contact', {
    content_name: 'WhatsApp chat click',
    content_category: 'WhatsApp',
    source
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
