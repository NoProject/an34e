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
		user.getById((data) => {
			if(!data[0]) {
				user.create((data)=>{
					res.send({message : 'ok'});
				})
			}
			else {
				if (data[0].username === user._data.name)
					res.send({message: 'username'})
				else
					if (data[0].email === user._data.email)
						res.send({message: 'email'})
			}
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


