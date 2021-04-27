var name = prompt("To enter an animal name:"),
   a = new RegExp("^[A-Za-z]*$", ""),
   b = new RegExp("[1-9_]", ""),
   regular_gender_F = new RegExp("^female$", "i"),
   regular_gender_M = new RegExp("^male$", "i");
if (name.length <= 20 && a.exec(name)) {
   var gender = prompt("To enter gender(male or female):");
   if (gender === "" || regular_gender_M.test(gender) || regular_gender_F.test(gender)) {
      var age = prompt("To enter age:");
      if (age.length <= 5 && age > 0 && !b.exec(age) != null) {
         function one(name, gender, age) {
            if (regular_gender_M.test(gender) && age < 18) {
               return "The superhero name is: " + name + "-" + "boy" + "!";
            } else if (gender == "" && age < 18) {
               return "The superhero name is: " + name + "-" + "kid" + "!";
            } else if (gender == "" && age > 18) {
               return "The superhero name is: " + name + "-" + "hero" + "!";
            } else if (regular_gender_M.test(gender) && age > 18) {
               return "The superhero name is: " + name + "-" + "man" + "!";
            } else if (regular_gender_F.test(gender) && age < 18) {
               return "The superhero name is: " + name + "-" + "girl" + "!";
            } else if (regular_gender_F.test(gender) && age > 18) {
               return "The superhero name is: " + name + "-" + "woman" + "!";
            } else return "error message";
         }
      } else {
         alert("error message");
      }
   } else {
      alert("error message");
   }
} else {
   alert("error message");
}
alert(one(name, gender, age));