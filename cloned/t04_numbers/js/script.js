let startArg = (Number(prompt('Set first argument: ')))
    endArg = (Number(prompt('Set second argument: ')))
    range = '';

if ((endArg - startArg) > 100) {
    alert('Try to pick smaller range!')
} else if ((startArg == 0) || (endArg == 0)) {
    alert('Nope, not today!')
} else {
    while (startArg <= endArg) {
    let info = '';
    if (startArg % 2 == 0) {
        info += ' _is even_ ' 
    }
    if (startArg % 3 == 0) {
        info += ' _is multiple of 3_ '
    }
    if (startArg % 10 == 0) {
        info += ' _is multiple of 10_ '
    }
    else if (!(startArg % 2 == 0) && !(startArg % 3 == 0) && !(startArg % 2 == 0)) {
        info += ' _@@@_ '
    }   
    range += startArg + info + '\n'; 
    startArg++;
}
}
alert('Open console to see a result!');
console.log('The input range is: ' + '\n' + range);

