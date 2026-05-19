import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
  /** When inside a parent with `group` class, swaps on parent hover. */
  groupHover?: boolean;
  height?: string;
};

/**
 * Vexoo's signature text micro-interaction: two stacked copies of the text in
 * a clipped one-line container — upright on top, skewed 12° below. On hover the
 * column shifts up by exactly one line height, replacing the upright copy with
 * the skewed one. Pure transform, no layout shift.
 */
export function SkewSwap({ children, className, groupHover = true, height = '1.1em' }: Props) {
  return (
    <span
      className={cn('relative inline-flex flex-col overflow-hidden align-bottom', className)}
      style={{ height }}
    >
      <span
        className={cn(
          'inline-block translate-y-0 transition-transform duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
          groupHover && 'group-hover:-translate-y-full'
        )}
      >
        {children}
      </span>
      <span
        aria-hidden
        className={cn(
          'inline-block origin-left translate-y-0 transition-transform duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
          groupHover && 'group-hover:-translate-y-full'
        )}
        style={{ transform: 'skewY(12deg)' }}
      >
        {children}
      </span>
    </span>
  );
}
