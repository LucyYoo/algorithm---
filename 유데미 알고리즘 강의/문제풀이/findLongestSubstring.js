/* start, maxLength 를 변수로 할당하고 stringCount 를 객체로 할당한다.
반복문을 돌면서 str[i]를 stringCount 객체에 담는다.
maxLength를 기존 maxLength와 (i - start + 1) 중에 더 큰 값으로 할당한다.
동일한 문자가 나왔을 때 시작점을 지정하기 위해서
stringCount 객체의 현재 알파벳의 값으로 다음 인덱스 값을 저장해둔다.
만약 이미 stringCount에 해당 문자가 있다면 start를 현재 start와 stringCount 객체에서 해당하는 알파벳의 값
을 비교해서 큰 값으로 설정한다.
*/
function findLongestSubstring(string){
    let start = 0;
    let maxLength = 0;
    let stringCount = {};
    
    for(let i = 0; i<string.length; i++) {
        const str = string[i];
        if(stringCount[str]) {
            start = Math.max(start, stringCount[str])
        }
        maxLength = Math.max(maxLength, i - start + 1);
        stringCount[str] = i + 1;
    }
    
    return maxLength;
}
