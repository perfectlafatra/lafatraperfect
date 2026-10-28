import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { routePath, type Locale } from '../../routes/publicRoutes';
import { DownloadCV } from '../common/DownloadCV';
import { portraitSequence } from '../../config/portraitSequence';

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
      <div className="hero__visual hero__visual--static" aria-label={locale === 'fr' ? 'Portrait professionnel' : 'Professional portrait'}>
        <img src={portraitSequence.fallback} alt="" aria-hidden="true" />
        <span className="hero__code">Java · Spring Boot · React · PostgreSQL</span>
      </div>
    </section>
  );
}
