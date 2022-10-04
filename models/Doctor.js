const mongoose = require('mongoose');

const Schema =  mongoose.Schema();

const DoctorSchema = new Schema({
    firstName: {
        type: 'string',
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    fields: {
        type: Array,
        required: true
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    }
});