// Write a function factorial 
// factorial(5) = 5 * 4 * 3 * 2 * 1 //120

function factorial(num) { // Normal method
    let res = 1;
    for (let i = 1; i <= num; i++) {
        res *= i;
    }
    return res;
}
console.log(factorial(5)); //120

// Method two using Recursion
function fact(num) {
    if (num === 0) return 1;
    return num * fact(num - 1);
}
console.log(fact(5)); // 120