// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// NYT API
//var NYTAPI = "";

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to search for articles.
  runQuery: function(search) {

    console.log(search);

    // search for the term entered
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "&q=" + searchTerm;
    return axios.get(queryURL).then(function(response) {
      // If get get a result, return that result's formatted address property
      if (response.data.results[0]) {
        return response.data.results[0].formatted;
      }
      // If we don't get any results, return an empty string
      return "";
    });
  },

  // This function hits our own server to retrieve the record of saved results
  getSaved: function() {
    //MAKE SURE MY ROUTE MATCHES THIS
    return axios.get("/api");
  },

  // This function posts new searches to our database.
  postHistory: function(location) {
    return axios.post("/api", { location: location });
  }
};

// We export the API helper
module.exports = helper;