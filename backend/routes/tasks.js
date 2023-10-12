const express = require("express");
const {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask
} = require('../controllers/taskContoller')

const router = express.Router();

//GET ALL tasks
router.get("/", getTasks);

//GET single tasks
router.get("/:id", getTask);

//POST a new task
router.post("/", createTask);

//Delete a task
router.delete("/:id", deleteTask);

//UPDATE a task
router.patch("/:id", updateTask);

module.exports = router;
