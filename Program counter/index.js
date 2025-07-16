const increment=document.getElementById("inc");

const decrement=document.getElementById("dec");

const res=document.getElementById("reset");

let count=0;

increment.onclick=function(){
    count++;
    document.getElementById("counterlabel").textContent=count;
}

decrement.onclick=function(){
    count--;
    document.getElementById("counterlabel").textContent=count;
}

res.onclick=function(){
    count=0;
    document.getElementById("counterlabel").textContent=count;
}