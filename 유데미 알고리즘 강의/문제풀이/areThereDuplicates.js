function areThereDuplicates(...arg) {
  //들어오는 인자를 객체에 저장한다.
  //객체를 돌면서 2이상인 경우에는 중복된 값이 있다는 의미이므로 true를 return 한다.
  const obj = {};
  
  for(let item of arg) {
    obj[item] = (obj[item] || 0) + 1;
  }
  
  for(let e in obj) {
    if(obj[e] > 1) return true;
  }
  
  return false;
}
