const increment=document.getElementById("inc");

const decrement=document.getElementById("dec");

const res=document.getElementById("reset");

const lab=document.getElementById("counterlabel");

let count=0;

increment.onclick=function(){
    count++;
    lab.textContent=count;
}

decrement.onclick=function(){
    count--;
    lab.textContent=count;
}

res.onclick=function(){
    count=0;
    lab.textContent=count;
}