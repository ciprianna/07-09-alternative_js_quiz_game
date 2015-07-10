# ------------------------------------------------------------------------------
# Add new question
# ------------------------------------------------------------------------------
# Step 1 - Display a form
get "/add_question" do
  erb :"questions/add_question"
end

# Step 2 - Save the form
get "/save_question" do
  if params["questions"]["answer"].to_i == 1
    answer = params["questions"]["choices_1"]
  elsif params["questions"]["answer"].to_i == 2
    answer = params["questions"]["choices_2"]
  elsif params["questions"]["answer"].to_i == 3
    answer = params["questions"]["choices_3"]
  else
    answer = params["questions"]["choices_4"]
  end

  new_question = Question.new({"vocabulary" => params["questions"]["vocabulary"], "answer" => answer})

  added_question = new_question.add_to_database

  if added_question != false
    choice_1 = Choice.new({"choice" => params["questions"]["choices_1"], "question_id" => "#{added_question.id}"})
    choice_1.add_to_database
    binding.pry
    choice_2 = Choice.new({"choice" => params["questions"]["choices_2"], "question_id" => "#{added_question.id}"})
    choice_2.add_to_database
    choice_3 = Choice.new({"choice" => params["questions"]["choices_3"], "question_id" => "#{added_question.id}"})
    choice_3.add_to_database
    choice_4 = Choice.new({"choice" => params["questions"]["choices_4"], "question_id" => "#{added_question.id}"})
    choice_4.add_to_database
    erb :"questions/success"
  else
    @error = true
    erb :"questions/add_question"
  end
end
