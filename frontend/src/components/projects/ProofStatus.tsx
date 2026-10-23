import type { EvidenceStatus } from '../../content/projectIndex';
import type { Locale } from '../../routes/publicRoutes';
import { Badge } from '../ui/Badge';

export function ProofStatus({ status, locale }: { status: EvidenceStatus; locale: Locale }) {
  const labels: Record<EvidenceStatus, { fr: string; en: string }> = {
    documented: { fr: 'Étude documentée', en: 'Documented study' },
    'demo-simulated': { fr: 'Démo simulée', en: 'Simulated demo' },
    'live-verified': { fr: 'Lien vérifié', en: 'Verified live link' },
    'in-progress': { fr: 'En consolidation', en: 'In progress' }
  };
  const label = labels[status][locale];
  return <Badge>{label}</Badge>;
}

