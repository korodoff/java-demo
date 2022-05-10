// console.log("hello")
// let N = "abcadeecfb";
// let res = N.split("")
// let uni = "";
// for(let i=0; i<=res.length; i++){
//      if(res.lastIndexOf(str[i])=== res.indexOf(str[i])) {
//             uni+= res[i];
//         }
// }
// console.log(uni);



let r = "abcadeecfb";
let rest = r.split('').filter((item, pos ,self)=> {
    return self.indexOf(item) ==  pos;
}).join('');
console.log(rest);
let app = r.map((e)=>{
    for(let i of e){

    }
})

let set = new Set();
set.add("a");
set.add("b");
set.add("c");
set.add("a");
set.add("d");
set.add("e");
set.add("e");
set.add("c");
set.add("b");
set.add("f");


console.log(set)

// let uniqueCount = ["a","b","c","a","d","e","e","c","f","b"];
// var count = {};
// uniqueCount.forEach(function(x) { count[x] = (count[x]||0) + 1;});
// console.log(count);




var s="abcadeecfb";
function prCharWithFreq(s)
{
// Store all characters and
// their frequencies in dictionary
var d = new Map();

s.split('').forEach(element => {
 
    if(d.has(element))
    {
        d.set(element, d.get(element)+1);
    }
    else
        d.set(element, 1);
});

// Print characters and their
// frequencies in same order
// of their appearance

s.split('').forEach(element => {
// Print only if this
// character is not printed
// before
if(d.has(element) && d.get(element)!=0)
{
  document.write( element + d.get(element) + " ");
  d.set(element, 0);
}
});
}
prCharWithFreq(s);
