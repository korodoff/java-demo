// variable: boolean strings number
// rule to assign variable
// 1: keyword variablename=value(value are boolean strings etc)
// 2: keyword should mainly be declarative and use camel case
// 3: keyword are let,var,const
// 4: names are case sensitive

// let:can be declared in a line and the initialized with a value in other line
// also declared and initialized in same line but cannot be redeclared
// variable cannot have similar name

let fName = "krut"; //declared and initialize in same line
let sName; //declared but initialized in a different line
sName = "krut";
console.log(sName);

// const: declared and initialized in same line only
// cannot be redeclared and also cannot be reinitialized
// variable cannot have similar name
const lName = "Gupta";

// let:can be declared in a line and the initialized with a value in other line
// also declared and initialized in same line and can be redeclared
// variable cannot have similar name
var tName= "lana";
var tname = "baby";
var tName;
tName = "honey";
tName = "bunny";
console.log(tname);
