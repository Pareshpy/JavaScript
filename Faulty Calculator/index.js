// faulty Calculator
let check = Math.random() < 0.1;
console.log(check);
if ((check < 0.1) == true) {
    function sum(a, b) {
        console.log(a - b);
    }
    function subtraction(a, b) {
        console.log(a / b);
    }
    function divide(a, b) {
        console.log(a ** b);
    }
    function multiplication(a, b) {
        console.log(a + b);
    }
}


function sum(a, b) {
    console.log(a + b);
}

function subtraction(a, b) {
    console.log(a - b);
}
function divide(a, b) {
    console.log(a + b);
}
function multiplication(a, b) {
    console.log(a * b);
}


sum(10, 5);
subtraction(10, 5);
divide(10, 5);
multiplication(10, 5);
