const getParent = (parent, i) => {
    if(parent[i] === i) return i;
    return getParent(parent, parent[i]);
}

const unionParent = (parent, costA, costB) => {
    const a = getParent(parent, costA);
    const b = getParent(parent, costB);
    
    a < b ? parent[b] = a : parent[a] = b;
}

const findParent = (parent, costA, costB) => {
    const a = getParent(parent, costA);
    const b = getParent(parent, costB);
    return a === b? true : false;
}

function solution(n, costs) {
    let answer = 0;
    const parent = [];
    
    for(let i = 0; i <= n; i++) {
        parent.push(i);
    }
    
    costs.sort((a, b) => a[2] - b[2]);
    
    for(const cost of costs) {
        if(!findParent(parent, cost[0], cost[1])) {
            answer += cost[2];
            unionParent(parent, cost[0], cost[1])
        }
    }
    
    return answer;
}
