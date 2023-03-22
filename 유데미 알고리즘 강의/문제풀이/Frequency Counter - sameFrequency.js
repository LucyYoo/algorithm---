function sameFrequency(num1, num2){
  // 첫 번째 인자로 들어온 수를 객체로 저장하고 개수에 따라 값을 설정한다.
  // 두 번째 인자로 들어온 수를 돌면서 객체에서 찾아서 -1씩 한다.
  // 만약 -1을 하기 전에 이미 0이라면 개수가 안 맞는 것이므로 return false;
  // 다 성공적으로 돌고나서 객체의 값 중에 0이 아닌 것이 있다면 실패한 것이므로 return false;
  // 위의 과정을 모두 성공적으로 넘겼다면 return true;
  if(num1.length !== num2.length) return false;
  
  const numObj = {};
  
  for(let str of String(num1)) {
      numObj[str] = (numObj[str] || 0) + 1;
  }
  
  for(let str of String(num2)) {
    if(!numObj[str]) return false;
    --numObj[str];
  }
  
  return true;
  
}
