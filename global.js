window.onload = function() {
  var user_got_right = 0;
  var submitters = document.getElementsByClassName("submit_button");

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
  // qX_answer - Id of the element where the answer is given
  //
  // Returns true/false Boolean
  function is_correct_answer(answer_text, qX_answer) {
    var qX_answer = qX_answer;
    q_answer = document.getElementById(qX_answer).innerText;
    if (answer_text === q_answer) {
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
    var button = submitters.namedItem(this_button);
    var div = button.parentElement;
    var qX = div.id;
    var answer_div = qX.concat("_answer");
    var result_div = qX.concat("_result");
    var given_answer_div = qX.concat("_given_answer");
    to_find = qX
    qX = document.getElementById(to_find);
    answer = given_answer(given_answer_div);
    correct = is_correct_answer(answer, answer_div);
    update_question_result(correct, result_div);
  }

  // Toggles showing or hiding quesiton content
  //
  // qX - id for the div the question content is in
  //
  // Returns div content of the selected div to the user
  function show_question() {
    questions = document.getElementsByClassName("question_info");
    for (i=0; i < questions.length; i++) {questions[i].className = "question_info hide_content"; questions.namedItem(qX).className = "question_info show_content";}
  }


  var questions = document.getElementsByClassName("question_info");

  function grade_quiz(){
    var user_score = user_got_right / parseFloat(questions.length);
    score = document.getElementById('score_display');
    score.innerText = "You got " + user_got_right + " out of " + questions.length + " quesitons correct: " + (user_score * 100) + "%";
  }

  var q1_button = submitters.namedItem("q1_submitter");
  var q2_button = submitters.namedItem("q2_submitter");
  var q3_button = submitters.namedItem("q3_submitter");
  var q4_button = submitters.namedItem("q4_submitter");
  var q5_button = submitters.namedItem("q5_submitter");

  q1_button.onclick = process_answer_submission;
  q2_button.onclick = process_answer_submission;
  q3_button.onclick = process_answer_submission;
  q4_button.onclick = process_answer_submission;
  q5_button.onclick = process_answer_submission;
}
