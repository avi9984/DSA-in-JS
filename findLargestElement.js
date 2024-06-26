// Find largest element in array ?

function findLargestElement(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(findLargestElement([1, 2, 3, 7, 5, 9]))