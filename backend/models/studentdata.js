const mongoose = require("mongoose")


const studentSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    roll:{
        type:String,
        required: true,
        unique:true,
    },
    registration:{
        type:String,
        required: true,
        unique: true,
    },
    subjects: {
        type: [String],     //array of strings
        required: true,
    },
    registered_on: {
        type: Date,
        default: new Date(),
    },
    rank:{
        type:Number,
        // required:true,
    },
    referral:{
        type:String,
    }

})

var studentdata = mongoose.model('studentdata', studentSchema);
module.exports=studentdata;