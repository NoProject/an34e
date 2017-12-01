import database from '../database/database.js'

export default class ModelTask {
	constructor(data) {
		this._data = data
	}

	get(callback){
		let conn = new database();
		conn.connection((data) => {
			data.collection('tasks').find({_id: this.data.id}).toArray()
				.then((data) => {
					callback(data)
				})
				.catch((err) => {
					console.log(err)
				})
		})
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
		conn.connection((data) => {
			data.collection('tasks').updateOne({ name: this._data.name }, {
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
					callback(data);
				})
				.catch((err) => {
					console.log(err);
				})
			data.close();
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
		conn.connection((data) => {
			data.collection('tasks').deleteOne({ name: this._data.name })
				.then((data) => {
					callback(data);
				})
				.catch((err) => {
					console.log(err);
				})
			data.close();
		})
	}
}