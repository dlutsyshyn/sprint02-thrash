let beginRange = prompt("Перше число:"),
   endRange = prompt("Останнє число:");

checkDivision(beginRange, endRange);

function checkDivision(beginRange, endRange) {

   let empty = "";

   for (beginRange; beginRange <= endRange; beginRange++) {

      if (beginRange % 10 == 0 && beginRange % 3 == 0 && beginRange % 2 == 0 && beginRange >= 1 && beginRange <= 100) {
         empty += beginRange + " is even, a multiple of 3, a multiple of 10";
      } else if (beginRange % 3 == 0 && beginRange >= 1 && beginRange <= 100) {
         empty += beginRange + " is a miltiple of 3";
      } else if (beginRange % 2 == 0 && beginRange >= 1 && beginRange <= 100) {
         empty += beginRange + " is even";
      } else if (beginRange > 100 || beginRange < 1) {
      } else {
         empty += beginRange + " - ";
      }

      if (beginRange > 100 || beginRange < 1) {
      } else {
         empty += "\n";
      }
   }
   console.log(empty);
};