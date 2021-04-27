const arr = [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];

let sortEvenOdd = ( (arr) => arr.sort( (a, b) =>  a%2 - b%2 || a-b) );

sortEvenOdd(arr);

alert('Check console output!')
console.log(arr); //works propperly
