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

describe('VolaTech Java EE case study', () => {
  it('publishes an accurate project identity and three local evidence assets', () => {
    const volatech = projects.find((project) => project.slug === 'volatech');

    expect(volatech).toMatchObject({
      title: {
        fr: 'VolaTech — vente et retrait de produits',
        en: 'VolaTech — product sales and pickup'
      },
      kind: { fr: 'Projet académique Jakarta EE', en: 'Academic Jakarta EE project' },
      technologies: ['Java 17', 'Jakarta EE', 'JSP / Servlets', 'JDBC', 'PostgreSQL'],
      proofStatus: 'documented',
      demoVerified: false,
      demoUrl: null,
      cover: {
        src: portfolioAsset('media/projects/volatech/01-boutique-panier.png'),
        type: 'SCREENSHOT_REAL'
      }
    });

    expect(volatech?.evidence).toEqual([
      expect.objectContaining({
        src: portfolioAsset('media/projects/volatech/02-retrait-qr.png'),
        width: 1902,
        height: 915,
        type: 'SCREENSHOT_REAL'
      }),
      expect.objectContaining({
        src: portfolioAsset('media/projects/volatech/03-facture-pdf.png'),
        width: 736,
        height: 844,
        type: 'SCREENSHOT_REAL'
      })
    ]);
  });

  it('presents the French source-backed story without production claims', () => {
    renderPath('/fr/projets/volatech');

    expect(screen.getByRole('heading', { level: 1, name: 'VolaTech — vente et retrait de produits' })).toBeInTheDocument();
    expect(screen.getByText(/scénario complet de boutique de produits informatiques/i)).toBeInTheDocument();
    expect(screen.getByText(/Servlets.*JSP.*services.*repositories JDBC/i)).toBeInTheDocument();
    expect(screen.getAllByText(/paiement simulé/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/parcours documenté.*facture PDF.*référence QR/i)).toBeInTheDocument();
    expect(screen.getByText(/dossier public signé.*paiement est simulé.*QR n’est pas une preuve cryptographique/i)).toBeInTheDocument();
    expect(screen.queryByText('Application en production')).not.toBeInTheDocument();
    expect(screen.queryByText('Tests E2E réussis')).not.toBeInTheDocument();
  });

  it('presents the same evidence-aware story in English', () => {
    renderPath('/en/projects/volatech');

    expect(screen.getByRole('heading', { level: 1, name: 'VolaTech — product sales and pickup' })).toBeInTheDocument();
    expect(screen.getByText(/complete IT product store scenario/i)).toBeInTheDocument();
    expect(screen.getByText(/Servlets.*JSP.*services.*JDBC repositories/i)).toBeInTheDocument();
    expect(screen.getAllByText(/simulated payment/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/documented journey.*PDF invoice.*QR reference/i)).toBeInTheDocument();
    expect(screen.getByText(/signed public study.*payment is simulated.*QR is not cryptographically signed/i)).toBeInTheDocument();
    expect(screen.queryByText('Production application')).not.toBeInTheDocument();
    expect(screen.queryByText('Passing E2E tests')).not.toBeInTheDocument();
  });

  it('renders the QR and invoice screenshots in the accessible evidence region', () => {
    renderPath('/fr/projets/volatech');

    const region = screen.getByRole('region', { name: 'Interfaces documentées' });
    expect(region).toContainElement(screen.getByRole('img', { name: /écran de retrait assisté par QR/i }));
    expect(region).toContainElement(screen.getByRole('img', { name: /facture PDF VolaTech/i }));
    expect(screen.getByText(/validation du retrait/i)).toBeInTheDocument();
    expect(screen.getByText(/facture générée en PDF/i)).toBeInTheDocument();
  });
});
