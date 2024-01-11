const mongoose = require('mongoose');

  const userShcema = new mongoose.Schema({
    name: { type:String, required: true},
    email: { type:String, unique: true, required : true}
  });

  //const  bank = new mongoose.model('bank',bankShema);

  module.exports =  new mongoose.model('User',userShcema);
  
