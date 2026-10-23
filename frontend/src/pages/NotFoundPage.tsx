import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { Locale } from '../routes/publicRoutes';

export function NotFoundPage({ locale }: { locale: Locale }) {
  const { t } = useTranslation();
  return <section className="page-shell not-found"><span className="not-found__code">404</span><h1>{t('notFound.title')}</h1><p>{t('notFound.lead')}</p><Link className="button button--primary" to={`/${locale}`}>{t('common.backHome')}</Link></section>;
}

