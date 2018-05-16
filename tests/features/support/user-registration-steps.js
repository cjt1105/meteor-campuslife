module.exports = function() {
    this.Given('the user is on the registration page', function () {
        browser.url('http://localhost:3000/register')
    });

    this.When('the user inputs an email address', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

    this.When('the user inputs a password', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

    this.When('the user selects a university', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });
}