import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import '../i18n/config';
import { ThemeProvider } from '../contexts/ThemeContext';
import { projects } from '../content/projectIndex';
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

function portfolioAsset(path: string) {
  return `${import.meta.env.BASE_URL}${path}`;
}

describe('Lalana recruiter case study', () => {
  it('publishes the verified Java project identity and local evidence assets', () => {
    const lalana = projects.find((project) => project.slug === 'lalana');

    expect(lalana).toMatchObject({
      title: {
        fr: 'Lalana — Nosy Be Travel Agency',
        en: 'Lalana — Nosy Be Travel Agency'
      },
      kind: {
        fr: 'Projet académique Java',
        en: 'Academic Java project'
      },
      technologies: ['Java 17', 'Spring Boot 3.4', 'Thymeleaf', 'Spring Data JPA', 'PostgreSQL'],
      proofStatus: 'documented',
      cover: {
        src: portfolioAsset('media/projects/lalana/01-accueil-desktop.png'),
        type: 'SCREENSHOT_REAL'
      }
    });

    const evidence = (lalana as typeof lalana & {
      evidence?: Array<{ src: string; width: number; height: number; type: string }>;
    })?.evidence;

    expect(evidence).toHaveLength(2);
    expect(evidence).toEqual(expect.arrayContaining([
      expect.objectContaining({
        src: portfolioAsset('media/projects/lalana/04-connexion.png'),
        width: 1440,
        height: 920,
        type: 'SCREENSHOT_REAL'
      }),
      expect.objectContaining({
        src: portfolioAsset('media/projects/lalana/apercu-interfaces.jpg'),
        width: 1320,
        height: 1760,
        type: 'SCREENSHOT_REAL'
      })
    ]));
  });

  it('tells the documented French project story without claiming a live application', () => {
    renderPath('/fr/projets/lalana');

    expect(screen.getByRole('heading', { level: 1, name: 'Lalana — Nosy Be Travel Agency' })).toBeInTheDocument();
    expect(screen.getByText(/application web de réservation touristique/i)).toBeInTheDocument();
    expect(screen.getByText(/contrôleurs Spring MVC, services métier, repositories Spring Data JPA/i)).toBeInTheDocument();
    expect(screen.getByText(/Spring Security.*BCrypt/i)).toBeInTheDocument();
    expect(screen.getByText(/sept états d’interface distincts/i)).toBeInTheDocument();
    expect(screen.getByText(/code source audité.*aucune démonstration publique/i)).toBeInTheDocument();
    expect(screen.queryByText(/application en production|tests e2e réussis/i)).not.toBeInTheDocument();
  });

  it('provides the same evidence-aware story in English', () => {
    renderPath('/en/projects/lalana');

    expect(screen.getByRole('heading', { level: 1, name: 'Lalana — Nosy Be Travel Agency' })).toBeInTheDocument();
    expect(screen.getByText(/travel booking web application/i)).toBeInTheDocument();
    expect(screen.getByText(/Spring MVC controllers, business services, Spring Data JPA repositories/i)).toBeInTheDocument();
    expect(screen.getByText(/Spring Security.*BCrypt/i)).toBeInTheDocument();
    expect(screen.getByText(/seven distinct interface states/i)).toBeInTheDocument();
    expect(screen.getByText(/source code review.*no public demo/i)).toBeInTheDocument();
    expect(screen.queryByText(/production application|passing e2e tests/i)).not.toBeInTheDocument();
  });

  it('renders the two complementary Lalana interfaces as an accessible French evidence region', () => {
    renderPath('/fr/projets/lalana');

    const region = screen.getByRole('region', { name: 'Interfaces documentées' });
    expect(region).toContainElement(screen.getByRole('img', { name: /écran de connexion Lalana/i }));
    expect(region).toContainElement(screen.getByRole('img', { name: /planche des interfaces publiques/i }));
    expect(screen.getByText(/parcours d’authentification/i)).toBeInTheDocument();
    expect(screen.getByText(/étendue des interfaces documentées/i)).toBeInTheDocument();
  });

  it('localises the evidence region in English', () => {
    renderPath('/en/projects/lalana');

    const region = screen.getByRole('region', { name: 'Documented interfaces' });
    expect(region).toContainElement(screen.getByRole('img', { name: /Lalana sign-in screen/i }));
    expect(region).toContainElement(screen.getByRole('img', { name: /overview board of Lalana/i }));
  });

  it('does not add a visual evidence gallery when a project has no authorised screenshots', () => {
    renderPath('/fr/projets/react-localstorage');

    expect(screen.queryByRole('region', { name: /interfaces documentées/i })).not.toBeInTheDocument();
  });
});
