  // 두 개의 포인터 i와 j를 배열의 시작점에 둔다.
  //j를 하나씩 이동하면서 i와 j에 해당하는 배열의 평균값을 구한다.
  // 평균값보다 작다면 j를 1 이동한다.
  // 평균값보다 크다면 i를 1 더하고 j를 0으로 초기화한다.
  // 평균값과 같다면 true를 리턴하고 같은 값이 없다면 그대로 반복문이 종료되면서 false를 리턴한다.

function averagePair(array, avg){
  let i=0;
  let j=0;
  
  while(i<array.length) {
    const arrayAvg = (array[i] + array[j])/2;
    
    if(arrayAvg === avg) return true;
    if(arrayAvg > avg || j === array.length - 1) {
      i++;
      j=0;
    } else if(arrayAvg < avg) j++;
  }
  
  return false;
}
