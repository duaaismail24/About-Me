'use strict';
var userName = prompt('what is your name ?');

while (parseInt(userName)) {
    userName = prompt('write your name correctly please');
}

alert('welcome' + "  " + userName + '  ' + 'Lets see how much you can guse information about me !');

var counter = 0

///Q1
var quize1 = prompt('Do you think that Im a healthy person?');
console.log(quize1);
quize1 = quize1.toLowerCase();
switch (quize1) {
    case 'yes':
    case 'y':
        case 'YES':
            case 'Y':
    alert('Right .. 80% yes Iam *.*');
    alert("Your score is: " + counter++);
break;
    case 'NO':
    case 'n':
    case 'no':
    case 'N':
     alert('Seriously !!');
     break;
     default:
         alert("Answer with yes or no please");
}

    var quize2 = prompt("Do you think that I go to GYM ?");
   console.log(quize2);
    quize2 = quize2.toLowerCase();
    switch (quize2) {
        case 'yes':
        case 'y':
            case 'YES':
                case 'Y':

        alert('Yes .. Although I don\'t go there regularly');
        alert("Your score is: " + counter++);
    break;
        case 'NO':
        case 'n':
        case 'no':
        case 'N':
         alert('"COMMON !!" !!');
         break;
         default:
             alert("Answer with yes or no please");

    }

        var quize3 = prompt( 'do you think that I like English');
        console.log(quize3);
        quize3 = quize3.toLowerCase();
        switch (quize3) {
            case 'yes':
            case 'y':
                case 'YES':
                    case 'Y':

            alert('yes I do !');
            alert("Your score is: " + counter++);

            break;
            case 'NO':
            case 'n':
            case 'no':
            case 'N':
             alert('"COMMON !!" !!');
             break;
             default:
                 alert("Answer with yes or no please");

        }


        var quize4 = prompt( 'Do you think that I have a pet?');
        console.log(quize4);
        quize4 = quize4.toLowerCase();
        switch (quize4) {
            case 'yes':
            case 'y':
                case 'YES':
                    case 'Y':

            alert('Oops I don\'t, a bug could make me run for 500 mile hhhh!!');
            alert("Your score is: " + counter++);
            break;
            case 'NO':
            case 'n':
            case 'no':
            case 'N':
             alert('Right gussing');
             break;
             default:
                 alert("Answer with yes or no please");

        }
        var quize5 = prompt( 'Do you think that I graduated?');
        console.log(quize5);
        quize5 = quize5.toLowerCase();
        switch (quize5) {
            case 'yes':
            case 'y':
                case 'YES':
                    case 'Y':

            alert('yes i did it on January');
            alert("Your score is: " + counter++);
            break;
            case 'NO':
            case 'n':
            case 'no':
            case 'N':
             alert('wrong"');
             break;
             default:
                 alert("Answer with yes or no please");

        }
        function myhighest() {
            
       
for (var times = 0; times < 4; times++) {
    var highest = prompt("Guess what is my tall ! Remember  : You have only 4 trials, Hint: its between 160-167")
    if (highest == 163) {
        alert("Great! Its 163 ");
        
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
}
myhighest();
alert('Its 163, in the average right');
alert('Your score is: ' + counter++);
function fruit() {
    

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
}
fruit();
    alert("  My favorite fruites are grape, mango, strawberries, banana, orange, apple");

alert("You got " + counter + " points .. I Hope you enjoed it");
alert("Happy for being you here " + user);
