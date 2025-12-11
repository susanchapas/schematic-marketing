'use client';

import { useState, FormEvent } from 'react';
import styles from './ContactForm.module.css';

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
  honeypot: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot check for spam prevention
    if (formData.honeypot) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          projectType: formData.projectType,
          budget: formData.budget,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: '',
          budget: '',
          message: '',
          honeypot: '',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div
        className={`surface ${styles.successMessage}`}
        role="status"
        ref={node => {
          if (node) node.focus();
        }}
        tabIndex={-1}
      >
        <div className={styles.successIcon} aria-hidden="true">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 className={styles.successTitle}>Message Sent!</h3>
        <p className={styles.successText}>
          Thanks for reaching out. We&apos;ll get back to you within 2 business days.
        </p>
        <button type="button" className="btn btn--secondary" onClick={() => setStatus('idle')}>
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`surface ${styles.form}`} noValidate>
      <div className={styles.formGrid}>
        <div className="form-group">
          <label htmlFor="name" className="form-label form-label--required">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
            autoComplete="name"
            required
          />
          {errors.name && (
            <span id="name-error" className="form-error" role="alert">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z" />
              </svg>
              {errors.name}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label form-label--required">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
            autoComplete="email"
            required
          />
          {errors.email && (
            <span id="email-error" className="form-error" role="alert">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z" />
              </svg>
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="company" className="form-label">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="form-input"
            autoComplete="organization"
          />
        </div>

        <div className="form-group">
          <label htmlFor="projectType" className="form-label">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Select a service</option>
            <option value="web-development">Web Development</option>
            <option value="social-media">Social Media Management</option>
            <option value="graphic-design">Graphic Design</option>
            <option value="branding">Brand Strategy</option>
            <option value="seo">SEO Optimization</option>
            <option value="event-planning">Event Planning</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="budget" className="form-label">
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Select a range</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-10k">$5,000 - $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k-50k">$25,000 - $50,000</option>
            <option value="over-50k">Over $50,000</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label form-label--required">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="form-textarea"
          rows={6}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          placeholder="Tell us about your project, goals, and timeline..."
          required
        />
        {errors.message && (
          <span id="message-error" className="form-error" role="alert">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z" />
            </svg>
            {errors.message}
          </span>
        )}
      </div>

      {/* Honeypot field for spam prevention */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="honeypot">Leave this field empty</label>
        <input
          type="text"
          id="honeypot"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === 'error' && (
        <div className={styles.errorBanner} role="alert">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z" />
          </svg>
          <span>Something went wrong. Please try again or email us directly.</span>
        </div>
      )}

      <button
        type="submit"
        className="btn btn--primary"
        disabled={status === 'loading'}
        aria-busy={status === 'loading'}
      >
        {status === 'loading' ? (
          <>
            <span className={styles.spinner} aria-hidden="true"></span>
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}
