window.onload = function() {
  var user_got_right = 0;
  var submitters = document.getElementsByClassName("submit_button");
  var next_buttons = document.getElementsByClassName("next");

  // Retrieve an answer from the field
  //
  // qX_given_answer - id for the div contaning the input from the user
  //
  // Returns user's answer - String
  function given_answer(qX_given_answer) {
    qX_given_answer = qX_given_answer;
    var answer = document.getElementById(qX_given_answer).value;
    return answer
  }

  // Checks if the answer was correct or not
  //
  // answer_text - String that the user has given
  //
  // Returns true/false Boolean
  function is_correct_answer(answer_text) {
    var correct_answer = document.getElementsByClassName("correct_answer");
    for (i = 0; i < correct_answer.length; i++) if (correct_answer[i] === on_question) {
      var q_answer = correct_answer[i].value;
    }
    if (correct_answer.value === q_answer) {
      return true
    } else {
      return false
    }
  }

  // Updates the result div for the question
  //
  // correct - true/false Boolean
  // qX_result - the id of the div to update
  //
  // Returns the div result
  function update_question_result(correct, qX_result) {
    var qX_result = qX_result;
    result = document.getElementById(qX_result);
    if (correct === true) {
      result.innerText = "Success!";
      user_got_right++;
    } else {
      result.innerText = "Wrong!";
    }
  }

  // Runs the chain of functions needed for each question
  //
  // qX - id for the div the question content is in
  //
  // Returns the innerText to the screen of the qX_result div
  function process_answer_submission(){
    var this_button = this.id;
    var button = document.getElementById(this_button);
    var div = button.parentElement;
    var qX = div.id;
    var result_div = qX.concat("_result");
    var given_answer_div = qX.concat("_given_answer");
    to_find = qX
    qX = document.getElementById(to_find);
    answer = given_answer(given_answer_div);
    correct = is_correct_answer(answer);
    update_question_result(correct, result_div);
  }
  var on_question = 0;
  // Toggles showing or hiding quesiton content
  //
  // qX - id for the div the question content is in
  //
  // Returns div content of the selected div to the user
  function show_question() {
    var this_button = this.id;
    var button = next_buttons.namedItem(this_button);
    var div = button.parentElement;
    var qX = div.id;
    for (i=0; i < questions.length; i++) {
      if (questions[i].id == qX) {
        questions[i].className = "question_info hide_content";
        next_id = i
        var next_one = ++next_id; var next_one_id = questions[next_one].id;
        questions[next_one_id].className = "question_info show_content";
        }
    }
  }


  var questions = document.getElementsByClassName("question_info");

  function grade_quiz(){
    var user_score = user_got_right / parseFloat(questions.length);
    score = document.getElementById('score_display');
    score.innerText = "You got " + user_got_right + " out of " + questions.length + " quesitons correct: " + (user_score * 100) + "%";
  }

  var q1_button = submitters.namedItem("q1_submitter");

  q1_button.onclick = process_answer_submission;

  var q2_next_button = next_buttons.namedItem("q2_next");

  q2_next_button.onclick = show_question;

  var grade_button = document.getElementById('grade_button');
  grade_button.onclick = grade_quiz;

}
