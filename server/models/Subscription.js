const { Schema, model } = require('mongoose');

const subscriptionSchema = new Schema({
    messages:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Message'
        }
    ]
})

const Subscription = model('Subscription', subscriptionSchema);
module.exports = Subscription;