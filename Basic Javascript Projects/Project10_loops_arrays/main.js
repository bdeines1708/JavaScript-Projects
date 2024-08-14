
function Call_Loop()
{let text = "";
let i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("Loop").innerHTML = text;}                                      //--utilizes a while loop

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}                                             //--utilizes a for loop

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[3] + ".";
}                                             //--utilizes an array

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

function let_function() {
    var X = 82;
document.write (X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);
}
document.getElementById("Let").innerHTML = X

function car_function() {
    let car = {
    make: "Dodge ",
    model:  "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return  "This car is a " + this.year + this.color + this.make + this.model;
    }
    };
document.getElementById("Car_Object").innerHTML = car.description();}
//---creates an object using a let keyword