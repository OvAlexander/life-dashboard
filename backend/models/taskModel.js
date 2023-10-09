const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Template of allowed data in the db (structure)
const taskSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    duedate: {
        type: Date,
        required: false
    },
    urgency:{
        type: String,
        required: true
    },
    done:{
        type: Boolean,
        required: true
    }
}, { timestamps: true })

//Model applies schema to a model that we can interact with a collection of that name
module.exports = mongoose.model("Task", taskSchema)
