import React from 'react';
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/whatsapp';
import WhatsAppIcon from './WhatsAppIcon';

type WhatsAppLinkProps = {
  message?: string;
  className?: string;
  iconSize?: number;
  iconClassName?: string;
  children: React.ReactNode;
};

const WhatsAppLink = ({
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
    className={className}
  >
    <WhatsAppIcon size={iconSize} className={iconClassName} />
    {children}
  </a>
);

export default WhatsAppLink;
