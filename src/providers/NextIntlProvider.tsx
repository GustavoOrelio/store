import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';

interface Props {
  locale: string;
  messages: any;
  children: ReactNode;
}

export function NextIntlProvider({ locale, messages, children }: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
} 