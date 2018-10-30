


let array = [];
for (i = 100; i <= 200; i++) {
    array.push(i);
}

array.forEach(function(value, index) {
    
    let answer = '';

    let Fizz = value % 3;
    let Buzz = value % 5;
    let Bang = value % 7;
    let Bong = value % 11;
    let Fezz = value % 13;
    
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
    if (answer != '') {
    array.splice(index, 1, answer);
     }
    }
)

console.log(array);