import modelTask from '../models/Model.Task.js'

export default class controllerTask{
	getById(req, res){
		let task = new modelTask(req.body.task)
		task.getById((data)=> {
			res.send({data : data});
		})
	}

	save(req, res){
		let task = new modelTask(req.body.task)
		task.create((data)=> {
			res.send({data : data});
		})
	}

	updateById(req, res){
		let task = new modelTask(req.body.task)
		task.update((data)=> {
			res.send({message : 'task updated', data : data})
		})
	}

	deleteById(req, res){
		let task = new modelTask(req.body.task)
		task.delete((data)=> {
			res.send({message : 'task deleted', data : task})
		})
	}
}