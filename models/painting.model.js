const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paintingSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    height: {
        type: Number,
        required: true,
    },
    width: {
        type: Number,
        required: true,
    },
    img_url: {
        type: String,
        required: true,
    },
    sold: {
        type: Boolean,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
    }, {
        timestamps: true,
    });

    const Painting = mongoose.model('Painting', paintingSchema);

    module.exports = Painting;