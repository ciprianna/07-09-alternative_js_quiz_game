require_relative "../database_class_methods.rb"
require_relative "../database_instance_methods.rb"

class Question
  extend DatabaseClassMethods
  include DatabaseInstanceMethods

  attr_reader :id
  attr_accessor :name, :category_id

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

end
