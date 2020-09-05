// LEVEL 1: Automatic Table and Date Search (Required)

// Using the UFO dataset provided in the form of an array of JavaScript objects
// write code that appends a table to your web page 
// and then adds new rows of data for each UFO sighting.

  // Make sure you have a column for `date/time`, `city`, `state`, 
  // `country`, `shape`, and `comment` at the very least.

// Use a date form in your HTML document and write JavaScript code 
// that will listen for events and search through the `date/time` 
// column to find rows that match user input.



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

    // Get the input value 
    var inputValue = d3.select("#datetime").node().value;
    //console.log(inputValue);

    // Use the input value to filter the results accordingly 
    var filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === inputValue);
    // console.log(filteredData);

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