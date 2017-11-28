import modelUser from '../models/Model.User.js'

export default class controllerUser {
	getById(req, res){
		let user = new modelUser(req.body.user);
		console.log(user);
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

	verifyLogin(req, res){
		let user = new modelUser(req.body.user);
		user.verify((data,err)=>{
			if(err)
				console.log(err)
			if(!data[0])
				res.send({message : 'login error'})
			else{
				let sess = req.session
				sess.user = data[0].username
				res.send({message : 'logged'})
			}
		})
	}
}


