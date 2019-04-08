def fav_foods
    # code from this method goes in here
    food_array = []
        3.times do
        puts "Name a favorite food"#expecting input from the user and set to food_array
        food_array << gets.chomp
    end#end of food_array
    p food_array
    puts "Your favorite foods are #{food_array.join(", ")}."
    food_array.each do |food| # do something to each element in food_array; that element is to be referred to as food
    puts "I like #{food} too!" # the thing we're doing   
    end#end array
end#end method    
fav_foods #call the method / execute


  