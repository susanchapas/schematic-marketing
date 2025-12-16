import { render, screen } from '@testing-library/react';
import Sidebar from '../app/components/Sidebar';

// Mock next/link
jest.mock('next/link', () => {
  return function MockLink({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
});

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    span: ({ children, ...props }: { children?: React.ReactNode } & Record<string, unknown>) => (
      <span {...props}>{children}</span>
    ),
    div: ({ children, ...props }: { children?: React.ReactNode } & Record<string, unknown>) => (
      <div {...props}>{children}</div>
    ),
    nav: ({ children, ...props }: { children?: React.ReactNode } & Record<string, unknown>) => (
      <nav {...props}>{children}</nav>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('Sidebar', () => {
  it('renders the logo', () => {
    render(<Sidebar />);
    expect(screen.getAllByLabelText('Schematic Marketing Home').length).toBeGreaterThan(0);
  });

  it('renders navigation links', () => {
    render(<Sidebar />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getAllByText('Our Work').length).toBeGreaterThan(0);
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders the CTA button', () => {
    render(<Sidebar />);
    expect(screen.getAllByText('Start the Schematic').length).toBeGreaterThan(0);
  });

  it('has accessible mobile menu button', () => {
    render(<Sidebar />);
    const menuButton = screen.getByRole('button', { name: /menu/i });
    expect(menuButton).toBeInTheDocument();
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('has primary navigation with proper aria-label', () => {
    render(<Sidebar />);
    expect(screen.getByRole('navigation', { name: 'Primary navigation' })).toBeInTheDocument();
  });
});
