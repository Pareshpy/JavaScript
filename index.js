let count = 0;
let sum = 0;
let save_el = document.getElementById("save");
let count_el = document.getElementById("count");
let sum_el = document.getElementById("sum");
// document.getElementById("count").innerHTML = num;
console.log(count);

function increment(){
    count += 1;
    count_el.textContent = count;
}

// function saving(){
//     let massage = "Something went wrong please try again later";     // an error massage has been showed
//     document.getElementById("save").innerText = massage;
// }
function saving(){
    sum = count + sum;
    let str_sum = sum;
    let count_str = count + " - ";
    save_el.textContent += count_str;
    document.getElementById("count").innerText = 0;
    // document.getElementById("sum").innerText = sum;
    sum_el.textContent += sum;
    count = 0;
}

function reset(){
    document.getElementById("count").innerText = 0;
    count = 0;
    save_el.textContent = " "
}
