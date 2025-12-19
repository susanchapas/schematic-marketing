import React, { forwardRef } from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, className = '', required, id, ...props }, ref) => {
    return (
      <div className="form-group">
        <label htmlFor={id} className={`form-label ${required ? 'form-label--required' : ''}`}>
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          className={`form-input ${className}`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : undefined}
          required={required}
          {...props}
        />
        {error && (
          <span id={`${id}-error`} className="form-error" role="alert">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z" />
            </svg>
            {error}
          </span>
        )}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';
