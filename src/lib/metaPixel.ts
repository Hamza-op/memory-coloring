declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackMetaEvent(eventName: string, parameters?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  window.fbq?.('track', eventName, parameters);
}

type MetaOrderItem = {
  id: string;
  name: string;
  priceNum: number;
};

function buildOrderEventParameters(total: number, packages: MetaOrderItem[]) {
  return {
    content_category: 'Order',
    currency: 'PKR',
    value: total,
    num_items: packages.length,
    contents: packages.map((pkg) => ({
      id: pkg.id,
      name: pkg.name,
      quantity: 1,
      item_price: pkg.priceNum
    })),
    page_path: window.location.pathname
  };
}

export function trackWhatsAppOrderLead(total: number, packages: MetaOrderItem[]) {
  trackMetaEvent('Lead', {
    content_name: 'WhatsApp order button',
    ...buildOrderEventParameters(total, packages)
  });
}

export {};
