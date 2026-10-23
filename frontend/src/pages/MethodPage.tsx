import { MetaTags } from '../components/seo/MetaTags';
import type { Locale } from '../routes/publicRoutes';

export function MethodPage({ locale }: { locale: Locale }) {
  const title = locale === 'fr' ? 'Méthode de travail' : 'Working method';
  const steps = locale === 'fr' ? ['Clarifier le besoin et les preuves attendues', 'Concevoir des frontières simples', 'Développer par tests observables', 'Livrer avec documentation et recette'] : ['Clarify the need and expected evidence', 'Design simple boundaries', 'Develop through observable tests', 'Deliver with documentation and acceptance checks'];
  return <article className="page-shell"><MetaTags title={title} description={title} locale={locale}/><p className="eyebrow">PROCESS</p><h1>{title}</h1><ol className="method-list">{steps.map((step, index) => <li key={step}><span>0{index + 1}</span><h2>{step}</h2></li>)}</ol></article>;
}

