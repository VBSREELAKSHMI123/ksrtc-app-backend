const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name":String,
        "email":String,
        "phone":String,
        "password":String,
        "bname":String,
        "route":String,
        "bno":String,
        "dname":String
    }
)

let busmodel=mongoose.model("buses",schema);
module.exports={busmodel}