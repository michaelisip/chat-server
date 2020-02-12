const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    name: { 
        type: String, 
        required: true 
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    },
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message'
        }
    ]
}, {
    timestamps: true,
})

const User = mongoose.model('User', userSchema)

module.exports = User