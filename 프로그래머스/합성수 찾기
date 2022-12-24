function cal(n) {
  const measure = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) measure.push(i);
    if (measure.length > 2) {
      return 1;
    }
  }
  return 0;
}

function solution(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += cal(i);
  }
  return result;
}
