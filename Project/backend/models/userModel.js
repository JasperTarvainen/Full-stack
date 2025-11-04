const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required:   [true, 'Please add a name']
    },
    email: {
        type: String,
        required:   [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required:   [true, 'Please add a password']
    },
    steamTradeLink: {
        type: String,
        required: [true, 'Add your steam tradelink.']
    }
},
{
  timestamps: true
})
module.exports = mongoose.model('User', userSchema)