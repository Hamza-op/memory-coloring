import React from 'react';
import { trackWhatsAppLead } from '@/lib/metaPixel';
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/whatsapp';
import WhatsAppIcon from './WhatsAppIcon';

type WhatsAppLinkProps = {
  source: string;
  message?: string;
  className?: string;
  iconSize?: number;
  iconClassName?: string;
  children: React.ReactNode;
};

const WhatsAppLink = ({
  source,
  message = WHATSAPP_MESSAGES.general,
  className,
  iconSize = 18,
  iconClassName,
  children
}: WhatsAppLinkProps) => (
  <a
    href={buildWhatsAppUrl(message)}
    target="_blank"
    rel="noreferrer"
    onClick={() => trackWhatsAppLead(source)}
    className={className}
  >
    <WhatsAppIcon size={iconSize} className={iconClassName} />
    {children}
  </a>
);

export default WhatsAppLink;
