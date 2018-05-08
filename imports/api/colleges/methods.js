const Colleges = Meteor.neo4j.collection('colleges');

if (Meteor.isServer) {
    Meteor.neo4j.methods({
        'getAllColleges': function() {
            return "MATCH (n:College) RETURN n"
        }
    })
}