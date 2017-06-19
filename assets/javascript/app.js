// var panel = $


$(document).ready(function(){
// stating variables and functions to be used in game
var allQuestions = [
		{
			question: "Ben’s General Store is selling yarn for $.04 a foot. How many feet can you buy for $0.52?" + '<br>', 
			possibleAnswersMC: ["14 feet", "10 feet", "15 feet", "8 feet", "12 feet"],
			correctAnswer: "13 feet", 
		},
		{
			question: "Are the following two words similar, contradictory, or not related?" + '<br>' + "Legend, Key" + '<br>', 
			possibleAnswersMC: ["similar", "contradictory", "not related"],
			correctAnswer: "similar", 
		},
		{
			question: "Which of these numbers is the smallest?" + '<br>',
			possibleAnswersMC: ["0.24", "0.11", "0", "2", "0.02"], 
			correctAnswer: "0", 
		},
		{
			question: "A girl is 21 years old and her brother is a third her age. When the girl is 36, what will be the age of her brother?" + '<br>',
			possibleAnswersMC: ["6", "3", "7", "5", "4"], 
			correctAnswer: "2", 
		},
		{
			question: "(15 ÷ 5) x (10 ÷ 2) =" + '<br>',
			possibleAnswersMC: ["15", "10", "2.5", "5", "13"], 
			correctAnswer: "15", 
		},
		{
			question: "Are the following two words similar, contradictory, or not related?" + "<br>" + "Familiar, Gallant" + '<br>',
			possibleAnswersMC: ["similar", "contradictory", "not related"], 
			correctAnswer: "not related", 
		},
		{
			question: "-57 + -74 =" + '<br>', 
			possibleAnswersMC: ["-137", "-17", "17", "-121", "-131"],
			correctAnswer: "-131", 
		},
		{
			question: "Over the course of two weeks, Al spent $105.00 on lunch. What was the average cost per day?" + '<br>', 
			possibleAnswersMC: ["$6.50", "$7.50", "$8.05", "$7.25", "$5.75"],
			correctAnswer: "$7.50", 
		},
		{
			question: "Reduce the fraction 21/49 to its lowest terms." + '<br>', 
			possibleAnswersMC: ["5/7", "3/8", "6/9", '21/49'],
			correctAnswer: "3/7", 
		},
		{
			question: "A copy machine repairman makes $12.50 per hour plus $4 for every service call he performs. Last week he worked 34 hours and made 6 service calls. How much money did he make?" + '<br>',
			possibleAnswersMC: ["400", "375", "440", "420", "438"], 
			correctAnswer: "449", 
		}];
	var trivia = {
		numCorrect: 0,
		numIncorrect: 0,
		wScore: 0,
		questions: [],
		possibleAnswers: [],
		userAnswer: "",
		counter: 140,

		// countdown: function() {
		// 	tivia.counter--;
		// 	$('#timeLeft').html(trivia.counter);
		// 	if (trivia.counter === 0) {
		// 		console.log("Times Up!");
		// 		trivia.timeUp();
		// 	timer = setInterval(trivia.countdown, 1000);
		// 	}
		// },


		// timeUp: function() {
		// 	clearInterval(timer)
		// },
		// list all questions and answers
		// the possibleAnswersMC will show up as multiple choice
		
		startGame: function() {
			// run a loop through allQuestions to populate printedQuestions and printedPossibleAnswers
			for (var i = 0; i < allQuestions.length; i++) {
				trivia.questions.push(allQuestions[i].question);
				trivia.possibleAnswers.push(allQuestions[i].possibleAnswersMC);
				}
			},
		// results: function() {
		// 	clearInterval(timer);
		// 	$('#afterMath').html('<h2>All done, heres how you did!</h2>');
		//     $('#counter-number').html(trivia.counter);
		//     $('#afterMath').append('<h3>Correct Answers: ' + trivia.correct + '</h3>');
		//     $('#afterMath').append('<h3>Incorrect Answers: ' + trivia.incorrect + '</h3>');
		//     $('#afterMath').append('<h3>Unanswered: ' + (questions.length - (trivia.incorrect + trivia.correct)) + '</h3>');
		//     $('#afterMath').append('<br><button id="start-over">Start Over?</button>');
		// }
		// clicked: function(e) {
  //   clearInterval(timer);

  //   if ($(e.target).data("name") === questions[this.questions].correctAnswer){
  //     	this.answeredCorrectly();
  //   	} 
  //   else {
  //     		this.answeredIncorrectly();
  //   	}
 //  		},
	};


// When button is clicked, run startGame function
// $('button').click(startGame());
trivia.startGame();
console.log(trivia.questions);
console.log(trivia.possibleAnswers);
$('#printedQuestions').html(trivia.questions);
$('#printedPossibleAnswersMC').html(trivia.possibleAnswers);

});


// print the values in respective html locations










