import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import '../i18n/config';
import { ThemeProvider } from '../contexts/ThemeContext';
import { projects } from '../content/projectIndex';
import { caseStudiesFr } from '../content/caseStudies.fr';
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
  it('publishes real signed resources for Lalana, VolaTech and ZINA only', () => {
    for (const slug of ['lalana', 'volatech', 'zina-tsara-volo']) {
      const project = projects.find((entry) => entry.slug === slug);
      expect(project?.resources?.pdf).toMatch(/FINAL_SIGNEE\.pdf$/);
      expect(project?.resources?.pptx).toMatch(/FINAL_SIGNEE\.pptx$/);
      expect(existsSync(publicPath(project!.resources!.pdf))).toBe(true);
      expect(existsSync(publicPath(project!.resources!.pptx))).toBe(true);
    }

    expect(projects.find((entry) => entry.slug === 'mada-bmp')?.resources).toBeUndefined();
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
    expect(screen.getByRole('link', { name: /consulter le pdf/i })).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link', { name: /consulter le pdf/i })).toHaveAttribute('rel', expect.stringContaining('noopener'));
    expect(screen.getByRole('link', { name: /télécharger le pdf/i })).toHaveAttribute('download');
    expect(screen.getByRole('link', { name: /télécharger le powerpoint/i })).toHaveAttribute('download');
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
