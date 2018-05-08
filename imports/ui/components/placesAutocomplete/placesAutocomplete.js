import './placesAutocomplete.html'
import { Template } from 'meteor/templating';
import { Tracker } from 'meteor/tracker';
import "geocomplete/jquery.geocomplete.js"

Template.placesAutocomplete.onRendered(function() {
  Tracker.autorun(() => {
    if(GoogleMaps.loaded()){
      console.log("not")
      $("#autocomplete").geocomplete()
      .bind("geocode:result", function(event, result){
        console.log(result);
      });
    }
  })
});