

let array = [];
for (i = 200; i <= 300; i++) {
    array.push(i);
}

array.forEach(function(value, index) {
    
    let answer = '';

    let Fizz = value % 3;
    let Buzz = value % 5;
    let Bang = value % 7;
    let Bong = value % 11;
    let Fezz = value % 13;
    let Reverse = value % 17;
    
    if (Fizz == 0) {
        answer += "Fizz";
    }    
    if (Fezz == 0) {
        answer += 'Fezz';
    }
    if (Buzz == 0) {
        answer += "Buzz";
    }
    if (Bang == 0) {
        answer += 'Bang';
    }
    if (Bong == 0 && Fezz == 0) {
        answer += 'Bong';
    } else if (Bong == 0){
        answer = 'Bong';
    }
    if (Reverse == 0 && answer != ''){
        
        let oldString1 = answer.substring(0,4);
        let oldString2 = answer.substring(4,8);
        let oldString3 = answer.substring(8,12);

        answer = oldString3 + oldString2 + oldString1

    }
    if (answer != '') {
    array.splice(index, 1, answer);
    }
}
)

console.log(array);