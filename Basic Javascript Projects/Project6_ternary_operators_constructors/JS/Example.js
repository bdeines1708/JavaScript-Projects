function add_Strings() {      //--creates a nested function
    var start_string = "hello";

    function Adding(str) {
        start_string = start_string + "  " + str;
    }
    Adding("World")
    document.getElementById("Nested_Function").innerHTML = start_string;
}