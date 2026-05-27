'use client';

import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
  /**
   * When true (default), animation triggers on the closest parent `.group` hover
   * via CSS class utilities.
   * When false, OR when `hovered` is supplied, CSS classes are skipped and the
   * animation is driven entirely by the `hovered` boolean via inline styles.
   */
  groupHover?: boolean;
  /**
   * Controlled hover state — pass this when you need to trigger the swap from
   * a parent component (e.g. to use a wider hover area than the text itself).
   * When provided, `groupHover` is ignored.
   */
  hovered?: boolean;
  height?: string;
};

/**
 * Vexoo SkewSwap — two copies of the text in a fixed-height clipped container.
 *
 * Row 1: upright, slides UP on hover.
 * Row 2: skewed 12° below (absolutely positioned at top:100%), slides up AND
 *         un-skews simultaneously on hover.
 *
 * BLEED FIX: translateY(-100%) parks Row 1's bottom at y=0 (the clip boundary),
 * which causes 1–2 px of sub-pixel antialiasing to bleed through. When `hovered`
 * is controlled we over-shoot by 4 px (calc(-100% - 4px)) to guarantee the
 * bottom edge clears the boundary entirely. The `lineHeight: height` on both
 * rows makes their height equal to the container so the 4 px is a real margin,
 * not just eaten by a height mismatch.
 */
export function SkewSwap({
  children,
  className,
  groupHover = true,
  hovered,
  height = '1.1em'
}: Props) {
  const controlled = hovered !== undefined;

  /* ── Inline style variants (used when `hovered` prop is supplied) ── */
  const row1Style: React.CSSProperties = controlled
    ? {
        display: 'block',
        whiteSpace: 'nowrap',
        lineHeight: height,
        transition: 'transform 650ms cubic-bezier(0.16,1,0.3,1)',
        transform: hovered ? `translateY(calc(-100% - 4px))` : 'translateY(0)'
      }
    : { lineHeight: height };

  const row2Style: React.CSSProperties = controlled
    ? {
        position: 'absolute',
        top: '100%',
        left: 0,
        display: 'block',
        whiteSpace: 'nowrap',
        lineHeight: height,
        transformOrigin: 'left center',
        transition: 'transform 650ms cubic-bezier(0.16,1,0.3,1)',
        transform: hovered
          ? 'translateY(-100%) skewY(0deg)'
          : 'translateY(0%) skewY(12deg)'
      }
    : { lineHeight: height };

  return (
    <span
      className={cn('relative inline-block overflow-hidden align-bottom', className)}
      style={{ height, clipPath: 'inset(0)' }}
    >
      {/* Row 1 — upright */}
      <span
        className={cn(
          !controlled && 'block whitespace-nowrap transition-transform duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
          !controlled && groupHover && 'group-hover:-translate-y-full'
        )}
        style={row1Style}
      >
        {children}
      </span>

      {/* Row 2 — skewed, absolutely placed BELOW the container */}
      <span
        aria-hidden
        className={cn(
          !controlled && 'absolute left-0 top-full block whitespace-nowrap origin-left skew-y-12',
          !controlled && 'transition-transform duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
          !controlled && groupHover && 'group-hover:-translate-y-full group-hover:skew-y-0'
        )}
        style={row2Style}
      >
        {children}
      </span>
    </span>
  );
}
