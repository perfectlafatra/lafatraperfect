import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { routePath, type Locale } from '../../routes/publicRoutes';
import { DownloadCV } from '../common/DownloadCV';
import HeroTurntable from './HeroTurntable';

export function Hero({ locale }: { locale: Locale }) {
  const { t } = useTranslation();
  return (
    <section className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="eyebrow">{t('hero.eyebrow')}</p>
        <p className="hero__name">{t('hero.name')}</p>
        <h1 id="hero-title">{t('hero.title')}</h1>
        <p className="hero__stack">{t('hero.stack')}</p>
        <p className="hero__lead">{t('hero.lead')}</p>
        <div className="button-row hero__actions">
          <Link className="button button--primary" to={routePath('projects', locale)}>
            {t('hero.projects')}
          </Link>
          <Link className="button button--secondary" to={routePath('contact', locale)}>
            {t('hero.contact')}
          </Link>
          <DownloadCV locale={locale} />
        </div>
      </div>
      <div className="hero__visual hero__visual--3d">
        <HeroTurntable locale={locale} />
        <span className="hero__code">{t('hero.stack')}</span>
      </div>
    </section>
  );
}
