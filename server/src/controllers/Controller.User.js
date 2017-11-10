import modelUser from '../models/Model.User.js'

export default class controllerUser {
	getById(req, res){
		let user = new modelUser(req.body.user)
		console.log("aqui")
		res.send({data: user.readById()})
	}

	save(req, res){
		let user = new modelUser(req.body.user)
		user.create();
		res.send({message : 'user created', data : user})
	}

	updateByid(req, res){
		let user = new modelUser(req.body.user)
		user.update()
		res.send({message : 'user updated', data : user})
	}

	deleteById(req, res){
		let user = new modelUser(req.body.user)
		user.delete()
		res.send({message : 'user deleted', data : user})
	}
}


