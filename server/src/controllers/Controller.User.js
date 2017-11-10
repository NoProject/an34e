import default modelUser from '@/src/models/Model.User.js'

export default class controllerUser {
	constructor(){
		this._user = modelUser;
	}

	getById(req, res){
		let user = this._user(req.body.user)
		res.send(user.readById());
	}

	save(req, res){
		let user = this._user(req.body.user)
		user.create();
		res.send({message : 'user created', data : user})
	}

	updateByid(req, res){
		let user = this._user(req.body.user)
		user.update()
		res.send({message : 'user updated', data : user})
	}

	deleteById(req, res){
		let user = this._user(req.body.user)
		user.delete()
		res.send({message : 'user deleted', data : user})
	}
}


