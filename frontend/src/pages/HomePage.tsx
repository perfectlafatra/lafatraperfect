import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DownloadCV } from '../components/common/DownloadCV';
import { Timeline } from '../components/experience/Timeline';
import { FeaturedCases } from '../components/home/FeaturedCases';
import { Hero } from '../components/home/Hero';
import { SkillsGrid } from '../components/skills/SkillsGrid';
import { MetaTags } from '../components/seo/MetaTags';
import { routePath, type Locale } from '../routes/publicRoutes';

export function HomePage({ locale }: { locale: Locale }) {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags title={t('hero.title')} description={t('hero.lead')} locale={locale} />
      <Hero locale={locale} />
      <FeaturedCases locale={locale} />
      <section className="section-shell section-shell--tint" aria-labelledby="skills-title">
        <div className="section-heading">
          <p className="eyebrow">STACK</p>
          <h2 id="skills-title">{locale === 'fr' ? 'Compétences techniques' : 'Technical skills'}</h2>
          <p>{locale === 'fr' ? 'Les technologies que j’utilise dans mes projets web, regroupées par responsabilité.' : 'The technologies I use in my web projects, grouped by responsibility.'}</p>
        </div>
        <SkillsGrid locale={locale} />
      </section>
      <section className="section-shell" aria-labelledby="journey-title">
        <div className="section-heading">
          <p className="eyebrow">EXPÉRIENCE</p>
          <h2 id="journey-title">{t('home.journeyTitle')}</h2>
          <p>{t('home.journeyLead')}</p>
        </div>
        <Timeline locale={locale} />
        <p className="section-link"><Link className="text-link" to={routePath('journey', locale)}>{locale === 'fr' ? 'Voir mon parcours complet' : 'View my full journey'} →</Link></p>
      </section>
      <section className="section-shell candidate-cta" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">CONTACT</p>
          <h2 id="contact-title">{t('home.contactTitle')}</h2>
          <p>{t('home.contactLead')}</p>
        </div>
        <div className="button-row candidate-cta__actions">
          <Link className="button button--primary" to={routePath('contact', locale)}>{t('hero.contact')}</Link>
          <DownloadCV locale={locale} />
        </div>
      </section>
    </>
  );
}
