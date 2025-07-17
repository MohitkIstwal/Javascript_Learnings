//String slicing ;- substring niklana kisi string se 

// syntax = String.slce(StaticRange,end) 

let username= "Mohit Kumar";

console.log(username.slice(0,username.indexOf(" ")));

console.log(username.slice(username.indexOf(" ")+1));

console.log(username.slice(-2));

// -ve index starts from the end 