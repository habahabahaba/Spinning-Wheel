export function mergeStyles(...args: (string | null | undefined)[]): string {
  return args.filter((a) => Boolean(a)).join(' ');
}

export function parseCssUnit(
  value: string | number,
  baseFontSize = 16
): number {
  if (typeof value === 'number') return value;

  const num = parseFloat(value);

  if (value.endsWith('px')) return num;
  if (value.endsWith('vw')) return (num / 100) * window.innerWidth;
  if (value.endsWith('vh')) return (num / 100) * window.innerHeight;
  if (value.endsWith('em')) return num * baseFontSize;
  if (value.endsWith('rem')) {
    const rootFontSize = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    return num * rootFontSize;
  }

  throw new Error(`Unsupported CSS unit: ${value}`);
}

/** Helper to normalize various box value formats into [top, right, bottom, left] */
export function normalizeBoxValue(
  value: number | [number, number] | [number, number, number, number]
): [number, number, number, number] {
  if (typeof value === 'number') return [value, value, value, value];
  if (value.length === 2) return [value[0], value[1], value[0], value[1]];
  return value;
}
