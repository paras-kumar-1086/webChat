const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

 const USERNAME = process.env.DB_USERNAME ; 
 const PASSWORD = process.env.DB_PASSWORD ;

const url = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.0tzgytr.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e)) 