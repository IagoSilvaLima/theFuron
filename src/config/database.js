import mongoose from 'mongoose';
const MONGODB_URI = 'mongodb://127.0.0.1/the_furon';

mongoose.Promise = global.Promise;

mongoose.connect(MONGODB_URI, {useMongoClient : true})
    .then(() =>{
        console.log('mongo connected')
    }, err =>{
        console.log(err);
})