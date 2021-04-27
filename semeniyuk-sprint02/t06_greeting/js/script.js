var firstName = prompt("Enter first name:"),
   lastName = prompt("Enter last name:"),
   reg = new RegExp("^[a-zA-Z]*$" || "^[а-яА-Я]*$");

if (
   reg.test(lastName) &&
   reg.test(firstName) &&
   firstName != null &&
   firstName != false &&
   firstName != undefined &&
   lastName != null &&
   lastName != undefined &&
   lastName != false
) {
   var new_FirstName = firstName.toLowerCase(),
      new_LastName = lastName.toLowerCase();

   var fLetter_FirstName = firstName.slice(0, 1),
      fLetter_LastName = lastName.slice(0, 1);

   var update_New_FirstName = new_FirstName.replace(fLetter_FirstName, fLetter_FirstName.toUpperCase()),
      update_New_LastName = new_LastName.replace(fLetter_LastName, fLetter_LastName.toUpperCase());

   console.log("Salute " + update_New_FirstName + " " + update_New_LastName + " !");
   alert("Salute " + update_New_FirstName + " " + update_New_LastName + " !");
} else {
   console.log("Wrong input!");
   alert("Wrong input!");
}