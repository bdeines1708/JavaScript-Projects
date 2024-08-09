function get_Date() {
    if (new Date().getHours() < 22) {
        document.getElementById("Greeting").innerHTML = "How are you today?";    //creates an if function
    }
}

if (5<10) {
    document.write("The left number is smaller than the number on the right")   //creates an if function that prints the phrase if 5 is lower than 10
}

function Age_Function()  {
    Age = document.getElementById("Age").value;
    if (Age >= 18)  {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;  //creates an else if function
}

function Time_function() {
    var Time =new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time <18)  {
        Reply = "It is afternoon."
    }
    else {
        Reply = "It is evening time."}                               //creates an else if funtion with more than one variable
    
    document.getElementById("Time_of_day").innerHTML = Reply;
}

var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2 () {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();                                                       //global function

function Add_numbers_1() {
       var Y = 10;
  document.write(20 + Y + "<br>");
}
function Add_numbers_2() {
  document.write(Y + 100);
} 
Add_numbers_1();
Add_numbers_2();                                                        //local function, prints a result of 30

function Add_numbers_1() {
    var Z = 10;
    console.log(20 + Z);
}
function Add_numbers_2() {
    console.log(Z + 100);
}
Add_numbers_1();
Add_numbers_2();                                                        //produces a console.log error saying z is not defined