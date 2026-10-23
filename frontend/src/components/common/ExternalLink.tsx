import type { AnchorHTMLAttributes, ReactNode } from 'react';

export function ExternalLink({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode }) {
  return <a {...props} target="_blank" rel="noopener noreferrer">{children}<span className="sr-only"> (new tab)</span></a>;
}

