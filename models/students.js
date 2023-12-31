const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Student = new Schema(
    {
        name: { type: String, required: true },
        gender: { type: String, required: true },
        class: { type: Number, required: true },
        Roll:{type:Number,required:true},
        Stream:{type:String,required:true},
        address:{type:String,required:true}
    },
    { timestamps: true },
)

module.exports = mongoose.model('students', Student)