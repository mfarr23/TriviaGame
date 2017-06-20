$(document).ready(function(){

// setting viewer equal to test id on html
var viewer = $('#test');
var countStartNumber = 20;

// click events here
// click event to reset game
$(document).on('click', '#start-over', function(e) {
  game.reset();
});

//click answer to guess that answer 
$(document).on('click', '.answer-button', function(e) {
  game.clicked(e);
});

// when start button clicked, add timer and question to screen
$(document).on('click', '#start', function(e) {
  $('#subwrapper').prepend('<h2>Time Left: <span id="counter-number">20</span> Seconds</h2>');
  game.loadQuestion();
});



// variables and functions to be used in game
// object of questions
var questions = [
		{
			question: "Ben's General Store is selling yarn for $.04 a foot. How many feet can you buy for $0.52?", 
			answers: ["13 feet", "10 feet", "15 feet", "8 feet", "12 feet"],
			correctAnswer: "13 feet", 
		},
		{
			question: "Are the following two words similar, contradictory, or not related? Legend, Key", 
			answers: ["similar", "contradictory", "not related"],
			correctAnswer: "similar", 
		},
		{
			question: "Which of these numbers is the smallest?",
			answers: ["0.24", "0.11", "0", "2", "0.02"], 
			correctAnswer: "0", 
		},
		{
			question: "A girl is 21 years old and her brother is a third her age. When the girl is 36, what will be the age of her brother?",
			answers: ["6", "3", "7", "5", "2"], 
			correctAnswer: "2", 
		},
		{
			question: "(15 ÷ 5) x (10 ÷ 2) =",
			answers: ["15", "10", "2.5", "5", "13"], 
			correctAnswer: "15", 
		},
		{
			question: "Are the following two words similar, contradictory, or not related? Familiar, Gallant",
			answers: ["similar", "contradictory", "not related"], 
			correctAnswer: "not related", 
		},
		{
			question: "-57 + -74 =", 
			answers: ["-137", "-17", "17", "-121", "-131"],
			correctAnswer: "-131", 
		},
		{
			question: "Over the course of two weeks, Al spent $105.00 on lunch. What was the average cost per day?", 
			answers: ["$6.50", "$7.50", "$8.05", "$7.50", "$5.75"],
			correctAnswer: "$7.50", 
		},
		{
			question: "Reduce the fraction 21/49 to its lowest terms.", 
			answers: ["5/7", "3/7", "6/9", '21/49'],
			correctAnswer: "3/7", 
		},
		{
			question: "A copy machine repairman makes $12.50 per hour plus $4 for every service call he performs. Last week he worked 34 hours and made 6 service calls. How much money did he make?",
			answers: ["400", "375", "449", "420", "438"], 
			correctAnswer: "449", 
		}];
	var game = {
		currentQuestion: 0,
		correct: 0,
		incorrect: 0,
		// wScore: 0,
		questions: questions,
		counter: countStartNumber,

// function to show timer counting down, and defines what happens when the timer hits 0
	    countdown: function() {
			game.counter--;
		    $('#counter-number').html(game.counter);

		    if (game.counter === 0){
		      console.log('TIME UP');
		      game.timeUp();
		    }
		},

// function to reset timer, load question on screen and the buttons for answers
		loadQuestion: function(){
		console.log(questions[this.currentQuestion]);

		    timer = setInterval(game.countdown, 1000);
		    viewer.html('<h2>' + questions[this.currentQuestion].question + '</h2>' );
		    for (var i = 0; i<questions[this.currentQuestion].answers.length; i++){
		    	viewer.append('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].answers[i] + '">' + questions[this.currentQuestion].answers[i]+ '</button>');
		    }
		},
// function to reset clock, go to next question and load that question plus answers
		nextQuestion: function(){
		    game.counter = countStartNumber;
		    $('#counter-number').html(game.counter);
		    game.currentQuestion++;
		    game.loadQuestion();
		},
// function to say what happens when time is up
		timeUp: function() {
  			clearInterval(timer);
    		$('#counter-number').html(game.counter);
    		viewer.html('<h2>Out of Time!</h2>');
    		viewer.append('<h3>The Correct Answer was: ' + questions[this.currentQuestion].correctAnswer);
    			if (game.currentQuestion === questions.length - 1){
      				setTimeout(game.results, 1000);
    			} else {
      				setTimeout(game.nextQuestion, 1000);
    			}
  		},		
// function to print all info about your performance
    	results: function() {
    		clearInterval(timer);
		    $('#counter-number').html(game.counter);
		    viewer.append('<h3>Correct Answers/Wonderlic Score: ' + game.correct + '</h3>');
		    viewer.append('<h3>Incorrect Answers: ' + game.incorrect + '</h3>');
		    viewer.append('<h3>Unanswered: ' + (questions.length - (game.incorrect + game.correct)) + '</h3>');
		    viewer.append('<br><button id="start-over">Start Over?</button>');
  		},
// to check if answer is correct or nah
  		clicked: function(e) {
	    clearInterval(timer);

	    if ($(e.target).data("name") === questions[this.currentQuestion].correctAnswer){
	      this.answeredCorrectly();
	    } else {
	      this.answeredIncorrectly();

	    }
	  	},
// function if incorrect answer is chosen
		answeredIncorrectly: function() {
			game.incorrect++;
		    clearInterval(timer);
		    viewer.html('<h2>Wrong!</h2>');
		    viewer.append('<h3>The Correct Answer was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');

		    if (game.currentQuestion === questions.length - 1){
		      setTimeout(game.results, 1000);
		    } else {
		      setTimeout(game.nextQuestion, 1000);
		    }
		},
// function if correct answer is chosen
		answeredCorrectly: function(){
		    clearInterval(timer);
		    game.correct++;
		    viewer.html('<h2>Right!</h2>');

		    if (game.currentQuestion === questions.length - 1){
		      setTimeout(game.results, 1000);
		    } else {
		      setTimeout(game.nextQuestion, 1000);
		    }
		  },
// reset function to start game over
		reset: function(){
		    this.currentQuestion = 0;
		    this.counter = countStartNumber;
		    this.correct = 0;
		    this.incorrect = 0;
		    this.loadQuestion();
		  }
		};
});

