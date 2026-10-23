import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { routePath, type Locale } from '../../routes/publicRoutes';

export const PublicFooter = forwardRef<HTMLElement, { locale: Locale }>(function PublicFooter(
  { locale },
  ref
) {
  const { t } = useTranslation();
  return <footer ref={ref} className="site-footer"><div><strong>LAFATRAPERFECT</strong><p>{t('footer.statement')}</p></div><nav aria-label={t('nav.legalNavigation')}><Link to={routePath('legal', locale)}>{t('footer.legal')}</Link><Link to={routePath('privacy', locale)}>{t('footer.privacy')}</Link></nav><small>© {new Date().getFullYear()} LAFATRAPERFECT</small></footer>;
});

