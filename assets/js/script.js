// create array for searched cities and save into local storage
var newCity;
var lastSearch;
if (JSON.parse(localStorage.getItem("city")) === null) {
  newCity = [];
} else {
  newCity = JSON.parse(localStorage.getItem("city"));
};
if (localStorage.getItem("lastSearch") === null) {
  lastSearch = "";
} else {
  lastSearch = localStorage.getItem("lastSearch");
}
// search button click event 
$("#search-button").on("click", function () {
  event.preventDefault();
  $("#dashboard").empty()
  $("#forecast").empty();
  var city = $("#city-input").val();
  lastSearch = city;
  localStorage.setItem("lastSearch", lastSearch);
  if (!newCity.includes(city)) {
    newCity.push(city);
    console.log(city);
    localStorage.setItem("city", JSON.stringify(newCity));
    appendCities();
  }
  getWeatherInfo(city);
});

//append cities function
function appendCities() {
  $("#history").empty();
  for (i = 0; i < newCity.length; i++) {
    var citySearched = $("<li>").addClass("list-group-item");
    citySearched.addClass("searchedCity");
    citySearched.attr("cityName", newCity[i]);
    citySearched.text(newCity[i]);
    console.log(citySearched);
    $("#history").append(citySearched);
  }
}
// run appendCities function
appendCities()