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
			data.collection('projects').find({name : this.beforeEdit}).toArray()
				.then((res) => {
					conn.getObjId((objId) => {
						let id = new objId(res[0]._id)
						data.collection('projects').updateOne({_id : id}, {
							$set: {
								name: this._data.name,
								description: this._data.description,
								startdate: this._data.startDate,
								finishdate: this._data.finishDate
							}
						})
						.then((response) => {
							data.collection('tasks').updateMany({project_owner: this.beforeEdit}, {
								$set: {
									project_owner : this._data.name
								}
							})
							.then((data) => {
								callback()
							})
							.catch((err) => {
								console.log(err)
							})
							data.close();
						})
						.catch((err) => {
							console.log(err)
						})
					})
				})
				.catch((err) => {
					console.log(err)
				})
		})
	}

	delete(callback) {
		let conn = new database();
		console.log(this._data)
		conn.connection((data) => {
			data.collection('projects').deleteOne({ name: this._data })
				.then((response) => {
					if (response.deletedCount > 0) {
					  data.collection('tasks').deleteMany({project_owner: this._data})
					  	.then((data) => {
					  		console.log(data)
					  		callback()
					  	})
					  	.catch((err) => {
					  		console.log(err)
					  	})
					  	data.close()
					}
				})
				.catch((err) => {
					console.log(err);
				})
		})
	}
}