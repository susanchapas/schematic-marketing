import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
}

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
    href?: never;
  };

type ButtonAsLink = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    as: 'link';
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  ...props
}: ButtonProps) {
  const className = `
    ${styles.button}
    ${styles[`button--${variant}`]}
    ${styles[`button--${size}`]}
    ${fullWidth ? styles['button--full'] : ''}
  `.trim();

  if (props.as === 'link') {
    const { as, href, ...linkProps } = props;
    return (
      <Link href={href} className={className} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { as, ...buttonProps } = props;
  return (
    <button className={className} {...buttonProps}>
      {children}
    </button>
  );
}
