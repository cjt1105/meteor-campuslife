import { Links } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import './info.html';
import { Cookies } from 'meteor/ostrio:cookies';
import { Session } from 'meteor/session';

const cookies = new Cookies();

Template.info.onCreated(function () {
  Meteor.subscribe('links.all');
});

Template.info.helpers({
  links() {
    return Links.find({});
  },
});

Template.info.events({
  'submit .add-student'() {
    event.preventDefault();

    const target = event.target;
    const user = {
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      email: target.email.value,
      password: target.password1.value
    };
    Meteor.call('registerStudent', user, (err, data) => {
      Session.set('currentUser', data.currentUser)
      cookies.set("token", data.token)
    });
  },
  'click .logout' (event){
    event.preventDefault();
    console.log(Session, cookies)
    // Meteor.call('studentLogin', "ab@c.com", "abc123", (err, data) => {
      
    // })
  },
});
