import modelProject from '../models/Model.Project.js'

export default class controllerProject {
	getById(req, res){
		let project = new modelProject(req.session.user)
		project.getById((data)=> {
			console.log(data)
			res.send({projects : data});
		})
	}

	save(req, res){
		let project = new modelProject(req.body.project)
		console.log(req.session.user)
		project._data.managers = [req.session.user]
		project.create((data)=> {
			console.log(data)
			res.send({message : 'adicionado'});
		})
	}

	updateById(req, res){
		let project = new modelProject(req.body.project)
		project.update((data)=> {
			res.send({data : data});
		})
	}

	deleteById(req, res){
		let project = new modelProject(req.body.project)
		project.delete((data)=> {
			res.send({data : data});
		})
	}
}