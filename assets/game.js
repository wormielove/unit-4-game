$(document).ready(function() {
   
    
    var targetNumber = 0;
    var userScore = 0;
    var wins = 0;
    var losses = 0;
  
    function startGame () {
        targetNumber = Math.floor(Math.random() * 25);
        $("#target").text(targetNumber);
        $("#score-numbers").text(userScore);
        //note to self: line 11 can be re-written in vanilla JS to be:
        //document.getElementById('target').text = targetNumber;
        console.log('targetNumber is', targetNumber);
        
    }

    startGame();

  
    //targeting any element with a class of crystal    
    $('.crystal').on('click', function(){

        console.log('targetNumber check', targetNumber);

        //when an element with a class of .crystal is clicked, get the value of the data-val attribute
        var crystalVal = $(this).data('val');
        console.log('crystalVal is', crystalVal);

        //update the userScore to add crystalVal
        userScore = userScore + crystalVal;
        console.log('userScore is', userScore);
        $("#score-numbers").text(userScore);

        if (userScore === targetNumber){
            wins++;
            console.log('User Wins');
            $("#wins").text("wins: " + wins);
        }
        else if (userScore >= targetNumber){
            losses++
            console.log ('User Loses');
            $("#losses").text("losses: " + losses);
        }
       })
  
    

}); //END document ready


//randomly generate a number when the game is launched and put it in the "sum" field (change name of sum field tomorrow)

//on click command for each crystal button

//add the value of the crystal that is clicked each time one is clicked 

//put the sum as it is added in the "score-numbers" id field

//when the number equals 39 register a win

//when the number goes over 39 register a loss

//when a win or loss is registered, reset the counter
