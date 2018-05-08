import { Meteor } from 'meteor/meteor';

import './login-form.html'
import { Template } from 'meteor/templating';

Template.loginComponent.onCreated(() => {
    $('.ui.form')
        .form({
            fields: {
                email: {
                    identifier  : 'email',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please enter your e-mail'
                        },
                        {
                            type   : 'email',
                            prompt : 'Please enter a valid e-mail'
                        }
                    ]
                },
                password: {
                    identifier  : 'password',
                    rules: [
                        {
                        type   : 'empty',
                        prompt : 'Please enter your password'
                        },
                        {
                        type   : 'length[6]',
                        prompt : 'Your password must be at least 6 characters'
                        }
                    ]
                }
            }
        })
})

Template.loginComponent.events({
    'submit .login'() {
        event.preventDefault();
        const email = event.target.email;
        const password = event.target.password
        Meteor.call('studentLogin', email, password, (err, data) => {
            console.log(data)
        })
    }
})
