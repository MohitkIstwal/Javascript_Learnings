// Random number generator

const mybutton= document.getElementById("but");
const l1= document.getElementById("label1");
const l2= document.getElementById("label2");
const l3= document.getElementById("label3");

let min=1;
let max=6;
let random1;
let random2;
let random3;


mybutton.onclick = function(){
    random1= Math.floor(Math.random()*max)+min;
    random2= Math.floor(Math.random()*max)+min;
    random3= Math.floor(Math.random()*max)+min;


    l1.textContent=random1;
    l2.textContent=random2;
    l3.textContent=random3;
}