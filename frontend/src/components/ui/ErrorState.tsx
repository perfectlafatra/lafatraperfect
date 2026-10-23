export function ErrorState({ title, description }: { title: string; description: string }) {
  return <div className="state-panel state-panel--error" role="alert"><strong>{title}</strong><p>{description}</p></div>;
}

