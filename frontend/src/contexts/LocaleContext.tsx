import { createContext, type ReactNode, useContext } from 'react';
import type { Locale } from '../routes/publicRoutes';

const LocaleContext = createContext<Locale>('fr');

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
  return useContext(LocaleContext);
}

