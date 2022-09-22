const mongoose = require('mongoose');

const Schema = mongoose.Schema();

const AdminSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    }
});

module.exports = mongoose.model('Admin', AdminSchema);

