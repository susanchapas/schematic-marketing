import { render, screen } from '@testing-library/react';
import Header from '../app/components/Header';

// Mock next/link
jest.mock('next/link', () => {
  return function MockLink({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: any;
  }) {
    return (
      // forward all props so tests can assert on attributes like aria-label
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a href={href} {...props}>
        {children}
      </a>
    );
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
