import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from '../app/components/ContactForm';

// Mock fetch
global.fetch = jest.fn();

describe('ContactForm', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  it('renders all form fields', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/company/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/project type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/budget/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('renders submit button', () => {
    render(<ContactForm />);
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('shows validation errors for empty required fields', async () => {
    render(<ContactForm />);

    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/message is required/i)).toBeInTheDocument();
    });
  });

  it('shows error for invalid email', async () => {
    render(<ContactForm />);

    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });

    const nameInput = screen.getByLabelText(/name/i);
    fireEvent.change(nameInput, { target: { value: 'Test User' } });

    const messageInput = screen.getByLabelText(/message/i);
    fireEvent.change(messageInput, { target: { value: 'This is a test message' } });

    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument();
    });
  });

  it('shows success message on successful submission', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/name/i);
    fireEvent.change(nameInput, { target: { value: 'Test User' } });

    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    const messageInput = screen.getByLabelText(/message/i);
    fireEvent.change(messageInput, { target: { value: 'This is a test message for the form' } });

    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/message sent/i)).toBeInTheDocument();
    });
  });

  it('has proper aria attributes for invalid fields', async () => {
    render(<ContactForm />);

    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const nameInput = screen.getByLabelText(/name/i);
      expect(nameInput).toHaveAttribute('aria-invalid', 'true');
    });
  });
});
