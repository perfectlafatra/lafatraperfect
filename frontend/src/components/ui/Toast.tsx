export function Toast({ message, tone = 'success' }: { message: string; tone?: 'success' | 'error' }) {
  return <div className={`toast toast--${tone}`} role={tone === 'error' ? 'alert' : 'status'}>{message}</div>;
}

