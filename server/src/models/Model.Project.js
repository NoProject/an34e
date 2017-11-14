import database from '../database/database.js'

export default class ModelProject {
	constructor(data){
		this._data = data;
	}

	getById(callback){
		let conn = new database();
		conn.connect((data)=> {
			data.collection('project').find().toArray()
				.then((data)=> {
					callback(data);
				})
				.catch((err)=> {
					console.log(err);
				})
				data.close();
		})
	}

	create(callback){
		let conn = new database();
		conn.connect((data)=>{
			data.collection('project').insertOne({name : this._data.name,
																						startDate : this._data.startDate,
																						finishDate : this._data.finishDate,
																						managers : this._data.managers,
																						developers : this._data.developers})
				.then((data)=> {
					callback(data);
				})
				.catch((err)=> {
					console.log(err)
				})
				data.close();
		})
	}

	update(callback){
		let conn = new database();
		conn.connect((data)=> {
			data.collection('project').updateOne({name : this.name}, {$set : {startDate : this._data.startDate,
																																				finishDate : this._data.finishDate,
																																				managers : this._data.managers,
																																				developers : this._data.developers}})
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
		conn.connect((data)=> {
			data.collection('project').deleteOne({name : this._data.name})
				.then((data)=> {
					callback(data);
				})
				.catch((err)=> {
					console.log(err);
				})
		})
	}
}