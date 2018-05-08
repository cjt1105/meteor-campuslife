import { Meteor } from "meteor/meteor";
import { resolve } from "dns";
import { reject } from "bcrypt/lib/promises";
import  bcrypt  from "bcrypt";
import jwt from 'jsonwebtoken';
import secret from '../../../config'

const Students = Meteor.neo4j.collection('students');

Meteor.methods({
    async registerStudent(user, collegeId) {
        const id = collegeId;

        let registerUserAndCreateToken = new Promise((resolve, reject) => {
            bcrypt.hash(user.password, 10, (err, hash) => {
                user.password = hash;
                Meteor.N4JDB.query('MATCH (college:College) WHERE ID(college) = {collegeId} CREATE (n:User {user})<-[:COLLEGE_USER]-(college) RETURN n', {user: user, collegeId : id}, (err, data) =>{
                    if(err){
                        throw err;
                    }
                    const userId = data[0].n._data.metadata.id;
                    const _user = data[0].n._data.data;
                    _user.id = userId;
                    const token = jwt.sign({ id: user._id }, secret, {
                        expiresIn: '365d'
                    });
                    resolve({
                        token: token,
                        user: _user
                    })
                })
            })
        });

        let response = await registerUserAndCreateToken;

        return response;
    },
    'studentLogin'(email, password){
        return new Promise((resolve, reject) => {
            let _user = Meteor.neo4j.query('MATCH (user:User) WHERE user.email = {email} RETURN user', {email: email}, function(err){
                if(err){
                    throw err;
                }
            })
            let user = _user.get().user[0]
            bcrypt.compare(password, user.password, (err, res) => {
                if(res === true){
                    user.password = null;
                    resolve(user)
                }
            })
        })
        .then(usr => usr )
    },
});