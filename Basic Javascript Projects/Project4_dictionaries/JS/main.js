function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound : "Bark!"
}; //-- creates dictionary of variables that can be selected
delete Animal.Sound //deletes the variable "Animal.Sound" resulting in "undefined" when "Click Me!" is clicked
document.getElementById("Dictionary").innerHTML = Animal.Sound; //--selects the element disctionary and the key value pair "Animal.Sound" to be displayed when "Click Me!" is clicked.
}