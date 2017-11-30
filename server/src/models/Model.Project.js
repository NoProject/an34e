import database from '../database/database.js'

export default class ModelProject {
	constructor(data) {
		this._data = data;
	}

	getById(callback) {
		console.log(this._data)
		let conn = new database();
		conn.connection((data) => {

			data.collection('projects').find({ 'managers': this._data }).toArray()
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
			data.collection('projects').insertOne({
				name: this._data.name,
				startdate: this._data.startdate,
				finishdate: this._data.finishdate,
				description: this._data.description,
				managers: this._data.managers,
				developers: this._data.developers
				// managers: [
				// 	{user_mng_name: this._data.managers}
				// ],
				// developers: [
				// 	{user_dev_name: this._data.developers}
				// ]
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
					startdate: this._data.startdate,
					finishdate: this._data.finishdate,
					description: this._data.description,
					managers: this._data.managers,
					developers: this._data.developers
					// managers: [
					// 	{user_mng_name: this._data.managers}
					// ],
					// developers: [
					// 	{user_dev_name: this._data.developers}
					// ]
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