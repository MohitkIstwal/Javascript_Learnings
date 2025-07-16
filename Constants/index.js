// using const keyword the value of a variable doesnt change used for variables whose value doesn't change throughout the file 

// naming convention is all caps 

const PI=3.144;
let radius;
let area;
let circumference;

// if we try to update the const value it will not work and the console will throw an error 

document.getElementById("but").onclick=function(){
    radius=document.getElementById("box").value;

    radius=Number(radius);
    area=PI*radius**2;
    circumference=2*PI*radius;

    document.getElementById("Myh3").innerHTML = `Area = ${area} cm<sup>2</sup>`;

    document.getElementById("Myh31").innerHTML = `Circumference = ${circumference} cm`;


}