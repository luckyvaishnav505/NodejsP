const mongoose  = require('mongoose');

const accountSchema = new mongoose.Schema({
    user :{ type:mongoose.Schema.Types.ObjectId , ref: 'Users', required: true},
    bankName:{ type: String,  required: true},
    accountNumber:{type: Number, required: true},
    balance: {type: Number, required: true, default: 0},
    bankCode:{type: String, required: true}

});

module.exports = new mongoose.model('Accounts', accountSchema);