import mongoose from 'mongoose';

var placesSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    }
})

mongoose.model('Places', placesSchema);