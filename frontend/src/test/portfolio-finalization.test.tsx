import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import '../i18n/config';
import { ThemeProvider } from '../contexts/ThemeContext';
import { projects } from '../content/projectIndex';
import { caseStudiesFr } from '../content/caseStudies.fr';
import { caseStudiesEn } from '../content/caseStudies.en';
import { siteConfig } from '../config/site';
import { portraitSequence } from '../config/portraitSequence';
import { AppRouter } from '../routes/AppRouter';

function publicPath(url: string) {
  const relative = url.startsWith(import.meta.env.BASE_URL)
    ? url.slice(import.meta.env.BASE_URL.length)
    : url.replace(/^\/+/, '');
  return resolve('public', relative);
}

function renderPath(path: string) {
  return render(
    <ThemeProvider>
      <MemoryRouter initialEntries={[path]}>
        <AppRouter />
      </MemoryRouter>
    </ThemeProvider>,
  );
}

function sha256(path: string) {
  return createHash('sha256').update(readFileSync(path)).digest('hex').toUpperCase();
}

describe('urgent recruiter portfolio contract', () => {
  it('publishes distinct French and English PDFs for each of the four projects', () => {
    const pdfUrls: string[] = [];
    for (const slug of ['mada-bmp', 'lalana', 'volatech', 'zina-tsara-volo']) {
      const project = projects.find((entry) => entry.slug === slug);
      expect(project?.resources?.pdf.fr).toMatch(/-etude-de-cas\.pdf$/);
      expect(project?.resources?.pdf.en).toMatch(/-case-study-en\.pdf$/);
      expect(existsSync(publicPath(project!.resources!.pdf.fr))).toBe(true);
      expect(existsSync(publicPath(project!.resources!.pdf.en))).toBe(true);
      expect(project?.resources).not.toHaveProperty('pptx');
      pdfUrls.push(project!.resources!.pdf.fr, project!.resources!.pdf.en);
    }
    expect(new Set(pdfUrls).size).toBe(8);
  });

  it('publishes the authoritative bilingual CV and Mada-BMP documents without changing their URLs', () => {
    expect(sha256(publicPath(siteConfig.cvUrl.fr))).toBe('FCECFB420556EFB25CDB97B2A2AD949CFE0237EB2A496876E0D8E06F7C9ED5A7');
    expect(sha256(publicPath(siteConfig.cvUrl.en))).toBe('DC64EE65E3180E5FD91B656E788EBF9E09F4348A42E0EC84EE8424D5A6B3E983');

    const mada = projects.find((entry) => entry.slug === 'mada-bmp')!;
    expect(sha256(publicPath(mada.resources!.pdf.fr))).toBe('6E22F8803CA252F4D4ACC6D36EAE5750B13440DD558DAC889067B8E482033AF0');
    expect(sha256(publicPath(mada.resources!.pdf.en))).toBe('806E1DFC0B530B588F6C99F684C906BFF4D07188B381918F1A5A01EC4D6F3AD8');
  });

  it('uses the requested short header brand while preserving the official identity', () => {
    renderPath('/fr');
    const brand = screen.getByRole('link', { name: 'RANDRIAMANANTENA Fitahiana Lafatra' });
    expect(brand).toHaveTextContent('LF');
    expect(brand).toHaveTextContent('Lafatra Fitahiana');
    expect(siteConfig.name).toBe('RANDRIAMANANTENA Fitahiana Lafatra');
  });

  it('presents Mada-BMP as an ongoing React, Spring Boot and FastAPI target architecture', () => {
    const mada = projects.find((entry) => entry.slug === 'mada-bmp')!;
    const contentFr = caseStudiesFr['mada-bmp']!;
    const contentEn = caseStudiesEn['mada-bmp']!;
    expect(mada.technologies).toEqual(expect.arrayContaining(['React', 'Spring Boot', 'PostgreSQL', 'Python', 'FastAPI']));
    expect(contentFr.architecture).toContain('React → Spring Boot → FastAPI');
    expect(contentEn.architecture).toContain('React → Spring Boot → FastAPI');
    expect(contentFr.features).toMatch(/prévisions de trésorerie.+tendances budgétaires.+anomalies.+priorisation.+synthèses analytiques/i);
    expect(contentEn.features).toMatch(/cash-flow forecasts.+budget trends.+anomalies.+prioritisation.+analytical summaries/i);
    expect(contentFr.publishedScope).toMatch(/en cours|en développement/i);
    expect(contentEn.publishedScope).toMatch(/in progress|in development/i);
    expect(`${contentFr.outcomes} ${contentEn.outcomes}`).not.toMatch(/modèle entraîné|trained model|accuracy|production/i);
  });

  it('exposes the CV-aligned engineering, data and network skill set', () => {
    renderPath('/fr/competences');
    expect(screen.getByText(/Python · FastAPI/i)).toBeInTheDocument();
    expect(screen.getByText(/analyse décisionnelle et prédictive.+science des données.+IA/i)).toBeInTheDocument();
    expect(screen.getByText(/TCP\/UDP.+WebSocket/i)).toBeInTheDocument();
    expect(screen.getByText(/tests.+débogage.+sécurité.+intégration/i)).toBeInTheDocument();
  });

  it('uses an authentic local ZINA cover and evidence from the signed public study', () => {
    const zina = projects.find((entry) => entry.slug === 'zina-tsara-volo');
    expect(zina?.cover.type).toBe('SCREENSHOT_REAL');
    expect(zina?.cover.src).toContain('/media/projects/zina/');
    expect(existsSync(publicPath(zina!.cover.src))).toBe(true);
    expect(zina?.evidence?.length).toBeGreaterThanOrEqual(2);
  });

  it('structures public case studies for fast recruiter reading', () => {
    for (const slug of ['lalana', 'volatech', 'zina-tsara-volo']) {
      const content = caseStudiesFr[slug]!;
      expect(content.objectives.length).toBeGreaterThan(40);
      expect(content.architecture.length).toBeGreaterThan(40);
      expect(content.features.length).toBeGreaterThan(40);
    }
    expect(caseStudiesFr.volatech!.publishedScope).toMatch(/paiement.+simul/i);
    expect(caseStudiesFr['zina-tsara-volo']!.publishedScope).toMatch(/démonstration|ficti/i);
  });

  it('renders safe document actions on a project page', () => {
    renderPath('/fr/projets/lalana');
    const link = screen.getByRole('link', { name: /consulter l’étude de cas pdf/i });
    expect(link).toHaveAttribute('href', expect.stringMatching(/lalana-etude-de-cas\.pdf$/));
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
    expect(screen.queryByRole('link', { name: /powerpoint|télécharger le pdf/i })).not.toBeInTheDocument();
  });

  it('opens the English project PDF from an English case-study page', () => {
    renderPath('/en/projects/lalana');
    const link = screen.getByRole('link', { name: /view technical case study/i });
    expect(link).toHaveAttribute('href', expect.stringMatching(/lalana-case-study-en\.pdf$/));
  });

  it('matches the public contact details from the current CV', () => {
    expect(siteConfig.emailUrl).toBe('mailto:lafatraperfect@gmail.com');
    expect(siteConfig.phonePrimary).toBe('+261 32 93 777 81');
    expect(siteConfig.phoneSecondary).toBe('+261 34 48 109 24');
    expect(siteConfig.phoneSecondaryUrl).toBe('tel:+261344810924');
    expect(siteConfig.whatsAppPhone).toBe('+261 32 60 463 49');
    expect(siteConfig.whatsAppUrl).toBe('https://wa.me/261326046349');
    expect(siteConfig.address).toBe('Lot IAN 64, Marobiby Itaosy, Antananarivo, Madagascar');

    renderPath('/fr/contact');
    expect(screen.getByRole('link', { name: /lafatraperfect@gmail\.com/i })).toHaveAttribute('href', siteConfig.emailUrl);
    expect(screen.getByText(siteConfig.address)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /\+261 32 93 777 81/ })).toHaveAttribute('href', 'tel:+261329377781');
    expect(screen.getByRole('link', { name: /\+261 34 48 109 24/ })).toHaveAttribute('href', 'tel:+261344810924');
    expect(screen.getByRole('link', { name: /whatsapp.*\+261 32 60 463 49/i })).toHaveAttribute('href', siteConfig.whatsAppUrl);
  });

  it('presents the candidate identity with the original portrait rotation and no 3D canvas', () => {
    renderPath('/fr');
    expect(screen.getAllByText(/RANDRIAMANANTENA Fitahiana Lafatra/i).length).toBeGreaterThanOrEqual(2);
    expect(screen.getByRole('link', { name: 'RANDRIAMANANTENA Fitahiana Lafatra' })).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toHaveTextContent('RANDRIAMANANTENA Fitahiana Lafatra');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Développeur Fullstack Junior — Master 1 M2I | Java, Spring Boot, React');
    expect(screen.getByRole('img', { name: /portrait du développeur en rotation/i })).toBeInTheDocument();
    expect(document.querySelector('.hero-turntable')).toBeInTheDocument();
    expect(document.querySelector('canvas')).not.toBeInTheDocument();
  });

  it('serves an optimised portrait sequence while preserving the original sources', () => {
    const uniqueFrames = [...new Set(portraitSequence.frames)];
    expect(uniqueFrames).toHaveLength(5);
    for (const frame of uniqueFrames) {
      expect(frame).toMatch(/\.webp$/);
      expect(existsSync(publicPath(frame))).toBe(true);
    }
    expect(existsSync(resolve('public/media/hero/portraits/R.png'))).toBe(true);
  });
});
