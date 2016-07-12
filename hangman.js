var hangmanArray = [
    [
    
    ' 000000000000000000000000000000000',
    ' 0                   0           0',
    ' 0           1   1   0           0',
    ' 0         1       1 0           0',
    ' 0           1   1   0           0',
    ' 0                   0           0',
    ' 0                   0           0',
    ' 0                 0 0 0         0',
    ' 0                0  0  0        0',
    ' 0               0   0   0       0',
    ' 0                   0           0',
    ' 0                 0   0         0',
    ' 0               0       0       0',
    ' 0             0           0     0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 000000000000000000000000000000000',
],
[
    
    ' 000000000000000000000000000000000',
    ' 0                   0           0',
    ' 0                   1           0',
    ' 0                 1   1         0',
    ' 0                   1           0',
    ' 0                   0           0',
    ' 0                   0           0',
    ' 0                 0 0 0         0',
    ' 0                0  0  0        0',
    ' 0               0   0   0       0',
    ' 0                   0           0',
    ' 0                 0   0         0',
    ' 0               0       0       0',
    ' 0             0           0     0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 000000000000000000000000000000000',
],
[
    
    ' 000000000000000000000000000000000',
    ' 0                   0           0',
    ' 0                   1           0',
    ' 0                 1   1         0',
    ' 0                   1           0',
    ' 0                   0           0',
    ' 0                   0           0',
    ' 0                 0 0 0         0',
    ' 0                0  0  0        0',
    ' 0               0   0   0       0',
    ' 0                   0           0',
    ' 0                 0             0',
    ' 0               0               0',
    ' 0             0                 0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 000000000000000000000000000000000',
],
[
    
    ' 000000000000000000000000000000000',
    ' 0                   0           0',
    ' 0                   1           0',
    ' 0                 1   1         0',
    ' 0                   1           0',
    ' 0                   0           0',
    ' 0                   0           0',
    ' 0                 0 0 0         0',
    ' 0                0  0  0        0',
    ' 0               0   0   0       0',
    ' 0                   0           0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 000000000000000000000000000000000',
],
[
    
    ' 000000000000000000000000000000000',
    ' 0                   0           0',
    ' 0                   1           0',
    ' 0                 1   1         0',
    ' 0                   1           0',
    ' 0                   0           0',
    ' 0                   0           0',
    ' 0                 0 0           0',
    ' 0                0  0           0',
    ' 0               0   0           0',
    ' 0                   0           0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 000000000000000000000000000000000',
],
[
    
    ' 000000000000000000000000000000000',
    ' 0                   0           0',
    ' 0                   1           0',
    ' 0                 1   1         0',
    ' 0                   1           0',
    ' 0                   0           0',
    ' 0                   0           0',
    ' 0                   0           0',
    ' 0                   0           0',
    ' 0                   0           0',
    ' 0                   0           0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 000000000000000000000000000000000',
],
[
    
    ' 000000000000000000000000000000000',
    ' 0                   0           0',
    ' 0                   1           0',
    ' 0                 1   1         0',
    ' 0                   1           0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 000000000000000000000000000000000',
],
    [
    ' 000000000000000000000000000000000',
    ' 0                   0           0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 0                               0',
    ' 000000000000000000000000000000000',
],
];

var prompt = require('prompt');
var wordList = ['volcano', 'clarinet', 'dennis', 'ziad', 'superman', 'beer', 'dinosaur', 'undefined', 'kara'];
var randomNumber = Math.floor(Math.random() * 9);
var randomWord = wordList[randomNumber];
console.log(randomNumber);
var letter = randomWord.split('');
var lives = 7;

function getAGuess(){
    var incorrectLetters = [];
    var correctLetters = [];

    prompt.get('guess', function(err, answer){

    if (err){
        console.log('You made an incorrect guess!');
    }
    else if (letter.indexOf(answer.guess) > -1) {
        correctLetters.push(answer.guess);
        console.log("These are your correct guesses : " + correctLetters);
        getAGuess();
    } else {
        incorrectLetters.push(answer.guess);
        console.log("These are the letters you guessed incorrectly: " + incorrectLetters);
        
        if(lives > 0){
            lives--;
            console.log(hangmanArray[lives]);
            console.log("You have " + lives + " guesses left!");
            getAGuess();
        }
    }
    });
}

console.log(hangmanArray[7]);
getAGuess();
