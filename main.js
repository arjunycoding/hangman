let words = ["wafffles", "amazing", "hangman", "ruler"];
let word = words[Math.floor(Math.random() * words.length)]
let answerArray = [];
let remainingLetters = word.length;
for(let i = 0; i < word.length; i++){
    answerArray[i] = "_";
}

while(remainingLetters > 0){
    alert(answerArray.join(" "));
    let guess = prompt("Guess a letter, or click Cancle to stop playing")
    if(guess == null){
        break;
    } else if(guess.length !== 1){
        alert("please enter a single letter");
    } else {
        for(let j = 0; j < word.length; j++){
            if(word[j] === guess){
                answerArray[j] = guess;
                remainingLetters--;
            }
    }
    }
    
}

console.log(`hello ${answerArray}`);
alert(answerArray.join(" "))
alert("Good Job The answer was " + word)