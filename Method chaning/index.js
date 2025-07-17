// method chaning use for simpliaction and more clear code writing....

let username=window.prompt("Enter your username!");

username=username.trim().charAt(0).toUpperCase()+ username.trim().slice(1).toLowerCase();

console.log(username);

// you can also do all the methods separately but it is not convenient
