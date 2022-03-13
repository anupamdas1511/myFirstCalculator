const panel = document.getElementById("panel");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let ce = document.getElementById("ce");
let back = document.getElementById("back");
let dot = document.getElementById("dot");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let mul = document.getElementById("mul");
let div = document.getElementById("div");
let enter = document.getElementById("enter");

one.addEventListener("click", ()=>{
    panel.innerHTML = panel.innerHTML + 1;
});
two.addEventListener("click", ()=>{
    panel.innerHTML = panel.innerHTML + 2;
});
three.addEventListener("click", ()=>{
    panel.innerHTML = panel.innerHTML + 3;
});
four.addEventListener("click", ()=>{
    panel.innerHTML = panel.innerHTML + 4;
});
five.addEventListener("click", ()=>{
    panel.innerHTML = panel.innerHTML + 5;
});
six.addEventListener("click", ()=>{
    panel.innerHTML = panel.innerHTML + 6;
});
seven.addEventListener("click", ()=>{
    panel.innerHTML = panel.innerHTML + 7;
});
eight.addEventListener("click", ()=>{
    panel.innerHTML = panel.innerHTML + 8;
});
nine.addEventListener("click", ()=>{
    panel.innerHTML = panel.innerHTML + 9;
});
zero.addEventListener("click", ()=>{
    panel.innerHTML = panel.innerHTML + 0;
});
ce.addEventListener("click",()=>{
    panel.innerHTML = "";
});
back.addEventListener("click", ()=>{
    panel.innerHTML = panel.innerHTML.slice(0, -1);
});
plus.addEventListener("click", ()=>{
    panel.innerHTML = panel.innerHTML + '+';
});
minus.addEventListener("click", ()=>{
    panel.innerHTML = panel.innerHTML + '-';
});
mul.addEventListener("click", ()=>{
    panel.innerHTML = panel.innerHTML + 'x';
});
div.addEventListener("click", ()=>{
    panel.innerHTML = panel.innerHTML + '/';
});
dot.addEventListener("click", ()=>{
    panel.innerHTML = panel.innerHTML + '.';
});
enter.addEventListener("click", ()=>{
    let num1, num2;
    let op = ['+', '-', 'x', '/'];
    var i = 0;
    while(i<4){
        if(panel.innerHTML.includes(op[i])){
            let ind = panel.innerHTML.indexOf(op[i]);
            num1 = parseInt(panel.innerHTML.substring(0, ind));
            num2 = parseInt(panel.innerHTML.substring(ind+1, panel.innerHTML.length));
            switch(op[i]){
                case '+':
                    panel.innerHTML = num1+num2;
                    break;
                case '-':
                    panel.innerHTML = num1-num2;
                    break;
                case 'x':
                    panel.innerHTML = num1*num2;
                    break;
                case '/':
                    panel.innerHTML = num1/num2;
                    break;
            }
            // let res = num1 + num2;
            // console.log(res);
        }
        i++;
    }

});