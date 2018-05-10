const mongoose = require('mongoose');
const { Schema } = mongoose;

const materialSchema = new Schema({
    branch: String,
    name: String,
    price: {
        type: Number,
        default: 0
    },
    priceGold: {
        type: Number,
        default: 0
    },
    pricePlatinum: {
        type: Number,
        default: 0
    }
});

mongoose.model('materials', materialSchema);