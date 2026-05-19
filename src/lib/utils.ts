import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const EASE = {
  out: [0.16, 1, 0.3, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
  spring: { type: 'spring', stiffness: 140, damping: 22, mass: 0.8 } as const
};

export function splitWords(text: string) {
  return text.split(/(\s+)/);
}
