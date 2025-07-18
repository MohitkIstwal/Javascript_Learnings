// NUMBER GUESSING GAME

const min=1;
const max=100;
const random=Math.floor(Math.random()*(max-min+1))+min;

let guess;
let attempt=0;
let running = true;

while(running){
    guess = window.prompt("Enter a number between 1 and 100");
    guess=Number(guess);
    attempt++;


    if(isNaN(guess) || guess<min || guess>max){
        window.alert(`Invalid number .... Try again`);
    }
    else{
        if(guess==random){
            window.alert(`Hooray!! It took you ${attempt} attempts to find the answer`);
            running=false;ook
        }
        else if(guess<random){
            window.alert(`TOO LOW!! Try Higher`);
        }
        else{
            window.alert(`TOO HIGH!! Try lower`);
        }
    }
}