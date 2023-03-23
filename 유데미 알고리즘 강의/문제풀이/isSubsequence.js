  // i 포인터는 string1부터 시작
  // j 포인터는 string2부터 시작
  // string1에서 포인터가 가리키는 문자가 string2에 있는지 확인한다.
  // string2[j]와 string1[i]가 같지 않으면 j++;
  // j가 끝까지 돌았는데 없다면 같은 문자가 없는 경우이므로 false를 리턴한다.
  // 만약 같은 문자를 찾은 경우 i++을 해서 string1에서 다음 문자를 찾는다. 
  // 문자가 순서대로 나와야하기 때문에 j는 초기화하지 않는다.

function isSubsequence(string1, string2) {  
  let i = 0;
  let j = 0;
  
  while(i<string1.length) {
    if(j === string2.length) return false;
    if(string1[i] === string2[j]) i++;
    else j++;
  }
  
  return true;
}
