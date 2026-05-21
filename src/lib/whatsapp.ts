export const WHATSAPP_PHONE = '923462083310';

export const WHATSAPP_MESSAGES = {
  general: 'Hi memorycoloring! I would like to know more about your custom coloring books.',
  policies: 'Hi memorycoloring! I have a question about your policies.',
  seo: 'Hi memorycoloring! I want to ask about a custom coloring book.'
} as const;

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
