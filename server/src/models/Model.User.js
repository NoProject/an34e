import database from '../database/database.js'
import mongoose from 'mongoose'

export default class ModelUser {
	constructor(data){
		this._data = data
	}
	readById() {
		let result

		let conn = new database();
		conn.connect((result)=>{
			console.log(result)
		})
		//console.log(database)
		/*conn.collection('user').find({name : 'carlos'})
			.then((data)=> {
				result = data
			})
			.err((err)=> {
				console.log(err)
			})*/
			/*return result*/
	}
}