# ------------------------------------------------------------------------------
# Add new question
# ------------------------------------------------------------------------------
# Step 1 - Display a form
get "/add_question" do
  erb "questions/add_question"
end

# Step 2 - Save the form
get "save_question" do
  new_question = Question.new({"vocabulary" => params["questions"]["vocabulary"], "answer" => params["questions"]["answer"]})

  if new_question.add_to_database
    erb "questions/success"
  else
    @error = true
    erb "questions/add_question"
  end
end
