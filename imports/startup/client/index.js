// Import client startup through a single index entry point

import './routes.js';
// import {  } from 'meteor/';

if (Meteor.isClient) {
    Meteor.startup(() => {
        GoogleMaps.load({
            key: 'AIzaSyDVEJZ3jlRLbqrSzghaYJfdg9WEcNFfJrM',
            libraries: 'places'
        });
    });
}
