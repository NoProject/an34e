import modelTask from '../models/Model.Task.js'

export default class controllerTask{
	getById(req, res){
		let task = new modelTask(req.body.task)
		res.send(task.readById())
	}

	save(req, res){
		let task = new modelTask(req.body.task)
		task.create()
		res.send({message : 'task created', data : task})
	}

	updateById(req, res){
		let task = new modelTask(req.body.task)
		task.update()
		res.send({message : 'task updated', data : task})
	}

	deleteById(req, res){
		let task = new modelTask(req.body.task)
		task.delete()
		res.send({message : 'task deleted', data : task})
	}
}