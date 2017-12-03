import mongodb from 'mongodb'

export default class database{
	connection(callback){
		let connection = mongodb.MongoClient
		connection.connect('mongodb://noproject:noprojectnosql@ds115396.mlab.com:15396/projectx')
			.then((data)=>{
				console.log('database conected')
				callback(data)
			})
			.catch((err)=>{
				console.log(err)
			})
	}
	getObjId(callback) {
		let objId = mongodb.ObjectID;
		callback(objId);
	}
}