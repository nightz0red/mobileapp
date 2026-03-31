/**
 * Utility function to conditionally merge classnames
 * Useful for NativeWind/Tailwind CSS conditional styling
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
