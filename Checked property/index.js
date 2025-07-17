// .checked property returns true false for checked condition of a checkbox or radio buttons

const mysubmit=document.getElementById("mysubmit");
const mycheck=document.getElementById("mycheck");
const myvisa=document.getElementById("myvisa");
const myMS=document.getElementById("myMS");
const myrazorpay=document.getElementById("myrazorpay");
const myp1=document.getElementById("myp1");
const myp2=document.getElementById("myp2");

mysubmit.onclick= function(){
    if(mycheck.checked){
        myp1.textContent="You have subscribed";
    }
    else{
        myp1.textContent="You have NOT subscribed";
    }


    if (myvisa.checked) {
        myp2.textContent = "You are paying with Visa";
    } else if (myMS.checked) {
        myp2.textContent = "You are paying with Mastercard";
    } else if (myrazorpay.checked) {
        myp2.textContent = "You are paying with Razorpay";
    } else {
        myp2.textContent = "Please select a payment method";
    }
}
