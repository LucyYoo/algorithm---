const getDivisors = (num) => {
    const divisors = [];
    for(let i = 0; i<= Math.sqrt(num); i++) {
        if(num % i === 0) {
            divisors.push(i);
            if(num / i !== i) divisors.push(num / i);
        }
    }
    return divisors.length;
}

function solution(number, limit, power) {
    const divisorslen = [];
    for(let i = 1; i<= number; i++) {
        divisorslen.push(getDivisors(i));
    }
    const result = divisorslen.map(e => e = e > limit ? power : e);
    return result.reduce((acc, cur) => acc + cur, 0);
}
