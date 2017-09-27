import mongoose from 'mongoose';

var friendsSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type: Number,
        required : true   
    }
    ,gender :{
        type : String,
        enum : ['M', 'F'],
        required : true
    }
})


mongoose.model('Friends', friendsSchema);