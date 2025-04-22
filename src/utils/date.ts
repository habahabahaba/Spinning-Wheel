/**
 * Returns the current date in locale format without time
 * @param locales Optional locale string or array of strings (default: browser's current locale)
 * @param options Optional formatting options
 * @returns Formatted date string
 */
export function getCurrentDate(
  locales?: string | string[],
  options?: Intl.DateTimeFormatOptions
): string {
  // Default options to exclude time and show only date
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: undefined,
    minute: undefined,
    second: undefined,
    timeZoneName: undefined,
  };

  // Merge user options with defaults (user options take precedence)
  const mergedOptions = { ...defaultOptions, ...options };

  const now = new Date();
  return now.toLocaleDateString(locales, mergedOptions);
}
