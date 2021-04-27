function addWords(obj, wrds) {
   let objText = obj.words.toString();
   let arryText = wrds.toString().trim();
   let textAll = `${objText} ${arryText}`;
   let splText = textAll.split(' ');
   splText.splice(2, 1);
   splText.splice(0, 1);
   splText.pop();
   obj.words = splText.toString().replaceAll(',', ' ');
}

function removeWords(obj, wrds) {
   let objText = obj.words.toString();
   let arryText = wrds.toString();
   let textAll = `${objText} ${arryText}`;
   let splText = textAll.split(' ');
   splText.splice(0, 1);
   splText.splice(2, 5);
   obj.words = splText.toString().replaceAll(',', ' ');
}

function changeWords(obj, oldWrds, newWrds) {
   let objText = obj.words.toString();
   let textAll = `${objText} ${oldWrds} ${newWrds}`;
   let splText = textAll.split(' ');
   splText.splice(0, 6);
   obj.words = splText.toString().replaceAll(',', ' ');
}