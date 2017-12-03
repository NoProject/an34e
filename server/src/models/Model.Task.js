import database from '../database/database.js'

export default class ModelTask {
	constructor(data) {
		this._data = data
	}

	getById(callback) {
		let conn = new database();
		conn.connection((data) => {
			data.collection('tasks').find({project_owner: this._data.project_owner}).toArray()
				.then((data) => {
					callback(data);
				})
				.catch((err) => {
					console.log(err);
				})
			data.close()
		})
	}

	update(callback) {
		let conn = new database();
		conn.getObjId((objId) => {
			let id = new objId(this._data._id)
			console.log(this._data._id)
			conn.connection((data) => {
				data.collection('tasks').updateOne({ _id: id }, {
					$set: {
						name: this._data.name,
						description: this._data.description,
						deadline: this._data.deadline,
						user_on: this._data.user_on,
						project_owner: this._data.project_owner,
						priority: this._data.priority,
						status: this._data.status
					}
				})
					.then((data) => {
						callback();
					})
					.catch((err) => {
						console.log(err);
					})
				data.close();
			})
		})
	}

	updateUserOn(callback) {
		let conn = new database();
		conn.getObjId((objId) => {
			let id = new objId(this._data._id)
			conn.connection((data) => {
				data.collection('users').find({ username: this._data.user_on }).toArray()
					.then((res) => {
						this._data.user_on = {id: res[0]._id, name: res[0].username};
						data.collection('tasks').updateOne({_id: id},{
							$set: {
								name: this._data.name,
								description: this._data.description,
								deadline: this._data.deadline,
								user_on: this._data.user_on,
								project_owner: this._data.project_owner,
								priority: this._data.priority,
								status: this._data.status	
							}
						})
							.then((response) => {
								callback()
							})
							.catch((err) => {
								console.log(err)
							})
						data.close();
					})
					.catch((err) => {
						console.log(err);
					})
					 /*{
					
					}*/
			})
		})
	}

	create(callback) {
		let conn = new database();
		conn.connection((data) => {
			data.collection('tasks').insertOne({
				name: this._data.name,
				description: this._data.description,
				deadline: this._data.deadline,
				user_on: this._data.user_on,
				project_owner: this._data.project_owner,
				priority: this._data.priority,
				status: this._data.status
			})
				.then((data) => {
					callback(data);
				})
				.catch((err) => {
					console.log(err);
				})
			data.close();
		})
	}

	delete(callback) {
		let conn = new database();
		conn.getObjId((objId) => {
			let id = new objId(this._data)
			conn.connection((data) => {
				data.collection('tasks').deleteOne({ _id: id })
					.then((data) => {
						callback(data);
					})
					.catch((err) => {
						console.log(err);
					})
				data.close();
			})
		})
	}
}