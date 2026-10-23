export function Skeleton({ label = 'Loading' }: { label?: string }) {
  return <span className="skeleton" role="status"><span className="sr-only">{label}</span></span>;
}

