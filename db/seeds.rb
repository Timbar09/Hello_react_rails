# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


greetings = [
  "Hello!",
  "Hi!",
  "Hey!",
  "Howdy!",
  "Yo!",
  "What's up?",
  "Greetings!",
  "Salutations!",
  "Good day!",
  "Good morning!",
  "Good afternoon!",
  "Good evening!",
  "Good night!",
  "How are you?",
  "How's it going?",
  "How are things?",
  "How's life?",
  "How's everything?",
  "How's your day?",
  "How's your day going?",
  "How have you been?",
  "What's new?",
  "What's going on?",
  "What's happening?",
]

greetings.each do |greeting|
  Greeting.create(greeting: greeting)
end