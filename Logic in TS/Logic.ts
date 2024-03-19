type sumTypeFunc = (a: number[]) => number[];

const Sum: sumTypeFunc = (arr) => {
    let sumArray: number[] = []; // Initialize an array to store the sum results

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j <= i; j++) {
            sum += arr[j]; // Add each element in the subarray to sum
        }
        sumArray.push(sum); // Push the sum to the result array
    }

    return sumArray; // Return the array of sums
}

console.log(Sum([1,2,3,4,5,6,7,8,9,10])); // Output: [1, 3, 6, 10, 15, 21, 28, 36, 45, 55]
