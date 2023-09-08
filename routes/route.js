const express = require('express')

const Taskctrl = require("../controllers/control")
const router = express.Router()

router.post('/task', Taskctrl.createTask)
router.put('/task/:id', Taskctrl.updateTask)
router.delete('/task/:id', Taskctrl.deleteTask)
router.get('/task/:id', Taskctrl.getTaskById)
router.get('/tasks', Taskctrl.getTasks)


module.exports = router