function adjective(){
    let a="Creazy"
    let b= "Amazing"
    let c= "Fire"
let d=Math.floor(Math.random()*3)
if(d==0){return a}
else if(d==1){return b}
else if(d==2){return c}
}
function shopName(){
    let a="Engine"
    let b= "Foods"
    let c= "Garments"
let d=Math.floor(Math.random()*3)
if(d==0){return a}
else if(d==1){return b}
else if(d==2){return c}
}
function anotherWord(){
    let a="Bros"
    let b= "Limited"
    let c= "Hub"
let d=Math.floor(Math.random()*3)
if(d==0){return a}
else if(d==1){return b}
else if(d==2){return c}
}

console.log("Business Name\n" , adjective(),shopName(),anotherWord() )