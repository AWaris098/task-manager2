const mongoose = require('mongoose');
const User = require('../models/user.js')

const taskSchema = new mongoose.Schema({
    description:{
        type: String,
        require: true,
        trim : true,
    },
    completed:{
        type: Boolean,
        default : false

    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    }
},{
    timestamps : true
})


const Task= mongoose.model('Task',taskSchema)
module.exports = Task