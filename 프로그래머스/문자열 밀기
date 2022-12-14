function solution(A, B) {
  const arr = [...A];
  let count = 0;

  if (A === B) return count;

  for (let i = 0; i < A.length; i++) {
    count++;
    const last = arr.pop();
    arr.unshift(last);

    if (B === arr.join("")) {
      return count;
    }
  }
  return -1;
}
