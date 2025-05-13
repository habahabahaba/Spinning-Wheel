/**
 * Generates a random integer within a specified inclusive range.
 *
 * @param min - The inclusive lower bound of the range (minimum possible value).
 * @param max - The inclusive upper bound of the range (maximum possible value).
 * @returns A random integer N where min ≤ N ≤ max.
 * @returns NaN if min > max.
 *
 * @example
 * // Returns a random number between 0 and 10 (inclusive)
 * const randomNum = randomInRange(0, 10);
 *
 * @example
 * // Returns either 1, 2, or 3 (all inclusive)
 * const oneTwoOrThree = randomInRange(1, 3);
 *
 * @remarks
 * 1. This function uses `Math.random()` internally, which is not cryptographically secure.
 * 2. For security-sensitive applications, consider using `window.crypto.getRandomValues()`.
 */
export function randomInRange(min: number, max: number): number {
  if (min > max) return NaN;
  return min + Math.floor(Math.random() * (max - min + 1));
}

/**
 * Generates an array of unique random integers within a specified inclusive range.
 *
 * @param quantity - The number of unique random integers to generate. Must be less than or equal to the size of the range.
 * @param min - The inclusive lower bound of the range (minimum possible value).
 * @param max - The inclusive upper bound of the range (maximum possible value).
 * @returns An array of unique random integers from the specified range.
 *
 * @throws {Error} If the requested quantity exceeds the available range size (max - min + 1).
 *
 * @example
 * // Returns 5 unique numbers between 1 and 10 (inclusive)
 * const randomNumbers = uniqueRandomsInRange(5, 1, 10);
 *
 * @example
 * // Returns all numbers from 1 to 5 in random order
 * const randomPermutation = uniqueRandomsInRange(5, 1, 5);
 */
export function uniqueRandomsInRange(
  quantity: number, // how many numbers should the function return
  min: number, // inclusive start of range
  max: number // inclusive end of range
): number[] {
  const output: number[] = []; // will contain a random sequence of numbers from the provided range.
  // All possible numbers from the range, placed in increasing order:
  const orderedNumbers: number[] = Array.from(
    { length: max - min + 1 },
    (_, i) => i + min
  );
  // console.log(
  //   `[uniqueRandomsInRange] quantity: ${quantity}, min: ${min}, max: ${max}`,
  // );
  // console.log(`[uniqueRandomsInRange] orderedNumbers: ${orderedNumbers}`);

  let idx: number;
  // For quantity-arg times
  for (let i = 0; i < quantity; i++) {
    // pick random index of orderedNumbers array
    idx = randomInRange(0, orderedNumbers.length - 1);
    // push the number at that index to output array
    output.push(orderedNumbers[idx]);
    // then remove the number from orderedNumbers array
    orderedNumbers.splice(idx, 1);
  }
  // console.log(`[uniqueRandomsInRange] output: ${output}`);

  return output;
}

export function generateId(): string {
  const now = Date.now().toString().slice(5);
  const rand = Math.random().toFixed(8).toString().slice(2);

  console.log('[generateId]', 'now:', now, 'rand:', rand);

  return `${now}-${rand}`;
}
