/// UFO LEVEL 1

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

// Select the button by id
var button = d3.select("#filter-btn");

// Select the form by id
var form = d3.select("#datetime");

// Create the event handlers when a button/form is selected
button.on("click", runEnter);
form.on("submit", runEnter);

// Create the runEnter event handler function 
function runEnter() {

    // Prevent the page from refreshing using d3 
    d3.event.preventDefault();

    // Get the input value 
    var inputValue = d3.select("#datetime").node().value;
    //console.log(inputValue);

    // Use the input value to filter the results accordingly 
    var filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === inputValue);
    // console.log(filteredData);

    // Showing filtered results on the table 
    if (filteredData.length === 0) {
        tbody.html("");
        tbody.text("Sorry, there are no UFO sightings for the date you entered! Please try again.");
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