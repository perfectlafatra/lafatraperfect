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

    expect(screen.getByRole('region', { name: /développeur full-stack/i })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /parlons de votre projet/i })).toHaveLength(2);
    expect(screen.getAllByRole('link', { name: /parlons de votre projet/i })[0]).toHaveAttribute('href', '/fr/contact');
  });

  it('exposes labelled evidence and case-study regions', () => {
    renderHome();

    expect(screen.getByRole('region', { name: /preuves sélectionnées/i })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /études de cas/i })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /journal technique/i })).toBeInTheDocument();
  });
});
