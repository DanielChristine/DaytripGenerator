var destination = ["Spain", "Geneva", "Florida", "Local"];
var restaurant = ["Italian", "Greek", "French", "American"];
var transportation = ["Bus", "Bike", "Plane", "Pogostick"];
var entertainment = ["Movie", "Hiking", "Volunteer", "Be Weird"];

var foundDestination = [];
var foundRestauraunt = [];
var foundTransportation = [];
var foundEntertainment = [];

var dayTrip = [];

function randomize() {
  return Math.floor(Math.random() * 4);
}

function randomDestination() {
  var findDestination = destination[randomize()];

  foundDestination.push(findDestination);
  dayTrip.push(findDestination);
  return findDestination;
}
randomDestination();

console.log(foundDestination);
