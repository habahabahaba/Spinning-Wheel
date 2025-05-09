export function mergeStyles(...args: (string | null | undefined)[]): string {
  return args.filter((a) => Boolean(a)).join(' ');
}
