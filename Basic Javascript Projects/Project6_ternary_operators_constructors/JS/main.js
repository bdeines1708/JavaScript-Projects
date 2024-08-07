function Vehicle (Make, Model, Year, Color) {
        this.Vehicle_Make = Make;
        this.Vehicle_Model = Model;
        this.Vehicle_Year = Year;
        this.Vehicle_Color = Color;     //--utilizes this function to specify the make and model, etc
    }
    var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
    var Emily = new Vehicle("Jeep", "Trailhawk", 2019, "White and Black");
    var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");    //--uses the new funtion to specify the type of vehicle for each individual
    function myFunction() {
        document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year;  //--specifies which individual is to be used
    }