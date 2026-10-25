import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { routePath, type Locale } from '../../routes/publicRoutes';
import { DownloadCV } from '../common/DownloadCV';
import { portraitSequence } from '../../config/portraitSequence';

const Hero3D = lazy(() => import('./Hero3D'));

export function Hero({ locale }: { locale: Locale }) {
  const { t } = useTranslation();
  return (
    <section className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="eyebrow">{t('hero.eyebrow')}</p>
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
        <Suspense fallback={
          <div className="hero__visual-fallback" aria-hidden="true" style={{ width: '100%', height: '100%', minHeight: 280 }}>
            <img src={portraitSequence.fallback} alt="" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center bottom' }} />
          </div>
        }>
          <Hero3D locale={locale} />
        </Suspense>
        <span className="hero__code">React · Java · SQL</span>
      </div>
    </section>
  );
}
