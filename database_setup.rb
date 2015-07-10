# Creates the database connection
DATABASE = SQLite3::Database.new("german.db")

# Creates the table
DATABASE.execute("CREATE TABLE IF NOT EXISTS questions (id INTEGER PRIMARY KEY, vocabulary TEXT NOT NULL, answer INTEGER NOT NULL);")
DATABASE.execute("CREATE TABLE IF NOT EXISTS choices (id INTEGER PRIMARY KEY, choice TEXT NOT NULL, question_id INTEGER NOT NULL);")

# Returns the results as a Hash
DATABASE.results_as_hash = true
