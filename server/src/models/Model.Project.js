import database from '../database/database.js'

export default class ModelProject {
	constructor(data) {
		this._data = data;
	}

	getById(callback) {
		let conn = new database();
		conn.connection((data)=> {
			console.log(this._data)
			data.collection('project').find({'managers.user_mng_name' : this._data}).toArray()
				.then((data)=> {
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
			data.collection('projects').insertOne({
				name: this._data.name,
				startdate: this._data.startDate,
				finishdate: this._data.finishDate,
				description: this._data.description,
				managers: this._data.managers,
				developers: this._data.developers
			})
				.then((data) => {
					callback(data);
				})
				.catch((err) => {
					console.log(err)
				})
			data.close();
		})
	}

	update(callback) {
		let conn = new database();
		conn.connection((data) => {
			data.collection('projects').updateOne({ name: this._data.name }, {
				$set: {
					startdate: this._data.startDate,
					finishdate: this._data.finishDate,
					description: this._data.description,
					managers: this._data.managers,
					developers: this._data.developers
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

	delete(callback) {
		let conn = new database();
		conn.connection((data) => {
			data.collection('projects').deleteOne({ name: this._data.name })
				.then((data) => {
					callback(data);
				})
				.catch((err) => {
					console.log(err);
				})
		})
	}
}