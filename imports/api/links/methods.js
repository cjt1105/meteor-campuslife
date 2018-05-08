// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Links } from './links.js';

Meteor.methods({
  registerUser: function(email, password1, firstName, lastName) {
    Accounts.createUser({
        password: password1,
        firstName: firstName,
        lastName: lastName,
        email: email,
        createdAt: new Date(),
    });
  }
});
