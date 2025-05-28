// Types, interfaces and enumns:
export type Browser = 'chrome' | 'firefox' | 'safari';

export const isFirefox =
  CSS.supports('-moz-appearance', 'none') ||
  /firefox/i.test(navigator.userAgent);

export function detectBrowser(): Browser {
  const userAgent = navigator.userAgent;

  const isFirefox = /firefox/i.test(userAgent);
  if (isFirefox) return 'firefox';

  const isSafari =
    /safari/i.test(userAgent) && !/chrome|chromium|android/i.test(userAgent);
  if (isSafari) return 'safari';

  const isChrome =
    /chrome|chromium|crios/i.test(userAgent) &&
    !/edge|edg|opr|opera/i.test(userAgent);
  if (isChrome) return 'chrome';

  // Default to chrome if detection fails (optional)
  return 'chrome';
}
