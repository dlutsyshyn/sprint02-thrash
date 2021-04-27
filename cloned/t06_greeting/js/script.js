let firstName = prompt ('Please specify your Firstname!'), lastName = prompt ('Please specify your LastName!');

const checkName = /^[A-Za-z]{1,20}$/i;

if (!checkName.test(firstName) || !checkName.test(lastName)) 
{alert('Wrong input!')}
else {
    function capitalizer (firstName, lastName) {
        firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
        lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
        alert('Greetings: ' + firstName + ' ' + lastName + '!');
    }
capitalizer (firstName, lastName);
}