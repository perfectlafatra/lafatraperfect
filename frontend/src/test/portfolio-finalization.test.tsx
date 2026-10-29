import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import '../i18n/config';
import { ThemeProvider } from '../contexts/ThemeContext';
import { projects } from '../content/projectIndex';
import { caseStudiesFr } from '../content/caseStudies.fr';
import { siteConfig } from '../config/site';
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

describe('urgent recruiter portfolio contract', () => {
  it('publishes one distinct final PDF for each of the four projects', () => {
    const pdfUrls: string[] = [];
    for (const slug of ['mada-bmp', 'lalana', 'volatech', 'zina-tsara-volo']) {
      const project = projects.find((entry) => entry.slug === slug);
      expect(project?.resources?.pdf).toMatch(/-etude-de-cas\.pdf$/);
      expect(existsSync(publicPath(project!.resources!.pdf))).toBe(true);
      expect(project?.resources).not.toHaveProperty('pptx');
      pdfUrls.push(project!.resources!.pdf);
    }
    expect(new Set(pdfUrls).size).toBe(4);
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
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
    expect(screen.queryByRole('link', { name: /powerpoint|télécharger le pdf/i })).not.toBeInTheDocument();
  });

  it('matches the public contact details from the current CV', () => {
    expect(siteConfig.emailUrl).toBe('mailto:lafatraperfect@gmail.com');
    expect(siteConfig.phonePrimary).toBe('+261 32 93 777 81');
    expect(siteConfig.phoneSecondary).toBe('+261 32 60 463 49');
    expect(siteConfig.whatsAppUrl).toBe('https://wa.me/261326046349');
    expect(siteConfig.address).toBe('Lot IAN 64, Marobiby Itaosy, Antananarivo, Madagascar');

    renderPath('/fr/contact');
    expect(screen.getByRole('link', { name: /lafatraperfect@gmail\.com/i })).toHaveAttribute('href', siteConfig.emailUrl);
    expect(screen.getByText(siteConfig.address)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /\+261 32 93 777 81/ })).toHaveAttribute('href', 'tel:+261329377781');
    expect(screen.getByRole('link', { name: /whatsapp.*\+261 32 60 463 49/i })).toHaveAttribute('href', siteConfig.whatsAppUrl);
  });

  it('presents the candidate identity without loading a 3D hero canvas', () => {
    renderPath('/fr');
    expect(screen.getAllByText(/RANDRIAMANANTENA Fitahiana Lafatra/i).length).toBeGreaterThanOrEqual(2);
    expect(screen.getByRole('link', { name: 'RANDRIAMANANTENA Fitahiana Lafatra' })).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toHaveTextContent('RANDRIAMANANTENA Fitahiana Lafatra');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/développeur java|full-stack/i);
    expect(document.querySelector('canvas')).not.toBeInTheDocument();
  });
});
