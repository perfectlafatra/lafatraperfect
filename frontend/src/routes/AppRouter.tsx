import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import i18n from '../i18n/config';
import { LocaleProvider } from '../contexts/LocaleContext';
import { SiteLayout } from '../components/layout/SiteLayout';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';
import { HomePage } from '../pages/HomePage';
import { JourneyPage } from '../pages/JourneyPage';
import { LegalPage } from '../pages/LegalPage';
import { MadaBMPPage } from '../pages/MadaBMPPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { PrivacyPage } from '../pages/PrivacyPage';
import { ProjectDetailPage } from '../pages/ProjectDetailPage';
import { ProjectsPage } from '../pages/ProjectsPage';
import { SkillsPage } from '../pages/SkillsPage';
import { localeFromPath, type Locale } from './publicRoutes';

function LocalizedLayout({ locale }: { locale: Locale }) {
  const location = useLocation();
  useEffect(() => {
    void i18n.changeLanguage(locale);
    document.documentElement.lang = locale;
  }, [locale, location.pathname]);
  return <LocaleProvider locale={locale}><SiteLayout locale={locale}/></LocaleProvider>;
}

function localeRoutes(locale: Locale) {
  const prefix = locale === 'fr' ? 'fr' : 'en';
  const names = locale === 'fr'
    ? { about: 'a-propos', journey: 'parcours', skills: 'competences', projects: 'projets', legal: 'mentions-legales', privacy: 'confidentialite' }
    : { about: 'about', journey: 'journey', skills: 'skills', projects: 'projects', legal: 'legal', privacy: 'privacy' };
  return <Route path={prefix} element={<LocalizedLayout locale={locale}/>}><Route index element={<HomePage locale={locale}/>}/><Route path={names.about} element={<AboutPage locale={locale}/>}/><Route path={names.journey} element={<JourneyPage locale={locale}/>}/><Route path={names.skills} element={<SkillsPage locale={locale}/>}/><Route path={names.projects} element={<ProjectsPage locale={locale}/>}/><Route path={`${names.projects}/mada-bmp`} element={<MadaBMPPage locale={locale}/>}/><Route path={`${names.projects}/:slug`} element={<ProjectDetailPage locale={locale}/>}/><Route path="contact" element={<ContactPage locale={locale}/>}/><Route path={names.legal} element={<LegalPage locale={locale}/>}/><Route path={names.privacy} element={<PrivacyPage locale={locale}/>}/><Route path="*" element={<NotFoundPage locale={locale}/>}/></Route>;
}

export function AppRouter() {
  const location = useLocation();
  const locale = localeFromPath(location.pathname);
  return <Routes><Route path="/" element={<Navigate to="/fr" replace/>}/>{localeRoutes('fr')}{localeRoutes('en')}<Route path="*" element={<NotFoundPage locale={locale}/>}/></Routes>;
}

