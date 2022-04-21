let numb = 10;
console.log(numb)
function square(n){
    let result= n*n;
    return result;
}
let number = square(4);
console.log(number);
// creation phase -- allocate memory to variables & function definitions are allocated to name of functions
// exact value are not assigned to variables , default value is assigned = "undefined"

// execution phase -- exact value will be allocated to variables , undefined will be removed & overwriten with exact value.
// once functions are called then only they'll have the exact value. 

// call stack -- follows last in first out , operations go into the stack in order they're written and come out of the stack in reverse order.
// last element in the stack will be executed first , first element in the stack will be executed last.