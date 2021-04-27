let animalCheck = /^[A-Za-z]{1,20}$/gi;
let animal = prompt('Please specify an animal that hero looks like: (REQUIRED)')
if (!animalCheck.test(animal)) {
    alert ('Wrong input! Please try again!')
} else {

let ageCheck = /^[0-9]{1,5}$/;
let age = prompt('Please set an age of hero: (REQUIRED)')
if (!ageCheck.test(age)) {
    alert ('Wrong input! Please try again!')
} else if (age == '0' || age == '00' || age == '000' || age == '0000' || age == '00000') {
    alert ('Wrong input! Please try again!')
} else {

let genderCheck = /^female||male$/gi;
let gender = prompt('What gender is your hero? (Male or female, may be blank) :');
    gender = gender.toLowerCase(); 
if (!genderCheck.test(gender)) {
    alert ('Wrong input! Please try again!')
} else {

var hero;

if (age <= 18 && gender == 'male') {
    var hero = 'boy'
} else if (age > 18 && gender == 'male') {
    var hero = 'man'
} else if (age <= 18 && gender == 'female') {
    var hero = 'girl'
} else if (age > 18 && gender == 'female') {
    var hero = 'woman'
} else if (age <= 18 && gender == '') {
    var hero = 'kid'
} else if (age > 18 && gender == '') {
    var hero = 'hero' 
}
}
}
}

alert ('The superhero name is: ' + animal.toUpperCase() +'-'+ hero.toUpperCase() + '!');