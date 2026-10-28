import { useEffect } from 'react';
import type { Locale } from '../../routes/publicRoutes';
import { siteConfig } from '../../config/site';

export function MetaTags({ title, description, locale }: { title: string; description: string; locale: Locale }) {
  useEffect(() => {
    document.title = `${title} — ${siteConfig.name}`;
    document.documentElement.lang = locale;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.append(meta);
    }
    meta.content = description;

    const upsert = (selector: string, attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.append(element);
      }
      element.content = content;
    };
    const canonicalUrl = new URL(window.location.pathname, window.location.origin).toString();
    upsert('meta[property="og:title"]', 'property', 'og:title', `${title} — ${siteConfig.name}`);
    upsert('meta[property="og:description"]', 'property', 'og:description', description);
    upsert('meta[property="og:type"]', 'property', 'og:type', 'website');
    upsert('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    upsert('meta[property="og:image"]', 'property', 'og:image', new URL(`${import.meta.env.BASE_URL}og-cover.webp`, window.location.origin).toString());
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.append(canonical);
    }
    canonical.href = canonicalUrl;
  }, [description, locale, title]);
  return null;
}

