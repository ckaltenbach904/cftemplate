puts "hello"
p "hello"

my_name = "Catharina"
greeting("Catharina")

def greeting(name)
    p "hello" + "" + name
end

greeting(my_name)

def greeting
    puts "Please enter your name:"
    name = gets.chomp
    puts "Hello" + " " + name
  end

greeting




