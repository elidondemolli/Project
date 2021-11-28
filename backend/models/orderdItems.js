const mongoose = require('mongoose');

const orderedItems = mongoose.Schema({
    orderId: {
        type: String,
        required: true
    },
    buyerID: {
        type: String,
        required: true
    },
    carrierStatus: {
        type: Number,
        required: true
    },
    items: [{}]
});

module.exports = mongoose.model("OrderedItems", orderedItems);