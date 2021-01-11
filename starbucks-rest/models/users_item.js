const mongoose = require('mongoose');

const users_itemSchema = mongoose.Schema({
    lastname: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    father_name: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    AFM : {
        type: Number,
        required: true
    },
    AMKA : {
        type: Number,
        required: true
    },
    CARD_ID : {
        type: Number,
        required: true
    },
    UNEMPLOYMENT_TIME : {
        type: Number,
        required: true
    },
    STATUS : {
        type: Boolean,
        required: true
    },
    ADT: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('users_items', users_itemSchema);