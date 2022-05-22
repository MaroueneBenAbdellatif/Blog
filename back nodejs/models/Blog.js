const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DeviceSchema  = new Schema({
    title: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    upvote: {
        type: Number,
        default: 0,
    },
    downvote: {
        type: Number,
        default: 0,
    },
})
module.exports = mongoose.model('Blog' , DeviceSchema)
