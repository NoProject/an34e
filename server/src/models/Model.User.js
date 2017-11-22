import database from '../database/database.js'

export default class ModelUser {
	constructor(data){
		this._data = data;
	}
	getById(callback) {
		let conn = new database();
		conn.connection((data)=> {
			console.log(data)
			data.collection('users').find().toArray()
				.then((data) => {
					console.log(data)
					callback(data);
				})
				.catch((err)=>{
					console.log(err);
				})
				data.close();
		})
	}

	create(callback){
		let conn = new database();
		conn.connection((data)=> {
			data.collection('user').insertOne({ name : this._data.name,
																					email : this._data.email,
																					password: this._data.password})
				.then((data)=> {
					callback(data);
				})
				.catch((err)=> {
					console.log(err);
				})
				data.close();
		})
	}

	update(callback){
		let conn = new database();
		conn.connection((data)=> {
			data.collection('user').updateOne({name : this._data.name}, {$set: {email : this._data.email}})
				.then((data)=> {
					callback(data);
				})
				.catch((err)=> {
					console.log(err);
				})
				data.close();
		})
	}

	delete(callback){
		let conn = new database();
		conn.connection((data)=> {
			data.collection('user').deleteOne({email : this._data.email})
				.then((data)=> {
					callback(data);
				})
				.catch((err)=> {
					console.log(err);
				})
				data.close();
		})
	}

	verify(callback){
		let conn = new database();
		conn.connection((data)=> {
			data.collection('user').find({name : this._data.name, password : this._data.password}).toArray()
				.then((data)=> {
					callback(data);
				})
				.catch((err)=> {
					console.log(err);
				})
				data.close();
		})
	}

}