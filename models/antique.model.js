const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const antiqueSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    img_url: {
        type: String,
        required: true,
    },
    sold: {
        type: Boolean,
        required: true,
    },
    datesold: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    }
    }, {
        timestamps: true,
    });

    const Antique = mongoose.model('Antique', antiqueSchema);

    module.exports = Antique;