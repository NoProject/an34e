import express from 'express'

import controllerTask from '../controllers/Controller.Task.js'

let routerTask = express.Router()

let task = new controllerTask()

routerTask.get('/:name', (req, res)=> {
	task.getById(req, res)
})

routerTask.post('/post', (req, res)=> {
	task.save(req, res)
})

routerTask.put('/put', (req, res)=> {
	task.updateById(req, res)
})

routerTask.delete('/delete:id', (req, res)=> {
	task.deleteById(req, res)
})

export default routerTask