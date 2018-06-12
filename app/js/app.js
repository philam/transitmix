// Namespace for the application
var app = app || {};

// Use mustache-style syntax for underscore templates
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

$(document).ready(function() {
  var options = { tileLayer: { detectRetina: true } };
  app.leaflet = L.mapbox.map('map', 'mapbox.streets?access_token=pk.eyJ1IjoicGhpbGlwZGFyIiwiYSI6ImNqZmx1N2wzbTBva2ozM21rbnFjN21uZDgifQ.tK-myvugjB-kOzfpAFB0DA', options);
  
  // Feedback View that we want visible at all times
  var feedbackView = new app.FeedbackView();
  $('body').append(feedbackView.render().el);

  app.router = new app.Router();
});
