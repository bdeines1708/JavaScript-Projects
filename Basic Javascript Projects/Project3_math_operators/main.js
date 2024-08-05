function addition_Function() {
    var Addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 " + Addition;

}  //function creates addition equation

function subtraction_Function() {
    var subtraction = 5 - 3;
    document.getElementById("Math").innerHTML = "5 - 3 " + subtraction;

}  //function creates subtraction equation


function multiplication_Function() {
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 * 8 = " + simple_Math;  

}  //function creates multiplication equation

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "" + simple_Math;

}  //function creates remainder equation

function position_Operator() {
    var x = 5;
    x++
    document.getElementById("Math").innerHTML = x;
} //operator function adds sum to variable

function negation_Operator() {
    var x = 5.25;
    x--
    document.getElementById("Math").innerHTML = x;
}  //operator function subtracts sum from variable

function math_Operator() {
    window.alert = (Math.random())
    document.getElementById("Math").innerHTML = window.alert;
} //math random operator generates random number between one and zero


