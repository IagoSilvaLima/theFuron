import mongoose from 'mongoose';

var outputsSchema = new mongoose.Schema({
    date : {
        type : String,
        required : true,
    },
    hour : {
        type : String,
        required : true,
    },
    friend : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'Friends'
    },
    place : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'Places'
    }
    ,pierced : Boolean
})

mongoose.model('Outputs', outputsSchema);
