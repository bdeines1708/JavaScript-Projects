function my_Function () {
    document.write (typeof 3);
    document.getElementById("Test").innerHTML = document.write;   //type of function
}

function my2_Function () {
    document.write ("10"+ 5);
    document.getElementById("Test").innerHTML = document.write;   //adding a string and a number function
}

function my3_Function () {
    document.write (10 == 3);
    document.getElementById("Test").innerHTML = document.write;  //== function
}

function my4_Function () {
    x = 10
    y = 10
    document.write (x === y);
    document.getElementById("Test").innerHTML = document.write;   //=== function
}

function my5_Function () {
    document.write (10 < 2);
    document.getElementById("Test").innerHTML = document.write;  //< function
}

function my6_Function () {
    document.write (10 > 2);
    document.getElementById("Test").innerHTML = document.write; //>greater than function
}

function my7_Function () {
    document.write (5>2 && 10>4);
    document.getElementById("Test").innerHTML = document.write;  //&&  boolean function
}

function my8_Function () {
    document.write (5 > 10 || 10 > 20);
    document.getElementById("Test").innerHTML = document.write;  //||  boolean function
}

function not_Function () {
    document.getElementById("Not").innerHTML = !(5>10);          //not function
}