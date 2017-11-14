import modelUser from '../models/Model.User.js'

export default class controllerUser {
	getById(req, res){
		let user = new modelUser(req.body.user);
		user.getById((data)=> {
			res.send({data : data});
		})
	}

	save(req, res){
		let user = new modelUser(req.body.user);
		user.create((data)=>{
			res.send({message : 'user created', data : data});
		})
	}

	updateById(req, res){
		let user = new modelUser(req.body.user);
		user.update((data)=> {
			res.send({message : 'user updated', data : data});
		});
	}

	deleteById(req, res){
		let user = new modelUser(req.body.user);
		user.delete((data)=> {
			res.send({message : 'user deleted', data : data});
		});
	}
}


