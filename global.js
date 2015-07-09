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
  } else {
    result.innerText = "Wrong!";
  }
}

// Runs the chain of functions needed for each question
//
// qX - id for the div the question content is in
//
// Returns the innerText to the screen of the qX_result div
function process_answer_submission(qX){
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
function show_question(qX) {
  // qX = qX;
  questions = document.getElementsByClassName("question_info");
  for (i=0; i < questions.length; i++) {questions[i].className = "question_info hide_content"; questions.namedItem(qX).className = "question_info show_content";}
}
