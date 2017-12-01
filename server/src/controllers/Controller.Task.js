import modelTask from '../models/Model.Task.js'

export default class controllerTask{
	get(req, res){
		console.log('hey')
		let task = new modelTask({id: req.params.id})
		task.get((data) => {
			res.send({task: data})
		})
	}

	getById(req, res){
		let task = new modelTask({project_owner: req.params.name})
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