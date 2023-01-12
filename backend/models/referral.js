const mongoose = require("mongoose");

const referralSchema = mongoose.Schema({
    referral:{
        type:true,
        required:true
    }
})

var referraldata = mongoose.model('referraldata',referralSchema);
module.exports = referraldata;