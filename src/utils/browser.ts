export const isFirefox =
  CSS.supports('-moz-appearance', 'none') ||
  /firefox/i.test(navigator.userAgent);
