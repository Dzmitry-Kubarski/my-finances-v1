const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  transactions: [{ type: Types.ObjectId, ref: 'transaction' }],
  sources: [{ type: Types.ObjectId, ref: 'source' }],
  categories: [{ type: Types.ObjectId, ref: 'category' }],
})

module.exports = model('User', schema)
