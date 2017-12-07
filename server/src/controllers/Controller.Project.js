import modelProject from '../models/Model.Project.js'

export default class controllerProject {
	getById(req, res){
		let project = new modelProject(req.session.user)
		project.getById((data)=> {
			res.send({projects : data});
		})
	}

	save(req, res){
		let project = new modelProject(req.body.project)
		project._data.managers = [req.session.user]
		project.create((data)=> {
			res.send({message : 'adicionado'});
		})
	}

	updateById(req, res){
		let project = new modelProject(req.body.project)
		project.beforeEdit = req.body.beforeEdit
		project.update(()=> {
			res.send({edited : 'edited'});
		})
	}

	deleteById(req, res){
		let project = new modelProject(req.params.name)
		project.delete(()=> {
			res.send({message: 'deleted'});
		})
	}
}