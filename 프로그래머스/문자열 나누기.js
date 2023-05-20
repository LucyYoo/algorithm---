function solution(s) {
    let first = s[0];
    let firstCount = 1;
    let anotherCount = 0;
    let result = 0;    

    for(let i = 1; i<s.length; i++) {
        s[i] === first ? firstCount++ : anotherCount++;
        if(firstCount === anotherCount) {
            result++;
            first = s[i+1];
            firstCount = 0;
            anotherCount = 0;
        }
    }
    
    return firstCount !== 0 ? result += 1 : result;
}
