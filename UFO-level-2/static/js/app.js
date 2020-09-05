// from data.js
var tableData = data;

// Get a reference to the table body 
var tbody = d3.select("tbody");

// Append the data to each table row 
tableData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button 
var button = d3.select("#filter-btn");

// Select the form 
var form = d3.select("#datetime");

// Create the event handlers when a button/form is selected
button.on("click", runEnter);
form.on("submit", runEnter);

// Create the runEnter event handler function 
function runEnter() {

    // Prevent the page from refreshing using d3 
    d3.event.preventDefault();

    // Get the input value for date, city, state, country and shape
    var inputDate = d3.select("#datetime").node().value;
    var inputCity = d3.select("#city").node().value;
    var inputState = d3.select("#state").node().value;
    var inputCountry = d3.select("#country").node().value;
    var inputShape = d3.select("#shape").node().value;

  
    // Filter the results depending on the input value  
    
    // If the input value is a date... 
    if (inputDate) {
      filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === inputDate);
    }
    if (inputCity) {
      filteredData = tableData.filter(ufoSighting => ufoSighting.city === inputCity);
    }
    if (inputState) {
      filteredData = tableData.filter(ufoSighting => ufoSighting.state === inputState);
    }
    if (inputCountry) {
      filteredData = tableData.filter(ufoSighting => ufoSighting.country === inputCountry);
    }
    if (inputShape) {
      filteredData = tableData.filter(ufoSighting => ufoSighting.shape === inputShape);
    }

    

    // Showing input value results on the table 
    if (filteredData.length === 0) {
        tbody.html("");
        tbody.text("Sorry, there are no UFO sightings for the date you entered");
    }
    else {
        tbody.html("");
        filteredData.forEach((x) => {
            var row = tbody.append("tr");
            Object.entries(x).forEach(([key, value]) => {
              var cell = row.append("td");
              cell.text(value);
            });
          });
    }

}