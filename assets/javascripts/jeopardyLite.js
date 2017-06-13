


(function() {
  //code inside here will only run once the entire page is loaded
  window.onload = function(){

    let score = $("#moneyEarned");
    let category = $("#category");
    let value = $("#value");
    let question = $("#question");
    let guessText = $("#guessText");
    let answerButton = $("#answer-button");
    let answer;

    //**
    //* Puts different text
    //* @param {String} text the stuff you want to put in the box
    //*/
    function setText(text) {
     return $('#guessText').val(text);
    }

    function poseQuestion() {
      $.get( "http://jservice.io/api/random", function( data ) {
          //console.log(data);
          //console.log(data[0].question);
          //console.log(data[0].category.title);
          //console.log(data[0].value);
          console.log(data[0].answer);
          category.html(data[0].category.title);
          value.html(data[0].value);
          question.html(data[0].question);
          answer = data[0].answer;
          //guessText.html("My Answer is: ");
          //setText("My Answer is: ");

      })
    }

    poseQuestion();

    answerButton.click (function() {
      let submittedAnswer = guessText.val();
      //console.log("guessText = " + guessText.val());
      if (guessText.val() == answer) {
        console.log("the answer was right")
        let newScore = parseInt(score.html()) + parseInt(value.html());
        score.html(newScore);

      } else {
        console.log("the answer is not right. Guess was " + guessText.val() + " ; answer was " + answer);
      }

      poseQuestion();

    })

  }

})();
