const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    firstname: {

    },
    lastname: {

    },
    state: {

    },
    city: {

    },
    street: {

    },
    unit: {

    },
    email: {

    }
    }, {
        timestamps: true,
    });

    const Customer = mongoose.model('Customer', customerSchema);

    module.exports = Customer;