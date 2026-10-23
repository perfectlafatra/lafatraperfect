import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FeaturedCases } from '../components/home/FeaturedCases';
import { Hero } from '../components/home/Hero';
import { ProofShowcase } from '../components/home/ProofShowcase';
import { ProjectCard } from '../components/projects/ProjectCard';
import { SkillsGrid } from '../components/skills/SkillsGrid';
import { MetaTags } from '../components/seo/MetaTags';
import { JournalCard } from './JournalPage';
import { getFeaturedPosts } from '../content/journal';
import { projects } from '../content/projectIndex';
import { routePath, type Locale } from '../routes/publicRoutes';

export function HomePage({ locale }: { locale: Locale }) {
  const { t } = useTranslation();
  const featuredProject = projects.find((project) => project.slug === 'mada-bmp') ?? projects[0];
  return <><MetaTags title={t('hero.title')} description={t('hero.lead')} locale={locale}/><Hero locale={locale}/><ProofShowcase locale={locale}/><section className="section-shell section-shell--tint" aria-labelledby="skills-title"><div className="section-heading"><p className="eyebrow">STACK / EVIDENCE</p><h2 id="skills-title">{locale === 'fr' ? 'Compétences structurées' : 'Structured skills'}</h2></div><SkillsGrid locale={locale}/></section><FeaturedCases locale={locale}/><section className="section-shell" aria-labelledby="journal-title"><div className="section-heading"><p className="eyebrow">LOG / NOTES</p><h2 id="journal-title">{t('home.journalTitle')}</h2><p>{t('home.journalLead')}</p></div><div className="journal-grid">{getFeaturedPosts(3).map((post) => <JournalCard key={post.slug} post={post} locale={locale}/>)}</div><p className="section-link"><Link className="text-link" to={routePath('journal', locale)}>{t('nav.journal')} →</Link></p></section>{featuredProject && <section className="section-shell feature-split" aria-labelledby="featured-project-title"><div><p className="eyebrow">{locale === 'fr' ? 'PROJET À LA UNE' : 'FEATURED PROJECT'}</p><h2 id="featured-project-title">{featuredProject.title[locale]}</h2><p>{featuredProject.summary[locale]}</p><Link className="text-link" to={`${routePath('projects', locale)}/${featuredProject.slug}`}>{featuredProject.slug === 'mada-bmp' ? t('home.madaLink') : t('common.learnMore')}</Link></div><ProjectCard project={featuredProject} locale={locale}/></section>}<section className="section-shell method-banner" aria-labelledby="method-title"><div><p className="eyebrow">PROCESS</p><h2 id="method-title">{t('home.methodTitle')}</h2><p>{t('home.methodLead')}</p></div><div className="button-row method-banner__actions"><Link className="button button--secondary" to={routePath('method', locale)}>{t('common.learnMore')}</Link><Link className="button button--primary" to={routePath('contact', locale)}>{t('hero.contact')}</Link></div></section></>;
}

