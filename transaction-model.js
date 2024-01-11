const mongoose = require('mongoose');

const transactionShema = new mongoose.Schema({
    fromAccount : { type: mongoose.Schema.Types.ObjectId, ref: 'Accounts', required: true},
    toAccount: { type: mongoose.Schema.Types.ObjectId, ref: 'Accounts', required: true},
    amount:{ type: Number, required: true}
})

module.exports = new mongoose.model('Transactions',transactionShema );