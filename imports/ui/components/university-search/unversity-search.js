import './university-search.html';
import { Template } from 'meteor/templating';
import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';

const Colleges = Meteor.neo4j.collection('colleges');

Template.universitySearch.onCreated(() => {
        Meteor.neo4j.call('getAllColleges',{}, (err, data) => {
            console.log(data.n)
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
                        console.log(result)
                    }
                })
        })
})


