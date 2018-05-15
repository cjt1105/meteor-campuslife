import { Meteor } from 'meteor/meteor';
import './registration-form.html';
import '../university-search/unversity-search.js'
import { Cookies } from 'meteor/ostrio:cookies';
import { Session } from 'meteor/session';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

const cookies = new Cookies();

let state = {}

Template.registration.onCreated(() => {
    Meteor.neo4j.call('getAllColleges',{}, (err, data) => {
        $('.ui.search')
            .search({
                source : data.n,
                fields: {
                    title   : 'name',
                    description     : 'city',
                    id: 'metadata.id'
                },
                searchFields   : [
                    'name'
                ],
                fullTextSearch: false,
                onSelect: (result) => {
                    Session.set('selectedCollege', result)
                }
            })
    });
})

Template.registration.onRendered(() => {
    $(".ui.checkbox").checkbox('setting', 'onChange', function () {
        state[this.name] = true
    });
})

Template.registration.events({
    'submit .add-student'() {
        event.preventDefault();
        const target = event.target;
        const collegeId = Session.get('selectedCollege').metadata.id
        const _user = {
            firstName: target.firstName.value,
            lastName: target.lastName.value,
            email: target.email.value,
            password: target.password1.value,
            year: target.year.value,
            residenceAdded: false
        };
        const user = {..._user, ...state}
        Meteor.neo4j.call('registerUser', {user: user, collegeId: collegeId})
        // Meteor.call('registerStudent', user, collegeId, (err, data) => {
        //     Session.set('token', data.token);
        //     Session.set('currentUser', data.user);
        //     FlowRouter.redirect(`/${collegeId}/dashboard/${data.user.id}`)
        // });
    }
});