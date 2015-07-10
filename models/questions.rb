require_relative "../database_class_methods.rb"
require_relative "../database_instance_methods.rb"

class Question
  extend DatabaseClassMethods
  include DatabaseInstanceMethods

  attr_reader :id
  attr_accessor :vocabulary, :answer

  # Creates a new Question Object
  #
  # options - empty Hash
  #   id (optional) - Integer, primary key
  #   vocabulary (optional) - String of word to translate
  #   answer (optional) - String of the answer to the word in German
  #
  # Returns Question Object
  def initialize(options={})
    @id = options["id"]
    @vocabulary = options["vocabulary"]
    @answer = options["answer"]
  end

  # Gets choices for the question
  #
  # Returns an Array of Choice Objects
  def choices
    results = DATABASE.execute("SELECT * FROM choices WHERE question_id = #{self.id};")

    store_results = []

    results.each do |hash|
      store_results << Choice.new(hash)
    end

    return store_results
  end

  # Adds Object to database if the Object is valid
  #
  # Returns the Question Object
  def add_to_database
    if self.valid?
      Question.add({"vocabulary" => "#{self.vocabulary}", "answer" => "#{self.answer}"})
    else
      false
    end
  end

  # Utility method to determine if an Object contains valid fields or not
  #
  # Returns true/false Boolean
  def valid?
    valid = true

    if self.vocabulary.nil? || self.vocabulary == ""
      valid = false
    end

    if self.answer.nil? || self.answer == ""
      valid = false
    end

    vocabulary = DATABASE.execute("SELECT vocabulary FROM questions;")

    vocabulary.each do |word|
      if vocabulary["vocabulary"] == @vocabulary
        valid = false
      end
    end

    return valid
  end

end
