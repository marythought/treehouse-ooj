function Quiz() {
  this.questions = [];
  this.score = 0
  this.currentQuestionIndex = 0;
}

Quiz.prototype.guess = function(){}

Quiz.prototype.add = function(question) {
  this.questions.push(question);
};

Quiz.prototype.ask = function() {
  var currentQuestion = this.questions[this.currentQuestionIndex];
  currentQuestion.ask();
};

Quiz.prototype.answer = function(){
  var currentQuestion = this.questions[this.currentQuestionIndex];
  currentQuestion.answer();
};

Quiz.prototype.next = function() {
  this.answer();
  this.currentQuestionIndex++;
  if(this.currentQuestionIndex === this.questions.length) {
    this.currentQuestionIndex = 0;
  }
  this.ask();
};

Quiz.prototype.renderInElement = function(list) {
  list.innerHTML = "";
  for(var i = 0; i < this.questions.length; i++) {
    list.innerHTML += this.questions[i].toHTML();
  }
};
