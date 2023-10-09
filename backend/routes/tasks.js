const express = require("express");
const Task = require("../models/taskModel")
const router = express.Router();

//GET ALL tasks
router.get("/", (req, res) => {
    res.json({msg: "GET all tasks"})
});

//GET single tasks
router.get("/:id", (req, res) => {
    res.json({msg: "GET a tasks"})
});

//POST a new task
router.post("/", async (req, res) => {
    const {title, urgency, done} = req.body

    try {
        const task = await Task.create({title, urgency, done})
        res.status(200).json(task)
    } catch (error) {
        res.status(400).json({error: error.message})
        return
    }
    res.json({msg: "POST a new task"})
});

//Delete a task
router.delete("/:id", (req, res) => {
    res.json({msg: "delete a new task"})
});

//UPDATE a task
router.patch("/:id", (req, res) => {
    res.json({msg: "UPDATE a new task"})
});

module.exports = router;
