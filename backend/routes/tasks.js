const express = require("express");
const {
    createTask,
} = require('../controllers/taskContoller')

const router = express.Router();

//GET ALL tasks
router.get("/", (req, res) => {
    
});

//GET single tasks
router.get("/:id", (req, res) => {
    res.json({msg: "GET a tasks"})
});

//POST a new task
router.post("/", createTask);

//Delete a task
router.delete("/:id", (req, res) => {
    res.json({msg: "delete a new task"})
});

//UPDATE a task
router.patch("/:id", (req, res) => {
    res.json({msg: "UPDATE a new task"})
});

module.exports = router;
