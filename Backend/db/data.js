const mongoose = require('mongoose');

// require("dotenv").config();                                                   
// const connectionString = process.env.mongodb_url; 

// mongoose.connect('mongodb+srv://priyamaya2018:priyamaya2018@cluster0.jygiget.mongodb.net/assign6')
// .then(()=>{
//     console.log(`Connection to Database established`);
// })
// .catch((error)=>{
//     console.log(`Error in connecting to database ${error.message}`)
// })

const url = 'mongodb+srv://priyamaya2018:priyamaya2018@cluster0.jygiget.mongodb.net/assign6';
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log('Connected to MongoDB Atlas');
})
.catch((error)=>{
    console.error('MongoDB Atlas connection error:',error);
});