function Ride_Function() {   //--creates ride function
    var Height, Can_ride;       //--defines height variable and how tall a person has to be to ride
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride ";   //--defines the element so it can be requested by html
}       