import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';

type SharedProps = {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
};

type ButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorProps = SharedProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

const styles = {
  primary: 'bg-brand-orange text-white hover:bg-brand-orange-dark border-brand-orange',
  outline: 'bg-transparent text-brand-ink border-brand-ink hover:bg-brand-ink hover:text-white',
  ghost: 'bg-transparent text-brand-ink border-transparent hover:bg-brand-soft',
};

export function Button(props: ButtonProps | AnchorProps) {
  const base =
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.13em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2';

  if ('href' in props) {
    const { children, variant = 'primary', className, ...anchorProps } = props;
    return (
      <a className={cn(base, styles[variant], className)} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { children, variant = 'primary', className, ...buttonProps } = props;
  return (
    <button className={cn(base, styles[variant], className)} {...buttonProps}>
      {children}
    </button>
  );
}
