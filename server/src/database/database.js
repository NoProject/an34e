import mongodb from 'mongodb'

export default class database{
	connection(callback){
		let connection = mongodb.MongoClient
		connection.connect('mongodb://localhost:27017/test')
			.then((data)=>{
				console.log('database conected')
				callback(data)
			})
			.catch((err)=>{
				console.log(err)
			})
	}
}