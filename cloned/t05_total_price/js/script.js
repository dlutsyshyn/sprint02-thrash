function total (quantity, product, nowSum = 0) {
    return product * quantity + nowSum;
}

let sum = total(1, 0.1);
sum = total(1, 0.2, sum);
sum = total(1, 0.78, sum);
console.log(sum); // returns 1.08 - checked

let cart = total(1, 3.95);
cart = total(1, 2.59, cart);
cart = total(2, 0.46, cart);
alert('Your current shopping-cart cost is: ' + cart) //works propperly