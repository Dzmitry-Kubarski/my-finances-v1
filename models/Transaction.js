const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    operation: { type: String, required: true },
    source: { type: String, required: true },
    sum: { type: Number, required: true },
    category: { type: String, required: true },
    date: { type: String, required: true },
    comment: { type: String, required: true },
    owner: { type: Types.ObjectId, ref: 'User' }
})

module.exports = model('Transaction', schema)
