console.log('☀');


var number1 = "";
var number2 = "";
var operator = "";


function concatNumber(single){
    if(operator==""){
        number1 = number1+single
        display(number1)
    } else {
        number2 = number2+single
        display(number2)
    }
}

function setOperator(new_operator) {
    operator = new_operator;
}

function deleteLastDigit(){
    if(operator==""){
        number1 = number1.slice(0, -1)
        display(number1)
    } else {
        number2 = number2.slice(0, -1)
        display(number2)
    }
}

function deleteALL(){
   if(operator==""){
    number1="";
    display(number1)
   } else {
    number2="";
    display(number2)
   }
}

function add(num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var sum = num1 + num2; 
    return sum;
}
function subtract(num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var sum = num1 - num2; 
    return sum;
}

function mul(num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var multi=num1 * num2;
    return multi;
}
function div(num1, num2){
    num1=parseInt(num1);
    num2=parseInt(num2);
    var bhag=num1/num2;
    return bhag;
}
function result(){
    if(operator=="+"){
        var sm=add(number1,number2);
        number1=sm;
        number2="";
        operator="";
        display(number1);
    }
    if(operator=="-"){
       var su=subtract(number1,number2);
       number1=su;
       number2="";
       operator="";
       display(number1);
    }
    if(operator=="x"){
        var mu=mul(number1,number2);
        number1=mu;
        number2="";
        operator="";
        display(number1);
    }
    if(operator=="/"){
        var di=div(number1, number2);
        number1=di;
        number2="";
        operator="";
        display(number1);
    }
}

function display(num) {
    var para = document.getElementById('output');
    para.innerText = num;
}


// function concatNumber(single_digit) {
//     if(operator == "") {
//         number1 = number1 + single_digit;
//         display(number1);
//     } else {
//         number2 = number2 + single_digit;
//         display(number2);
//     }
   
// }
// function deleteLastDigit() {
//     if(operator == "") {
//         number1 = number1.slice(0, -1);
//         display(number1);
//     } else {
//         number2 = number2.slice(0, -1);
//         display(number2);
//     }
    
// }


// function clearAll() {
//     if(operator == "") {
//         number1 = "";
//         display(number1);
//     } else {
//         number2 = "";
//         display(number2);
//     }
    
// }


// function equals() {
//     if(operator == "+") {
//         number1 = add(number1, number2);
//         number2 = "";
//         operator = "";
//         display(number1);
//     } else if(operator == "*") {

//     }
// }



