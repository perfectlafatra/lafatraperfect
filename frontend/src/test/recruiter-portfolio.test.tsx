import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import '../i18n/config';
import { ThemeProvider } from '../contexts/ThemeContext';
import { projects } from '../content/projectIndex';
import { AppRouter } from '../routes/AppRouter';
import { publicRoutes } from '../routes/publicRoutes';

function renderPath(path: string) {
  return render(
    <ThemeProvider>
      <MemoryRouter initialEntries={[path]}>
        <AppRouter />
      </MemoryRouter>
    </ThemeProvider>,
  );
}

describe('recruiter-first portfolio contract', () => {
  it('keeps the public navigation focused on the candidate', () => {
    renderPath('/fr');

    expect(screen.getByRole('heading', { level: 1, name: /développeur java.*full-stack/i })).toBeInTheDocument();
    expect(screen.getAllByText('Java · Spring Boot · React · PostgreSQL').length).toBeGreaterThan(0);
    expect(screen.getByRole('navigation', { name: /navigation principale/i })).toHaveTextContent('Projets');
    expect(screen.getByRole('navigation', { name: /navigation principale/i })).not.toHaveTextContent(/Journal|Méthode/i);
    expect(screen.queryByRole('heading', { name: /journal technique/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /une méthode/i })).not.toBeInTheDocument();
    expect(screen.getByRole('region', { name: /projets sélectionnés/i })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /parcours professionnel/i })).toBeInTheDocument();
  });

  it('presents flagship projects first', () => {
    expect(projects.slice(0, 2).map((project) => project.slug)).toEqual(['mada-bmp', 'zina-tsara-volo']);
  });

  it('uses recruiter-readable case-study labels instead of STAR lessons', () => {
    renderPath('/fr/projets/zina-tsara-volo');

    expect(screen.getByRole('heading', { name: 'Contexte du projet' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Mon rôle' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Travail réalisé' })).toBeInTheDocument();
    expect(screen.queryByText(/S — Situation|T — Tâches|Enseignements/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Illustration conceptuelle — pas une capture live/i)).not.toBeInTheDocument();
  });

  it('does not publish journal or method routes', () => {
    expect(publicRoutes.map((route) => route.key)).not.toEqual(expect.arrayContaining(['journal', 'method']));

    const generator = readFileSync(resolve(process.cwd(), 'tools/generate-static-routes.mjs'), 'utf8');
    const sitemap = readFileSync(resolve(process.cwd(), 'tools/generate-sitemap.mjs'), 'utf8');
    expect(generator).not.toMatch(/fr\/journal|fr\/methode/);
    expect(sitemap).not.toMatch(/journalSlugs|fr\/journal|fr\/methode/);
  });
});
