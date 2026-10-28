import { useEffect } from 'react';
import { siteConfig } from '../config/site';

export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = `${title} — ${siteConfig.name}`;
  }, [title]);
}

