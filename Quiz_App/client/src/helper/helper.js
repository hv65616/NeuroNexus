export function attemptsNumber(result) {
  return result.filter((r) => r !== undefined).length;
}

export function earnPointsNumber(result, answers) {
  return result
    .map((element, index) => answers[index] === element)
    .filter((index) => index)
    .map((index) => 10)
    .reduce((prev, curr) => prev + curr, 0);
}

export function checkresult(totalPoints, earnPoints) {
  return (totalPoints * 50) / 100 < earnPoints;
}
