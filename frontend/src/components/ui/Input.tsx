import { forwardRef, type InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, id, className = '', ...props },
  ref
) {
  const inputId = id ?? props.name;
  const errorId = error && inputId ? `${inputId}-error` : undefined;
  return (
    <label className="field" htmlFor={inputId}>
      <span>{label}</span>
      <input ref={ref} id={inputId} className={`input ${className}`.trim()} aria-invalid={Boolean(error)} aria-describedby={errorId} {...props} />
      {error && <span id={errorId} className="field__error">{error}</span>}
    </label>
  );
});

