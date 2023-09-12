const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
    user:{
        type: String,
        required: true,
        trim: true
    },
    content:{
        type: String,
        required: true,
        trim: true
    }
});

const Message = model('Message',messageSchema)
module.exports = Message;