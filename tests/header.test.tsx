import { render, screen } from '@testing-library/react';
import Header from '../app/components/Header';

// Mock next/link
jest.mock('next/link', () => {
  return function MockLink({ children, href }: { children: React.ReactNode; href: string }) {
    return <a href={href}>{children}</a>;
  };
});

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />);
    expect(screen.getByLabelText('Schematic Marketing Home')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Values')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders the CTA button', () => {
    render(<Header />);
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  it('has accessible mobile menu button', () => {
    render(<Header />);
    const menuButton = screen.getByRole('button', { name: /menu/i });
    expect(menuButton).toBeInTheDocument();
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('has primary navigation with proper aria-label', () => {
    render(<Header />);
    expect(screen.getByRole('navigation', { name: 'Primary navigation' })).toBeInTheDocument();
  });
});
