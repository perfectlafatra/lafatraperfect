import { MetaTags } from '../components/seo/MetaTags';
import type { Locale } from '../routes/publicRoutes';

export function PrivacyPage({ locale }: { locale: Locale }) {
  const title = locale === 'fr' ? 'Confidentialité' : 'Privacy';
  return <article className="page-shell"><MetaTags title={title} description={title} locale={locale}/><h1>{title}</h1><div className="prose-card"><p>{locale === 'fr' ? 'Cette vitrine statique ne collecte ni ne stocke de message sur un serveur. Le bouton Email ouvre le logiciel de messagerie du visiteur ; aucune donnée n’est transmise par le site lui-même. La préférence de thème est conservée localement dans le navigateur.' : 'This static site does not collect or store messages on a server. The Email button opens the visitor’s mail client; the site itself transmits no message data. Theme preference is stored locally in the browser.'}</p></div></article>;
}

