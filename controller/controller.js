const User = require('../models/model');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.user_create = function (req, res,next) {
    let user = new User(
        {
            userID : req.body.userID,   
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            phone: req.body.phone,
            email : req.body.email,
            address : req.body.address,
                addressLine : req.body.addressLine,
                city : req.body.city,
                state : req.body.state,
                zipCode : req.body.zipCode,
        }
    );

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Created successfully')
    })
};

exports.user_getall = function (req, res,next) {
    User.find({}, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

//GETS A SINGLE USER FROM THE DATABASE
exports.user_details = function (req, res,next) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.user_update = function (req, res,next) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.send('udpated.');
    });
};

exports.user_delete = function (req, res,next) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};