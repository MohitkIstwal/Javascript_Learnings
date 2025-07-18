// temperature converter

const mytext=document.getElementById("mytext");

const toF=document.getElementById("toF");

const toC=document.getElementById("toC");

const myP=document.getElementById("myP");

let temp;

function convert(){
    if(toF.checked){
        temp=Number(mytext.value);
        temp = 9/5*temp+32;
        myP.textContent=temp + "°F";
    }
    else if(toC.checked){
        temp=Number(mytext.value);50
        temp = ((temp-32)*5)/9;
        myP.textContent=temp + "°C";
    }
    else{
        myP.textContent="Please select a temp converison";
    }
}