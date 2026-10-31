import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import '../i18n/config';
import { ThemeProvider } from '../contexts/ThemeContext';
import { AppRouter } from '../routes/AppRouter';

function renderPath(path: string) {
  return render(
    <ThemeProvider>
      <MemoryRouter initialEntries={[path]}>
        <AppRouter />
      </MemoryRouter>
    </ThemeProvider>
  );
}

describe('public application', () => {
  it('renders a complete French recruiter journey without an API', () => {
    renderPath('/fr');

    expect(screen.getByRole('heading', { level: 1, name: /développeur fullstack junior.*java.*spring boot.*react/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /projets sélectionnés/i })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /lire l'étude de cas/i })).toHaveLength(3);
    expect(screen.getAllByRole('link', { name: /découvrir mada-bmp/i })).toHaveLength(1);
    expect(screen.getAllByRole('link', { name: /télécharger le cv/i }).every((link) => /lafatraramanantena-cv\.pdf$/.test(link.getAttribute('href') ?? ''))).toBe(true);
  });

  it('renders the English home with an English document language', () => {
    renderPath('/en');

    expect(screen.getByRole('heading', { level: 1, name: /junior full-stack developer.*java.*spring boot.*react/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /skip to content/i })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: /legal navigation/i })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /download cv/i }).every((link) => /randriamanantena-fitahiana-lafatra-resume-en\.pdf$/.test(link.getAttribute('href') ?? ''))).toBe(true);
    expect(document.documentElement.lang).toBe('en');
  });

  it('renders a localized not-found state', () => {
    renderPath('/fr/inconnue');

    expect(screen.getByRole('heading', { name: /page introuvable/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /retour à l'accueil/i })).toHaveAttribute('href', '/fr');
  });
});

