import default modelTask from '@/src/models/Model.Task.js'

export default class controllerTask {
	constructor(){
		this._task = modelTask
	}

	getById(req, res){
		let task = this._task(req.body.task)
		res.send(task.readById())
	}

	save(req, res){
		let task = this._task(req.body.task)
		task.create()
		res.send({message : 'task created', data : task})
	}

	updateById(req, res){
		let task = this._task(req.body.task)
		task.update()
		res.send({message : 'task updated', data : task})
	}

	deleteById(req, res){
		let task = this._task(req.body.task)
		task.delete()
		res.send({message : 'task deleted', data : task})
	}
}