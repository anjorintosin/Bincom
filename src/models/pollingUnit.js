const mongoose = require('mongoose');


const pollingUnit = new mongoose.Schema({
    uniqueId: {
        type: Number,
        required: true,
    },
    ward_id: {
        type: Number,
        required: true,
    },
    lga_id: {
        type: Number,
        required: true,
    },
    uniquewardid: {
        type: Number,
        required: true,
    },
    polling_unit_number: {
        type: String,
        required: true
    },
    polling_unit_name: {
        type: String,
        required: true
    },
    polling_unit_description: {
        type: String,
        required: false
    },
    lat: {
      type: String,
      required: true
    },
    long: {
        type: String,
        required: true
    },
    enteredByUser: {
      type: String
    },
    date_entered: {
        type: Date,
        default: Date.now
    },
    userIpAddress: {
        type: String,
    }
})

const PollingUnit = mongoose.model('Polling_unit', pollingUnit);
module.exports = PollingUnit

