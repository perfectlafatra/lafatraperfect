import { Link } from 'react-router-dom';
import { MetaTags } from '../components/seo/MetaTags';
import { getAllPosts, type JournalPost } from '../content/journal';
import { routePath, type Locale } from '../routes/publicRoutes';

const categoryLabels: Record<string, { fr: string; en: string }> = {
  architecture: { fr: 'Architecture', en: 'Architecture' },
  backend: { fr: 'Backend', en: 'Backend' },
  database: { fr: 'Base de données', en: 'Database' },
  frontend: { fr: 'Frontend', en: 'Frontend' },
  security: { fr: 'Sécurité', en: 'Security' },
  devops: { fr: 'DevOps', en: 'DevOps' },
  method: { fr: 'Méthode', en: 'Method' }
};

export function JournalCard({ post, locale }: { post: JournalPost; locale: Locale }) {
  const date = new Date(post.publishedAt).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  return (
    <article className="journal-card">
      <p className="eyebrow">{categoryLabels[post.category]?.[locale] ?? post.category}</p>
      <h3><Link className="journal-card__title" to={`${routePath('journal', locale)}/${post.slug}`}>{post.translation[locale].title}</Link></h3>
      <p>{post.translation[locale].summary}</p>
      <div className="journal-card__meta">
        <time dateTime={post.publishedAt}>{date}</time>
        <Link className="text-link" to={`${routePath('journal', locale)}/${post.slug}`}>
          {locale === 'fr' ? 'Lire l’article' : 'Read the post'} →
        </Link>
      </div>
    </article>
  );
}

export function JournalPage({ locale }: { locale: Locale }) {
  const title = locale === 'fr' ? 'Journal technique' : 'Technical journal';
  const posts = getAllPosts();
  return (
    <article className="page-shell">
      <MetaTags title={title} description={posts[0]?.translation[locale].summary ?? title} locale={locale} />
      <p className="eyebrow">LOG / NOTES</p>
      <h1>{title}</h1>
      <p className="page-lead">
        {locale === 'fr'
          ? 'Retours d’expérience, décisions d’architecture et résolutions de problèmes, en français et en anglais.'
          : 'Experience reports, architecture decisions and problem resolutions, in French and English.'}
      </p>
      <div className="journal-grid">
        {posts.map((post) => <JournalCard key={post.slug} post={post} locale={locale} />)}
      </div>
      <p className="journal-demo-note">
        {locale === 'fr'
          ? 'Les articles actuels sont des contenus de démonstration. Leur administration depuis le backoffice nécessite une intégration effective.'
          : 'Current posts are demonstration content. Editing them from the back office requires a working integration.'}
      </p>
    </article>
  );
}
