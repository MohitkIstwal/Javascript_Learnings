// Loops same as of c++ ....while loop as well as for loop

// same syntax can use break,continue also

// while loop

let age=0;

// while(age!=0){
//     console.log("value is not zero");
//     age=window.prompt("Enter the age");
// }
// console.log(age);

// mostly do while loop is preferred as the first statemnet is always executed 

do{
    if(age!=0){
        console.log("value is not zero");
    }
    age=window.prompt("Enter the age");
}
while(age!=0)
console.log(age);


// for loop - similar to c++

for(let i=0;i<10;i++){
    if(i==4){
        continue;
    }
    // if(i==2){
    //     break;
    // }
    console.log(i+1);
}