const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    username : {type: String, required : true, trim : true, unique : true},
    password : {type: String, required : true, trim : true, unique : true},
    name : {type: String, required : true},
    telephone: {type: String, required : true, trim : true, unique : true}
});

let User = mongoose.model('User', UserSchema);
module.exports = User;
