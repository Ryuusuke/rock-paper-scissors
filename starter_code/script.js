var userPoint = 0;
var aiPoint = 0;


// This function returns the selection of the computer
function getAISelection() {
    var rpsComputer = Math.random();
    if (rpsComputer < .33) {
        return "rock";
    } else if (rpsComputer <= .67) {
        return "paper";
    } else {
        return "scissor";
    }
}

// This function picks the winner
function pickWinner(userValue, aiValue) {
    //TODO: pick the correct winner: user or ai
    //TODO: Add one point for the winner
    if (userValue == "rock") {
        if (aiValue == "scissor") {
            //alert("Player 1 Wins!")
            userPoint ++;
            return "user";
        } else if (userValue == "scissor"){
            if (aiValue == "rock") {
            //alert("Computer Wins")
                aiPoint ++;
            }
        }
    }
    if (userValue == "scissor") {
        if (aiValue == "paper") {
            //alert("Player 1 Wins!")
            userPoint ++;
            return "user";
        } else if (userValue == "paper") {
            if (aiValue == "scissor") {
            //alert("Computer Wins!")
                aiPoint++;
            }
        }
    }
    if (userValue == "paper") {
        if (aiValue == "rock") {
            //alert("Player 1 Wins!")
            userPoint ++;
            return "user";
        } else if (userValue == "rock"){
            if (aiValue == "paper") {
            //alert("Computer Wins!")
            aiPoint ++;
            }
        }
    }
    if (userValue == aiValue) {
       return "draw";
    }
  //   if (userValue == "rock") {
  //      if (aiValue == "rock") {
            //alert("tie")
   //         return "draw";
   //     }
  //  }
 //    if (userValue == "paper") {
 //       if (aiValue == "paper") {
            //alert("tie")
 //           return "draw";
 //       }
 //   }
}

// This function sets the scoreboard with the correct points
function setScore() {
    $('#userPoint').html(); 
}

// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue);
    //var winner = "user";

    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won!, Click a box to play again');
    } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
    }
}

// This function runs on page load
$(document).ready(function(){
    $(".token").click(function(evt) {
        evaluate(evt);
    })
});
