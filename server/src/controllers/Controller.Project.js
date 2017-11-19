import modelProject from '../models/Model.Project.js'

export default class controllerProject {
	getById(req, res){
		let project = new modelProject(req.session.user)
		project.getById((data)=> {
			res.send({data : data});
		})
	}

	save(req, res){
		let project = new modelProject(req.body.project)
		project.create((data)=> {
			res.send({data : data});
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