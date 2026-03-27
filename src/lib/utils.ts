import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatSF(sf: number): string {
  if (sf >= 1_000_000) return `${(sf / 1_000_000).toFixed(1)}M SF`;
  if (sf >= 1_000) return `${Math.round(sf / 1_000).toLocaleString()}K SF`;
  return `${sf.toLocaleString()} SF`;
}

export function formatMoney(amount: number): string {
  if (amount >= 1_000_000_000) return `$${(amount / 1_000_000_000).toFixed(1)}B`;
  if (amount >= 1_000_000) return `$${(amount / 1_000_000).toFixed(1)}M`;
  if (amount >= 1_000) return `$${(amount / 1_000).toFixed(0)}K`;
  return `$${amount.toLocaleString()}`;
}
