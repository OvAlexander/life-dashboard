const { default: mongoose } = require("mongoose")
const Task = require("../models/taskModel")

//Get all task
const getTasks = async (req, res) => {
    const tasks = await Task.find({
        //done: false // can add filters
    }).sort({createdAt: -1})
    res.status(200).json(tasks)
}

//Get single task
const getTask = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such task"});
    }

    const task = await Task.findById(id)
    
    if (!task){
        return res.status(404).json({error: 'No such task'})
    }

    res.status(200).json({task})
}

//Create new task
const createTask = async(req, res) =>{
    const {title, urgency, done} = req.body

    //add doc to db
    try {
        const task = await Task.create({title, urgency, done})
        res.status(200).json(task)
    } catch (error) {
        res.status(400).json({error: error.message})
        return
    }
}

//Delete a task
const deleteTask = async(req, res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such task"});
    }

    const task = await Task.findOneAndDelete({_id: id})
    
    if (!task){
        return res.status(400).json({error: 'No such task'})
    }

    res.status(200).json({task})
}

//update a task

const updateTask = async(req, res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such task"});
    }

    const task = await Task.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    
    if (!task){
        return res.status(400).json({error: 'No such task'})
    }

    res.status(200).json({task})
}

module.exports = {
    getTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}