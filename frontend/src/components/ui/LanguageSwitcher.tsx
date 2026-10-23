import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { localizePath, type Locale } from '../../routes/publicRoutes';

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const location = useLocation();
  const { t } = useTranslation();
  const target: Locale = locale === 'fr' ? 'en' : 'fr';
  return (
    <Link className="icon-button" to={localizePath(location.pathname, target)} aria-label={t('common.language')}>
      {target.toUpperCase()}
    </Link>
  );
}

