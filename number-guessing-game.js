var prompt = require('prompt');
var randomNumber = Math.floor(Math.random() * 100);
var timesLeft = 4;

function guessNumber(){
prompt.get('guess', function(err, answer){
        if (err){
            console.log('You made an incorrect guess!');
        }
        else if (Number(answer.guess) === randomNumber){
            return (console.log('You won the game!'));
        }
        else if(Number(answer.guess) > randomNumber){
            console.log("Too high! Try again!");
        }
        else{
            console.log("Too low! Try again!");
        }
        if(timesLeft > 0){
            timesLeft--;
            guessNumber();
        }
        else {
           console.log('You lost!');
    }
});
}

guessNumber();

// var prompt = require('prompt');
// var randomNumber = Math.floor(Math.random() * 100);
// // console.log(randomNumber);//uncomment if you want to know the number before you guess!
// var counter = 6function guessNumber(){
// prompt.get('guess', function(err, answer){
//   if (err){
//       console.log('sorry, there was an error');
//   }
//   else if (Number(answer.guess) === randomNumber){//Number() turns the string into a number
//           console.log('Congratulations, you guessed the number!');
//       }
//   else if (Number(answer.guess) > randomNumber){
//           console.log('Oops, your guess is too high');
//   }
//   else {
//           console.log('Oops, your guess is too low!');
//   }
//   if(counter > 0){
//       counter--;
//       guessNumber();
//   }
//   else {
//       console.log('Oops, no more guesses!');
//   }
// });
// }guessNumber()