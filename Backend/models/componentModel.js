const {model, Schema, Types } = require('../connection');

const myschema = new Schema({
    title:String,
    description:String,
    thumbnail:String,
    code:String,
    uploadedBy:{type:Types.ObjectId,ref:'users'},
    createdAt:Date,
    imports : String,
});

module.exports = model('components',myschema);