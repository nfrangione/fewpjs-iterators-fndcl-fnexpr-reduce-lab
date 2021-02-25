const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function reducer (a, currentValue) {
    let result;
    result = a + currentValue;
    return result;
}

let totalBatteries = batteryBatches.reduce(reducer, 0);