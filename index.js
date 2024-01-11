const express =  require('express');
const mongoose = require('mongoose');
const bankRoutes = require('./routes/bank-routes');
const userRoutes = require('./routes/user-routes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://luckyvaishnav55:passw0rd@cluster0.cp0nqx3.mongodb.net/Banking' )
.then(()=>{
     console.log('connected to databse')
});

app.use('/user',userRoutes);

app.use('/bank',bankRoutes);


app.listen(2000,()=>console.log('app is listining on port 2000'));