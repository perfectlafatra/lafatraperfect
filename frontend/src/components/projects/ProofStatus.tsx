import type { EvidenceStatus } from '../../content/projectIndex';
import type { Locale } from '../../routes/publicRoutes';
import { Badge } from '../ui/Badge';

export function ProofStatus({ status, locale }: { status: EvidenceStatus; locale: Locale }) {
  const labels: Record<EvidenceStatus, { fr: string; en: string }> = {
    documented: { fr: 'Projet documenté', en: 'Documented project' },
    'demo-simulated': { fr: 'Prototype', en: 'Prototype' },
    'live-verified': { fr: 'En ligne', en: 'Live' },
    'in-progress': { fr: 'En développement', en: 'In development' }
  };
  const label = labels[status][locale];
  return <Badge>{label}</Badge>;
}

