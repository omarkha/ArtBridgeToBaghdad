const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    unit: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
    }, {
        timestamps: true,
    });

    const Customer = mongoose.model('Customer', customerSchema);

    module.exports = Customer;