const userData = require('../userDb');
const User = require(`../models/user`);

const getAllUsers = (callback) => { setTimeout(() => callback(userData), 250); }

// using timeout to simulate lag 
const getUserById = (id, callback) => {
    setTimeout(() => {
        let retrievedUser = null;
        for (user of userData) {
            if (user.id == id) {
                retrievedUser = user;
            }
        }
        callback(retrievedUser);
    }, 250);
}

 timmcdonald
const getUserByEmail = (email, cb) => {
    setTimeout(() => {
        if(email){
            throw Error('Oh no!, you gave me bad info!');
        }
        const user = user.Date.filter(user => user.email === email).pop();
        if(!user){
            throw Error('Oh no! You gave me bad data!');
        }
        cb (user);
    }, 250);
}

const getUserByUsername = (un, cb) => {
    setTimeout(() => {
    if (!un) throw Error(`Oh no! You gave me bad data`);

    const user = userData.filter(user => user.username)

    cb(user);
},
250);

const getUserByUsername = (un, cb) => {
    setTimeout(() => {
        if (!un) throw Error(`Oh no! You gave me bad data`);

        const user = userData.filter(user => user.username === un).pop();

        if (!user) throw Error(`Oh no! You gave me bad data`);

        cb(user);
    }, 250);
 master
}

const getUserByCredentials = (un, pw, cb) => {
    setTimeout(() => {
        if (!un || !pw) throw Error(`Oh no! You gave me bad data`); //truthy/falsy in use here

        //fetch the sought user (declarative-style logic)
        const user = userData.filter(user => user.username === un && user.password == pw).pop();

        cb(user);

    }, 250);
}

const addUser = (username, password, firstName, lastName, email, dob, cb) => {
    let id = userData.length
    let newUser = new User(++id, username, password, firstName, lastName, email, dob)
    userData.push(newUser);
    cb(userData);

}

const deleteUserById = (id, callback) => {
    setTimeout(() => {

        

    }, 250);
}

module.exports = {
    getUserByCredentials,
    getUserById,
    addUser,
    getAllUsers,
    getUserByUsername,
    getUserByEmail,
    getUserByUsername
};