const {model, Schema } = require('../connection');

const myschema = new Schema({
    title : String,
    description : String,
    image : String,
    code : String,
    createdAt : Date
});

module.exports = model('components',myschema);