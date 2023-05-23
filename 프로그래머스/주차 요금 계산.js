const calParkingTime = (inTime, outTime) => {
    const [inH, inM] = inTime.split(":");
    const [outH, outM] = outTime.split(":");
    let diffH = outH - inH;
    let diffM = outM - inM;
    
    if(diffM < 0) {
        diffM += 60;
        diffH--;
    }
    
    return diffH * 60 + diffM;
}

function solution(fees, records) {
    const [baseTime, baseFee, addedUnit, addedFee] = fees; 
    const parkRecords = {};
    
    records.forEach((e) => {
        const [time, carNumber, check] = e.split(" ");
        parkRecords[carNumber] = parkRecords[carNumber] || [];
        parkRecords[carNumber].push([time, check]);
    })
    
    const result = Object.keys(parkRecords).sort((a, b) => a - b)

    for(const [key, value] of Object.entries(parkRecords)) {
        const stack = [];
        let totalTime = 0;
        value.forEach((e) => {
            if(stack.length > 0) {
                totalTime += calParkingTime(stack.pop(), e[0]);
               
                
            } else stack.push(e[0]);
        })
        if(stack.length) {
            totalTime += calParkingTime(stack.pop(), "23:59");
        }
        
        const parkingFee = totalTime > baseTime ? baseFee + Math.ceil((totalTime - baseTime) / addedUnit) * addedFee : baseFee;
        
        result[result.indexOf(key)] = parkingFee;
    }
    return result;
}
