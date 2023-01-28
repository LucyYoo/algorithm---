function solution(today, terms, privacies) {
  const answer = [];
  const day = new Date(today);

  const termsObj = {};
  terms.forEach((e) => {
    const [type, month] = e.split(" ");
    termsObj[type] = Number(month);
  });

  privacies.forEach((e, i) => {
    const [fullDay, type] = e.split(" ");
    const privateDay = new Date(fullDay);

    privateDay.setMonth(privateDay.getMonth() + termsObj[type]);
    if (privateDay <= day) answer.push(i + 1);
  });

  return answer;
}
