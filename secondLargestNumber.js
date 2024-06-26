//Find second largest number in the array element?

function findSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = arr[0];
    if (arr.length < 2) return null;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
console.log(findSecondLargest([1, 2, 3, 4, 5]));