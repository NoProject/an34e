import default modelProject from '@/src/models/Model.Project.js'

export default class controllerProject {
	constructor(){
		this._project = modelProject
	}

	getById(req, res){
		let project = this._project(req.body.project)
		res.send(project.readById())
	}

	save(req, res){
		let project = this._project(req.body.project)
		project.create()
		res.send({message : 'created project', data : project})
	}

	updateById(req, res){
		let project = this._project(req.body.project)
		project.uptade()
		res.send({message : 'updated project', data : project})
	}

	deleteById(req, res){
		let project = this._project(req.body.project)
		project.delete()
		res.send({message : 'deleted project', data : project})
	}
}