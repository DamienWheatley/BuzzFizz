


let array = [];
for (i = 1; i <= 10; i++){
    array.push(i);
}

array.forEach(function(value, index) {
    console.log(value);
    
    let remainderMod3 = value % 3;
    let remainderMod5 = value % 5;

    if (remainderMod3 == 0){
        array.splice(index,1,'Fizz');
    } else if (remainderMod5 == 0){
        array.splice(index,1,'Buzz');
    } else if (remainderBoth == 0){
        array.splice(index,1,'BuzzFizz');
    }
})

console.log(array);