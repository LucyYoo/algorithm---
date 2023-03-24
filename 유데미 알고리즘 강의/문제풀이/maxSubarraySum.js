/*배열의 처음부터 num까지 더한 후 maxSum으로 지정한다.
다시 배열을 반복문으로 돌면서 앞에서 하나 빼고, 뒤에서 하나 더하면서 합계를 구한다.
구한 합계와 maxSum을 비교해서 큰 값을 maxSum으로 할당한다.
이를 반복문이 다 돌때까지 반복한다.
*/
function maxSubarraySum(arr, num){
    if(arr.length < num) return null;
    
    let maxSum = 0;
    let currentSum = 0;
    
    for(let i = 0; i<num; i++) {
        maxSum += arr[i];
    }
    
    currentSum = maxSum;
    
    for(let i = num; i<arr.length; i++) {
        currentSum = currentSum - arr[i-num] + arr[i];
        maxSum = Math.max(currentSum, maxSum);
    }

    return maxSum;
}
