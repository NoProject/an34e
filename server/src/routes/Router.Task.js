import express from 'express'

import controllerTask from '@/src/controllers/Controller.Task.js'

let router = express.Router()

let task = new controllerTask()

router.get('/task', (req, res)=> {
	task.getById(req, res)
})

router.post('/task', (req, res)=> {
	task.save(req, res)
})

router.put('/task', (req, res)=> {
	task.updateById(req, res)
})

router.delete('/task', (req, res)=> {
	task.deleteById(req, res)
})

export default router