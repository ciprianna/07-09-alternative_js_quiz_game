require_relative "../database_class_methods.rb"
require_relative "../database_instance_methods.rb"

class Choice
  extend DatabaseClassMethods
  include DatabaseInstanceMethods

  attr_reader :id
  attr_accessor :choice, :question_id

  # Creates a new Question Object
  #
  # options - empty Hash
  #   id (optional) - Integer, primary key
  #   choice (optional) - String of German word
  #   question_id (optional) - Integer, foreign key from questions
  #
  # Returns Question Object
  def initialize(options={})
    @id = options["id"]
    @choice = options["choice"]
    @question_id = options["question_id"]
  end

end
