function solution(array, n) {
  const abs = array.map((e, i) => Math.abs(e - n));
  const min = Math.min(...abs);
  const result = array
    .filter((e) => Math.abs(e - n) === min)
    .sort((a, b) => a - b);
  return result[0];
}
