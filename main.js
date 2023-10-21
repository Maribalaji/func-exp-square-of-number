let a=parseInt(prompt("enter a number"));
let square=function(a){
    return a*a
}
console.log(square(a));
document.write(`The given number is ${a} <br> The square of number is ${square(a)}`)