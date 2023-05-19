function solution(routes) {
    let answer = 0;
    let out = -300001;
    routes.sort((a, b) => a[1] - b[1]);
    
    routes.forEach((route) => {
        if(route[0] > out) {
            answer++;
            out = route[1];
        }
    })
    
    return answer;
}
