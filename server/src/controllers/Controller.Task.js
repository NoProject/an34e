import modelTask from '../models/Model.Task.js'

export default class controllerTask{
	getById(req, res){
		console.log(req.params.name)
		let task = new modelTask({project_owner: req.params.name})
		console.log(task)
		task.getById((data)=> {	
			res.send({tasks : data});
		})
	}

	save(req, res){
		let task = new modelTask(req.body.task)
		task.create((data)=> {
			console.log(data.message)
			if (!data.queryFailure) {
				res.send({message: "ok"})
			} else {
				res.send({message: "erro"})
			}	
			
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