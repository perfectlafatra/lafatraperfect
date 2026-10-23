import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { Locale } from '../../routes/publicRoutes';
import { PublicFooter } from './PublicFooter';
import { PublicHeader } from './PublicHeader';

export function SiteLayout({ locale }: { locale: Locale }) {
  const { t } = useTranslation();
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    /* Footer Reveal : la hauteur du footer est exposée en variable CSS
       pour réserver exactement l'espace de révélation sous le contenu. */
    const footer = footerRef.current;
    if (!footer || typeof ResizeObserver === 'undefined') return undefined;
    const observer = new ResizeObserver(() => {
      document.documentElement.style.setProperty('--footer-h', `${footer.offsetHeight}px`);
    });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return <><a className="skip-link" href="#main-content">{t('skip')}</a><PublicHeader locale={locale}/><main id="main-content" className="site-main"><Outlet/></main><PublicFooter ref={footerRef} locale={locale}/></>;
}

