const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({

    userID:Intl,
    firstName: String,
    lastName: String,
    phone:String,
    email:String,
    address :{
        addressLine:String,
        city:String,
        state:String,
        zipCode:String
    }
});

module.exports = mongoose.model('Users', UserSchema);