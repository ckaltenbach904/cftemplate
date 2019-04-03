puts "hello"
p "hello"

my_name = "Catharina"
greeting("Catharina")

def greeting(name)# here we define a method called "greeting" and an argument "name" within a parentheses.
    p "hello " + "" + name
end #closing method

greeting(my_name)


def greeting#here we define a method called "greeting"
    puts "Please enter your name:"
    name = gets.chomp#here is where the inside the method
    puts "Hello" + " " + name
  end#closing method

greeting




