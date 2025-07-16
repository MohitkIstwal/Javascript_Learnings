// There are 2 ways to get user input 

// 1) Easy way - using window.prompt

// let username;

// username= window.prompt("Whats the username??");

// console.log(username);

// 2) Professional way - using button of submit


let username;

document.getElementById("b1").onclick = function(){
    username = document.getElementById("but").value;

    document.getElementById("MYh").textContent= `Hello ${username} :-)`;
}

// used onclick and then created a func (){
//     in which the certain function was written
// }

