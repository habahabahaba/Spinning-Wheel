export function distributionAndShifts(
  outcomes: number,
  roundingPlace: number,
  reps: number
) {
  const outcomesDist = new Array(outcomes).fill(0);
  const shifts: number[][] = Array.from({ length: outcomes }, () =>
    new Array(outcomes).fill(0)
  );

  let randomTurns,
    outcomeIdx = 0,
    resultingTurn = 0,
    prevIdx;
  for (let i = 0; i < reps; i++) {
    prevIdx = outcomeIdx;

    randomTurns = +(Math.random() + 1).toFixed(roundingPlace);

    resultingTurn =
      Math.round(((((resultingTurn + randomTurns) % 1) + 1) % 1) * 100) / 100;

    outcomeIdx =
      Math.floor(outcomesDist.length * (1 - resultingTurn)) %
      outcomesDist.length;

    outcomesDist[outcomeIdx]++;

    shifts[prevIdx][outcomeIdx] ??= 0;
    shifts[prevIdx][outcomeIdx]++;
  }

  console.log('distribution: ', outcomesDist);
  console.log('steps: ', shifts);
}
