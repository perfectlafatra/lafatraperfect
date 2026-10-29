import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { routePath, type Locale } from '../../routes/publicRoutes';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useScrolled } from '../../hooks/useScrolled';
import { siteConfig } from '../../config/site';

const navKeys = ['home', 'projects', 'journey', 'skills', 'about', 'contact'] as const;

export function PublicHeader({ locale }: { locale: Locale }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(24);
  return <header className={scrolled ? 'site-header site-header--scrolled' : 'site-header'}><div className="site-header__inner"><Link className="brand" to={routePath('home', locale)} aria-label={siteConfig.name}><span>LF</span><strong>Fitahiana Lafatra</strong></Link><button className="menu-button" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen((value) => !value)}>{open ? t('nav.close') : t('nav.menu')}</button><nav id="primary-navigation" className={open ? 'primary-nav primary-nav--open' : 'primary-nav'} aria-label={t('nav.primaryNavigation')}>{navKeys.map((key) => <NavLink key={key} to={routePath(key, locale)} onClick={() => setOpen(false)}>{t(`nav.${key}`)}</NavLink>)}</nav><div className="header-actions"><LanguageSwitcher locale={locale}/><ThemeToggle/></div></div></header>;
}

