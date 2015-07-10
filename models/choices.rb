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

  # Adds Object to database if the Object is valid
  #
  # Returns the Question Object
  def add_to_database
    if self.valid?
      Choice.add({"choice" => "#{self.choice}", "question_id" => "#{self.question_id}"})
    else
      false
    end
  end

  # Utility method to determine if an Object contains valid fields or not
  #
  # Returns true/false Boolean
  def valid?
    valid = true

    if self.choice.nil? || self.choice == ""
      valid = false
    end

    if self.choice.nil? || self.question_id == ""
      valid = false
    end

    return valid
  end

end
