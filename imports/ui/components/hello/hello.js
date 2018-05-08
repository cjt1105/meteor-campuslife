import './hello.html';

Template.hello.events({
  'submit .register'(event) {
    event.preventDefault();

    const target = event.target;
    const firstName = target.firstName.value;
    const lastName = target.lastName.value;
    const email = target.email.value
    const password1 = target.password1.value
    const password2 = target.password2.value

    console.log(firstName, lastName,email, password1, password2)

    target.text.value = '';
  },
});
