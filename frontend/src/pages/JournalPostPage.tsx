import { Link, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MetaTags } from '../components/seo/MetaTags';
import { findPost } from '../content/journal';
import { routePath, type Locale } from '../routes/publicRoutes';

export function JournalPostPage({ locale }: { locale: Locale }) {
  const { slug = '' } = useParams();
  const { t } = useTranslation();
  const post = findPost(slug);
  if (!post) return <Navigate to={`/${locale}/404`} replace />;
  const text = post.translation[locale];
  const date = new Date(post.publishedAt).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  return (
    <article className="page-shell journal-post">
      <MetaTags title={text.title} description={text.summary} locale={locale} />
      <p className="eyebrow"><Link to={routePath('journal', locale)}>{t('nav.journal')}</Link> / {post.category}</p>
      <h1>{text.title}</h1>
      <p className="page-lead">{text.summary}</p>
      <div className="journal-post__meta">
        <time dateTime={post.publishedAt}>{date}</time>
        <ul className="tag-list">{post.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
      </div>
      <div className="prose-card">
        {text.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      </div>
      <p className="journal-demo-note">
        {locale === 'fr'
          ? 'Contenu de démonstration — identifié pour être remplacé par un article réel depuis le backoffice.'
          : 'Demo content — marked for replacement with a real post from the back office.'}
      </p>
      <p><Link className="text-link" to={routePath('journal', locale)}>← {t('nav.journal')}</Link></p>
    </article>
  );
}
