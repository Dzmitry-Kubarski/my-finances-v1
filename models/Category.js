const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    title: { type: String, required: true },
    total: { type: Number, default: 0, required: true },
    owner: { type: Types.ObjectId, ref: 'User' }
})

module.exports = model('Category', schema)
