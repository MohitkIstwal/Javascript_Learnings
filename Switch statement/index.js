// Switch case is an efficient replacemnt when using mulitple else if conditions..

let day=5;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log(`${day} is not a day`);
        break;
}