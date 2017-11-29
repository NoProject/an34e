import database from '../database/database.js'

export default class ModelUser {
	constructor(data) {
		this._data = data;
	}
	getById(callback) {
		let conn = new database();
		conn.connection((data) => {
			data.collection('users').find({$or: [{username: this._data.name}, {email: this._data.email}]}).toArray()
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
			data.collection('users').insertOne({
				username: this._data.name,
				email: this._data.email,
				password: this._data.password
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

	update(callback) {
		let conn = new database();
		conn.connection((data) => {
			data.collection('users').updateOne({ username: this._data.name }, { $set: { email: this._data.email } })
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
			data.collection('users').deleteOne({ email: this._data.email })
				.then((data) => {
					callback(data);
				})
				.catch((err) => {
					console.log(err);
				})
			data.close();
		})
	}

	verify(callback) {
		let conn = new database();
		conn.connection((data,err) => {
			if (err) {console.log(err)}
			data.collection('users').find({ username: this._data.name, password: this._data.password }).toArray()
				.then((data) => {
					callback(data);
				})
				.catch((err) => {
					callback(err);
				})
				data.close();
		})
	}

}