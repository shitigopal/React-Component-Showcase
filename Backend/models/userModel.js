const {model, Schema } = require('../connection');

const myschema = new Schema({
    email : String,
    username : String,
    password : String,
    age : Number,
    balance : {type : Number, default: 0}
});

module.exports = model('users',myschema);