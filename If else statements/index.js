// If else statements

// similar to c++ . exact same

const mylabel=document.getElementById("mylabel");
const mybutton=document.getElementById("mybutton");
const myp=document.getElementById("myp");

let age;

mybutton.onclick = function(){
    age=mylabel.value;
    age=Number(age);

    if(age>100){
        myp.textContent="Too old!!";
    }
    else if(age>=18){
        myp.textContent="You can enter this site";
    }
    else if(age<18 && age>0){
        myp.textContent="Should be 18+ to enter this site";
    }
    else{
        myp.textContent="Invalid age";
    }
}