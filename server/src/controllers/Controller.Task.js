import modelTask from '../models/Model.Task.js'

export default class controllerTask{

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
		if(task._data.do == 'fill') {
			console.log('eita')
			task._data.user_on = req.session.user
			task.updateUserOn(() => {
				res.send({task: task})	
			})
		} else {	
			task.update(() => {
				res.send({task: task})
			})
		}
	}

	deleteById(req, res){
		let task = new modelTask(req.params.id)
		console.log(task)
		task.delete((data)=> {
			res.send({deleted: data.deletedCount})
		})
	}
}