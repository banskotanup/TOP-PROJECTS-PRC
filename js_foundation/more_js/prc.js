let age = prompt("What's your age?", 18);
let welcome = (age>18) ?
() => alert(`Cong! You're ${age} years old.`):
() => alert('Sorry you are not that age anymore.')
welcome();

let sum = (a, b)=> alert(a+b);
sum(1,2);

function mul(a, b){
    return a*b;
}
alert(mul(2,3));