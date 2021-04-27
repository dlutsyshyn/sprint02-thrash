let sum = total(1, 0.1);
sum = total(1, 0.2, sum);
sum = total(1, 0.78, sum);
console.log(sum); // will return 1.08


let sum = total(2, 0.5);
sum = total(2, 0.1, sum);
sum = total(1, 0.99, sum);
console.log(sum); // will return 2.19


let sum = total(5, 0.5);
sum = total(99, 0.1, sum);
sum = total(1, 100, sum);
console.log(sum); // will return 112.4