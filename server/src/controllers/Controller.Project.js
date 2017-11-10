import modelProject from '../models/Model.Project.js'

export default class controllerProject {
	getById(req, res){
		let project = new modelProject(req.body.project)
		res.send(project.readById())
	}

	save(req, res){
		let project = new modelProject(req.body.project)
		project.create()
		res.send({message : 'created project', data : project})
	}

	updateById(req, res){
		let project = new modelProject(req.body.project)
		project.uptade()
		res.send({message : 'updated project', data : project})
	}

	deleteById(req, res){
		let project = new modelProject(req.body.project)
		project.delete()
		res.send({message : 'deleted project', data : project})
	}
}