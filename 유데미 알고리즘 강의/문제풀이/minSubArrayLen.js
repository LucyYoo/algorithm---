/*total, start, end, minLength를 변수로 설정한다.
만약 total이 주어지는 기준보다 작은데 end가 마지막에 도달한 게 아니라면 
total에 배열의 현재 end 인덱스를 더하고 end를 +1 해준다.
만약 total이 주어지는 기준보다 크거나 같다면
현재 minLength와 현재 end - start를 비교해서 더 작은 값은 minLength로 설정한다.
그리고 시작점을 옮기기 위해 start를 +1 해준다.
만약 위의 모든 경우에 해당하지 않는 경우는 total이 기준보다 작은데 end가 마지막에 도달한 경우이므로
반복문을 종료한다.
*/
function minSubArrayLen(arr, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLength = Infinity;
    
    while(start < arr.length) {
        if(total<sum && end<arr.length) {
            total += arr[end];
            end++;
        } else if(total >= sum) {
            minLength = Math.min(minLength, end - start);
            total -= arr[start];
            start++;
        } else break;
    }
    
    return minLength === Infinity ? 0 : minLength;
}
