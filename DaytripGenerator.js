var destination = ["Los Angelas", "Houston", "Miami", "Local"];
var restaurant = ["Italian", "Greek", "French", "American"];
var transportation = ["bus", "bike", "plane", "pogostick"];
var entertainment = ["finger-painting", "hiking", "volunteering", "kite flying"];
var dayTrip = [];
var foundDestination = [];
var foundRestaurant = [];
var foundTransportation = [];
var foundEntertainment = [];

function randomize() {
  return Math.floor(Math.random() * 4);
}

function randomDestination() {
  var findDestination = destination[randomize()];

  foundDestination.push(findDestination);
  dayTrip.push(findDestination);

  return findDestination;
}

function randomEntertainment() {
  var findEntertainment = entertainment[randomize()];

  foundEntertainment.push(findEntertainment);
  dayTrip.push(findEntertainment);

  return findEntertainment;
}

function randomTransportation() {
  var findTransportation = transportation[randomize()];

  foundTransportation.push(findTransportation);
  dayTrip.push(findTransportation);

  return findTransportation;
}

function randomRestaurant() {
  var findRestaurant = restaurant[randomize()];

  foundRestaurant.push(findRestaurant);
  dayTrip.push(findRestaurant);

  return findRestaurant;
}

console.log(dayTrip);

function clearDayTrip() {
 dayTrip = [""];
 foundDestination = [];
 foundRestaurant = [];
 foundTransportation = [];
 foundEntertainment = [];

}

function roll() {
  clearDayTrip();
  randomDestination();
  randomEntertainment();
  randomTransportation();
  randomRestaurant();
  finalMessage();
  
}

function finalMessage() {
  console.log(
    "The suggested trip is to go to " +
      foundDestination +
      " Via " +
      foundTransportation +
      " to eat " +
      foundRestaurant +
      " food. Then try your hand at " +
      foundEntertainment
  );
}

function planTrip(){

randomDestination();
randomEntertainment();
randomTransportation();
randomRestaurant();
finalMessage();

}

planTrip();