function Question(question, answer) {
  this.question = question;
  this.choices = choices
  this.answer = answer;
}

Question.prototype.isCorrect = function(choice) {
  return this.answer == choice;
};

Question.prototype.toHTML = function() {
  var htmlString = '<li';
  if(this.isPlaying) {
    htmlString += ' class="current"';
  }
  htmlString += '>';
  htmlString += this.title;
  htmlString += ' - ';
  htmlString += this.artist;
  htmlString += '<span class="duration">';
  htmlString += this.duration;
  htmlString += '</span></li>';
  return htmlString;
};
