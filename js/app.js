'use strict';
var userName = prompt('what is your name ?');

while (parseInt(userName)) {
    userName = prompt('write your name correctly please');
}

alert('welcome' + "  " + userName + '  ' + 'Lets see how much you can guse information about me !');

var counter = 0;

var quize = [
    ["Do you think that I'm a healthy person?", "Right .. 80% yes Iam *.*", " wrong ,I could be ill ", "Try again"], ["Do you think that I go to GYM ?", "Yes .. Although I don\'t go there regularly ", "COMMON !!", "Try again"], ["do you think that I like English?", "yes I do !", "wrong Iam in love with it", " Try again"], [" Do you think that I have a pet??", "Oops I don\'t, a bug could make me run for 500 mile hhhh!!", "wrong ", " Try again"], ["do you think that my hoppy is playing chess?", " yup , once I was on the top in my university ", "wrong", "Try again"], ["Do you think that im graduated?", "yes i did it on January", "wrong", "Try again"]]
function guse() {
    for (var i = 0; i < 5; i++) {
        var exactArray = quize[i];
        var questions = exactArray[0];
        var posetive = exactArray[1];
        var negative = exactArray[2];
        var defultReply = exactArray[3];
        var userName = prompt(questions);
        userName = userName.toLowerCase();
        switch (userName) {
            case "yes":
            case "y":
                alert(posetive);
                counter = counter + 1;
                //    console.log(userName);
                break;
            case "no":
            case "n":
                alert(negative);
                console.log(userName);
                break;
            default:
                alert(defultReply);
                //  console.log(userName);
                break;
        }
    }
}
guse();
alert("Your score is: " + counter);
//6
function high() {
    for (var high = 0; high < 4; high++) {
        var highest = prompt("Guess what is my tall ! Remember  : You have only 4 trials, Hint: its between 160-167")
        if (highest == 163) {
            alert("Great! Its 163 ");
            counter = counter + 1;
            // console.log(old);
            break;
        } else if (highest > 163) {
            alert("too high");
            //    console.log(old);
        } else if (highest < 163) {
            alert(" too low");
            //    console.log(old);
        }
    }
    alert("Your score is: " + counter);
}
high();


function playingGame() {
    var play = ['grape', 'mango', 'strawberries', 'banana', 'orange', 'apple'];
    for (var trailes = 0; trailes < 6; trailes++) {
        var goPlay = prompt("And now you have to gusse which fruits are my favorite?");
        switch (goPlay) {
            case play[0]:
            case play[1]:
            case play[2]:
            case play[3]:
            case play[4]:
            case play[5]:
                alert(" awesome *.* My favorite fruites are grape, mango, strawberries, banana, orange, appel");
                counter = counter + 1;
                //console.log(goPlay);
                trailes = 5;
                break;
            default:
                alert("Ooooops .. Try again ")
                // console.log(play);
                break;
        }
    }
    alert("  My favorite fruites are grape, mango, strawberries, banana, orange, apple");
}
playingGame();

alert("You got " + counter + " points .. I Hope you enjoed it");
alert("Happy for being you here " + user);
