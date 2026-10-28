import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import '../i18n/config';
import { ThemeProvider } from '../contexts/ThemeContext';
import { AppRouter } from '../routes/AppRouter';

function renderHome() {
  return render(
    <ThemeProvider>
      <MemoryRouter initialEntries={['/fr']}>
        <AppRouter />
      </MemoryRouter>
    </ThemeProvider>
  );
}

describe('premium public shell contract', () => {
  it('exposes a labelled hero with a direct contact action', () => {
    renderHome();

    expect(screen.getByRole('region', { name: /développeur java.*full-stack/i })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /me contacter/i })).toHaveLength(2);
    expect(screen.getAllByRole('link', { name: /me contacter/i })[0]).toHaveAttribute('href', '/fr/contact');
  });

  it('exposes labelled evidence and case-study regions', () => {
    renderHome();

    expect(screen.getByRole('region', { name: /projets sélectionnés/i })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /compétences techniques/i })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /parcours professionnel/i })).toBeInTheDocument();
  });
});
