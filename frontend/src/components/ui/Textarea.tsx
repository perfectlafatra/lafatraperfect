import { forwardRef, type TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, error, id, className = '', ...props },
  ref
) {
  const inputId = id ?? props.name;
  const errorId = error && inputId ? `${inputId}-error` : undefined;
  return (
    <label className="field" htmlFor={inputId}>
      <span>{label}</span>
      <textarea ref={ref} id={inputId} className={`textarea ${className}`.trim()} aria-invalid={Boolean(error)} aria-describedby={errorId} {...props} />
      {error && <span id={errorId} className="field__error">{error}</span>}
    </label>
  );
});

