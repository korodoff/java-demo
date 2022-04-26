// if else statement
// if{
//     condition...
// }else{
//     statement
// }
function rio(a,b){
    if(a>b){
        console.log("a is bigger")
    }else{
        console.log("b is bigger")
    }
}
rio(2,3);
// else if condition
// if{
//     statement
// }else if {
//     statement
// }else{
//     statement always have to end with else statement
// }
function rie(d,e){
    if(d&e== 0){
        console,log("true")
    }else if(d|e ==0){
        console.log("OK")
    }else{
        console.log("wrong")
    }
}
rie(2,4)

// switch statement
const n = Math.floor(Math.random() * (10 - 1)) + 1;
console.log(n);
switch(true){
    case n <= 4: 
        console.log("no less than 4");
        break;
    case n >= 8: 
        console.log("no is greater than 8");
        break;
    case n >= 5 && n <= 7: 
        console.log("its between 5 &7");
        break;
    default:
        console.log("error")
}

// Set the student's grade
const grade = 87;

switch (true) {
	// If score is 90 or greater
	case grade >= 90:
		console.log("A");
		break;
	// If score is 80 or greater
	case grade >= 80:
		console.log("B");
		break;
	// If score is 70 or greater
	case grade >= 70:
		console.log("C");
		break;
	// If score is 60 or greater
	case grade >= 60:
		console.log("D");
		break;
	// Anything 59 or below is failing
	default:
		console.log("F");
}